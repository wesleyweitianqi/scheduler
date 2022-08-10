import DayListItem from "./DayListItem";
import React from "react";


const DayList = function(props) {
  const allDayList = props.days.map(day => {
    return <DayListItem
              key={props.day.id} 
              name={props.day.name} 
              spots={props.day.spots} 
              selected={props.day.name === props.day}
              setDay={props.setDay}>{props.day} 
           </DayListItem>
  })
  
   return (
    <ul>
      {allDayList}
    </ul>
  )
}

export default DayList;