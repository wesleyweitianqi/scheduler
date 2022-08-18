const { default: Appointment } = require("components/Appointment");

const getAppointmentsForDay = (state, day) => {
  const expectedDay =state.days.filter(item => item.name === day)
  let expectAppointments = [];
  for (let i of expectedDay) {
    expectAppointments.push(...i.appointments)
  }
  const result = expectAppointments.map(item => state.appointments[item.toString()])
  return result;
};

const getInterview = (state, obj) => {
  if (!obj) {
    return null;
  }
  const id = obj.interviewer
  return {
    student: obj.student,
    interviewer : state.interviewers[id]
  } 
};

const getInterviewersForDay = (state, day) => {
  const expectedDay =state.days.filter(item => item.name === day) 
  const interviewersArr = {...expectedDay[0]}.interviewers || [];
  const interviewersForDay = interviewersArr.map(id => state.interviewers[id])
  return interviewersForDay;
};
  
module.exports = {getAppointmentsForDay, getInterview, getInterviewersForDay }

