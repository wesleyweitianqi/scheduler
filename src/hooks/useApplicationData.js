import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAppointmentsForDay } from "components/helpers/selectors";


export default function useApplicationData () {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
    spots: {}
  });
  const setDay = (day) => setState((prev) => ({ ...prev, day }));
  const setDays = (days) => setState((prev) => ({ ...prev, days }));
  const setSpots = (spots) => setState(prev =>({...prev, spots}) )

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ]).then((all) => {
      
      setState((prev) => ({
        ...prev,
        days: [...all[0].data],
        appointments: { ...all[1].data },
        interviewers: { ...all[2].data },
        spots: {...all[0].data.spots}
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
  
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        setState({ ...state, appointments });   
      })
      .then(() => {
       axios.get("http://localhost:8001/api/days").then(res => {
        setState((prev) => ({
          ...prev,
          days: [...res.data], 
        })); 
       })
      })
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
    .then(() => {
      axios.get("http://localhost:8001/api/days").then(res => {
        setState((prev) => ({
          ...prev,
          days: [...res.data], 
        })); 
      })
    })
  }
  return {state, setDay, bookInterview, cancelInterview}
}