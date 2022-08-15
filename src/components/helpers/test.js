function getAppointmentsForDay(state, day){
  const expectedDay =state.days.filter(item => item.name === day)
  // console.log(expectedDay)
  const expectAppointments = [];
  for (let i of expectedDay) {
    expectAppointments.push(...i.appointments)
  }
  const result = expectAppointments.map(item => state.appointments[item.toString()])
  return result;
}

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [1,2]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
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

const dailyAppointments = getAppointmentsForDay(state, 'Monday')

function getInterview(state, obj) {
  if (!obj) {
    return null;
  }
  const id = obj.interviewer
  return {
    student: obj.student,
    interviewer :state.interviewers[id]
  }
  
}


const schedule = dailyAppointments.map(appointment => {
  const interview = getInterview(state, appointment.interview) 
  
})

const getInterviewersForDay = (state, day) => {
  const expectedDay =state.days.filter(item => item.name === day)
  // console.log("&&&&&&&&&&&",expectedDay)
  const expectinterviewers = [];
  for (let i of expectedDay) {
    expectinterviewers.push(...i.interviewers)
  }
  const result = expectinterviewers.map(item => state.interviewers[item.toString()])
  console.log("result", result)
  return [...result];
};



console.log(getInterviewersForDay(state, 'Monday'))
// console.log(state.days.appointments)