import React, {Fragment, useEffect} from "react";
import './styles.scss';
import Header from './Header.jsx';
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETE = 'DELETE';
const CONFIRM = 'CONFIRM';
const Appointment = function(props) {
  
  const {bookInterview, id, cancelInterview} = props;
  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    }
    transition(SAVING);
    bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW);
    })
    .catch(err => console.error(err))
  };

  const onDelete = () => {
    transition(CONFIRM)
  };
  
  const onConfirm = () => {
    transition(DELETE)
    cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(err => console.error(err)) 
  }

  const onCancel =() => {
    transition(SHOW)
  };

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && ( <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete = {onDelete}
      />
      )}
      {mode === CREATE && <Form 
             name={props.name}
             value={props.value}
             interviewers={props.interviewers}
             onCancel={() =>back()}
             onSave={save}
      />} 
      {mode === SAVING && <Status value="Saving" />} 
      {mode === DELETE && <Status value="Deleting" />}
      {mode === CONFIRM && <Confirm onCancel={onCancel} onConfirm={onConfirm}/>}
    </article>
  )
}

export default Appointment;
