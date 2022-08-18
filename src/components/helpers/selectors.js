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

// const getInterview = (state, obj) => {
//   if (!obj) {
//     return null;
//   }
//   const id = obj.interviewer
//   return {
//     student: obj.student,
//     interviewer : state.interviewers[id]
//   } 
// };
function getInterview(state, interview) {

  let filteredInterview = null
  if (interview) {
    const getInterviewer = state.interviewers[interview.interviewer];
    filteredInterview = { student: interview.student, interviewer: getInterviewer };
  };
  return filteredInterview;
}

// const getInterviewersForDay = (state, day) => {
//   const expectedDay =state.days.filter(item => item.name === day) 
//   const interviewersArr = {...expectedDay[0]}.interviewers || [];
//   const interviewersForDay = interviewersArr.map(id => state.interviewers[id])
//   return interviewersForDay;
// };
function getInterviewersForDay(state, day) {

  const getInterviewersId = state.days.filter(d => d.name === day);
  const filteredInterviewer = [];

  if (getInterviewersId.length > 0) {
    getInterviewersId[0].interviewers.forEach((id) => {
      filteredInterviewer.push(state.interviewers[id]);
    });
  };

  return filteredInterviewer;
}
  
module.exports = {getAppointmentsForDay, getInterview, getInterviewersForDay }

