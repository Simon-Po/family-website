import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from '@fullcalendar/interaction'

const Calender = () => {
    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }

    
  return (
    <div className=' '>

    <FullCalendar 
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        
        events={[
            { title: "Simon Dijon", date:"2023-01-20"},
            { title: "Simon & Lea", date:"2023-01-21"}
        ]}
        
        />
    </div>
  )
}

export default Calender