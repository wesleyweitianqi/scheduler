const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [1,2,4]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: [1, 2]
      
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};

const getAppointmentsForDay = (state, day) => {
  const expectedDay =state.days.filter(item => item.name === day)
  const appointments = {...expectedDay[0]}.appointments || [];
  const result = appointments.map(item=> state.appointments[item.toString()])
  return result;
};

const [first, second] = getAppointmentsForDay(state, "Tuesday")


const getInterviewersForDay = (state, day) => {
  const expectedDay =state.days.filter(item => item.name === day) 
  const interviewersArr = {...expectedDay[0]}.interviewers || [];
  const interviewersForDay = interviewersArr.map(id => state.interviewers[id])
  // console.log(expectedDay, interviewersArr, interviewersForDay)
  return interviewersForDay;
};
  
console.log(getInterviewersForDay(state, "Tuesday"))
