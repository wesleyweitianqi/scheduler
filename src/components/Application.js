import React, {useState, useEffect} from "react";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment/index";
import axios, { Axios } from "axios";
import { getAppointmentsForDay } from "./helpers/selectors";

import "components/Application.scss";
import DayListItem from "./DayListItem";

export default function Application() {
  const[state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  console.log(state.days)  // *********

  const setDay = day => setState(prev=> ({...prev, day}));
  const setDays = days => setState(prev => ({...prev, days}));
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const appointmentsList = dailyAppointments.map(appointment => {
    return (<Appointment 
             key={appointment.id} 
             {...appointment}
           />)
  }) 

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      console.log(all[0])
      console.log(all[1])
      console.log(all[2])
      setState(prev =>({...prev, days : all[0].data, appointments : all[1].data}) )
    })
  },[])


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
  <DayList
    days={state.days}
    value={state.day}
    onChange={setDay}
  />
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {appointmentsList}
      </section>
    </main>
  );
}
