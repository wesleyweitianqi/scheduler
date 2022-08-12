import React, {Fragment} from "react";
import './styles.scss';
import Header from './Header.jsx';
import Empty from "./Empty";
import Show from "./Show";


const Appointment = function(props) {
  console.log(props.interview)
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />}
    </article>
  )
}

export default Appointment;
