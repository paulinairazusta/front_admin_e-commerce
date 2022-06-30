import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-card.css"
import { useState } from "react";

const CalendarCard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar locale="en-EN" calendarType="US" onChange={onChange} value={value} className="reactCalendar" />
    </div>
  );
};

export default CalendarCard;
