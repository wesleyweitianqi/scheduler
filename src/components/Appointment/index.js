import React, {Fragment, useEffect} from "react";
import './styles.scss';
import Header from './Header.jsx';
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const Appointment = function(props) {
  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);
  
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && ( <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
      )}
      {mode === CREATE && <Form 
             name={props.name}
             value={props.value}
             interviewers={props.interviewers}
             onCancel={() =>back()}
      />} 
    </article>
  )
}

export default Appointment;
