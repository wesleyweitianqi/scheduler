import DayListItem from "./DayListItem";
import React from "react";


const DayList = function(props) {
  console.log(props)
  const allDayList = props.days.map(item => {
    
      return <DayListItem
              key={item.id} 
              value={item.name} 
              spots={item.spots} 
              selected={item.name === props.value}
              setDay={props.onChange}
             />
   
  })

   return (
    <ul>
      {allDayList}
    </ul>
  )
}

export default DayList;