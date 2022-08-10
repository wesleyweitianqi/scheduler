import DayListItem from "./DayListItem";
import React from "react";


const DayList = function(props) {
  console.log(props)
  const allDayList = props.days.map(item => {
    
      return <DayListItem
              key={item.id} 
              name={item.name} 
              spots={item.spots} 
              selected={item.name === props.day}
              setDay={props.setDay}
             />
   
  })

   return (
    <ul>
      {allDayList}
    </ul>
  )
}

export default DayList;