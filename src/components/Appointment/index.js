import React from "react";
import './styles.scss';
import Header from './Header.jsx';
import Empty from "./Empty";


const Appointment = function(props) {
  return (
    <article className="appointment">
      <Header time="12pm" />
      
    </article>
  )
}

export default Appointment;
