import React, {useState, useEffect} from "react";
import DayList from "./DayList";
import Appointment from "./Appointment/index";
import axios, { Axios } from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay} from "./helpers/selectors";

import "components/Application.scss";


export default function Application() {
  const[state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = day => setState(prev=> ({...prev, day}));
  const setDays = days => setState(prev => ({...prev, days}));
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);
 
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      // console.log(all[0])
      // console.log(all[1])
      // console.log(all[2])
      setState(prev =>({...prev, days : [...all[0].data], appointments : {...all[1].data} , interviewers: {...all[2].data}}) )
    })
  },[])
  
  
  // const interviewers = getInterviewersForDay(state, state.day);
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
      /> 
    )
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
        {schedule}
      </section>
    </main>
  );
}
