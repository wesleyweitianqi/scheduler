import React, {Fragment, useEffect} from "react";
import './styles.scss';
import Header from './Header.jsx';
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETE = 'DELETE';
const CONFIRM = 'CONFIRM';
const EDIT = 'EDIT';
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

const Appointment = function(props) {
  const {bookInterview, id, cancelInterview, interview} = props;
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
    .catch(err => {
      transition(ERROR_SAVE, true)
    })
  };

  const onDelete = () => {
    transition(CONFIRM)
  };
  
  const onConfirm = () => {
    transition(DELETE, true)
    cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(err => {
      transition(ERROR_DELETE, true)
    }) 
  }

  const onCancel =() => {
    transition(SHOW)
  };

  const onEdit =() => {
    transition(EDIT)
  };

  const onClose = () => {
    back();
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && ( <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete = {onDelete}
        onEdit = {onEdit}
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
      {mode === CONFIRM && <Confirm onCancel={back} onConfirm={onConfirm}/>}
      {mode === EDIT && <Form 
        name={props.name}
        value={props.value}
        interviewers={props.interviewers}
        onCancel={() =>back()}
        onSave={save}
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        
      />}
      {mode === ERROR_DELETE && <Error onClose={onClose}/>}
      {mode === ERROR_SAVE && <Error onClose={onClose}/>}
    </article>
  )
}

export default Appointment;
