import React, { useState, useEffect } from "react";
import DayList from "./DayList";
import Appointment from "./Appointment/index";
import axios from "axios";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "./helpers/selectors";

import "components/Application.scss";

export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prev) => ({ ...prev, day }));
  const setDays = (days) => setState((prev) => ({ ...prev, days }));
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ]).then((all) => {
      // console.log(all[0])
      // console.log(all[1])
      // console.log(all[2])
      setState((prev) => ({
        ...prev,
        days: [...all[0].data],
        appointments: { ...all[1].data },
        interviewers: { ...all[2].data },
      }));
    });
  }, []);

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],

      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    // console.log(appointments[id]);
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        setState({ ...state, appointments });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

   const cancelInterview = (id) => {
    
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments, 
      [id]: appointment
    };
   
    return axios
    .delete(`http://localhost:8001/api/appointments/${id}`)
    .then(() => {
      setState({...state, appointments });
    })
    .catch(err => console.error(err))
  }

 
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        {...appointment}
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">{schedule}</section>
    </main>
  );
}
