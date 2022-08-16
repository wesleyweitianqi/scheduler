import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

const InterviewerList = function(props) { 
  
  const interviewerArray = Object.values(props.interviewers);
  const allInterviewerList = interviewerArray.map(interviewer => {
    return  <InterviewerListItem 
              key={interviewer.id}
              id={interviewer.id}
              name={interviewer.name}
              avatar={interviewer.avatar}
              selected ={interviewer.id === props.value}
              setInterviewer={props.setInterviewer}
            /> 
  })
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {allInterviewerList}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers : PropTypes.array.isRequired
}
export default InterviewerList;