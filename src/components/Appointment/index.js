import React from "react";
import './styles.scss';
import Header from './header.jsx';


const Appointment = function(props) {
  return (
    <article className="appointment">
      <Header time="12pm" />
    </article>
  )
}

export default Appointment;
