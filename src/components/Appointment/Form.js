import React from "react";
import Button from "../Button";
import InterviewerList from "../InterviewerList";
import { useState } from "react";

const Form = (props) => {
  
  
  const [student, setStudent] =useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const [error, setError] = useState("");
  const reset = () => {
    setStudent("")
    setInterviewer('null')
    return
  }
  const cancel =() => {
    reset();
    return
  }
  function validate() {
    if (student === "") {
      setError('Student name cannot be blank');
      return;
    }  
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={e => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder={student? student : "Enter Student Name"}
            value={student}
            data-testid="student-name-input"
            onChange={e =>setStudent(e.target.value)}
          />
        </form>
      { error !== "" && <section className="appointment__validation">{error}</section> }
      <InterviewerList 
        interviewers={props.interviewers}
        setInterviewer={setInterviewer}
        value={interviewer}
        interviewer={props.interviewer}
        
        
        
        
      />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => {
            props.onCancel()
          }}>Cancel</Button>
          <Button confirm onClick={()=>{
            validate()
          }}>Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form;