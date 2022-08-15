import React from "react";
import Button from "../Button";
import InterviewerList from "../InterviewerList";
import { useState } from "react";

const Form = (props) => {
  const [student, setStudent] =useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const reset = () => {
    setStudent("")
    setInterviewer('null')
    return
  }
  const cancel =() => {
    reset();
    return
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={e => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={e =>setStudent(e.target.value)}
            
          />
        </form>
      <InterviewerList 
        interviewers={props.interviewers}
        setInterviewer={setInterviewer}
        value={interviewer}
        
        
      />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => props.onCancel()}>Cancel</Button>
          <Button confirm onClick={()=>props.onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form;