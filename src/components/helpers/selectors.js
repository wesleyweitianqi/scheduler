const getAppointmentsForDay = (state, day) => {
  const expectedDay =state.days.filter(item => item.name === day)
  const expectAppointments = [];
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
  const expectinterviewers = [];
  for (let i of expectedDay) {
    expectinterviewers.push(...i.interviewers)
  }
  const result = expectinterviewers.map(item => state.interviewers[item.toString()])
  return [...result];
};
  
    

 
    


     
 


module.exports = {getAppointmentsForDay, getInterview, getInterviewersForDay }

