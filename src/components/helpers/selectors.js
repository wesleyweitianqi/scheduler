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

export {getAppointmentsForDay}

