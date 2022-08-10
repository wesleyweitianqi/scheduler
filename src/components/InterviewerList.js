import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

const InterviewerList = function(props) {
  console.log(props)
  const interviewerArray = props.interviewers;
  const allInterviewerList = interviewerArray.map(item => {
    return  <InterviewerListItem 
              key={item.id}
              id={item.id}
              name={item.name}
              avatar={item.avatar}
              selected ={item.id === props.interviewer}
              setInterviewer={props.setInterviewer}
            /> 
  })
  // console.log(allInterviewerList)
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {allInterviewerList}
      </ul>
    </section>
  );
}

export default InterviewerList;