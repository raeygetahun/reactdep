import React from "react";
import "./schedule.css"; // Import the CSS file
import { Grid } from "@mui/material";

const Schedule = () => {
  const scheduleData = [
    {
      day: "First Day",
      events: [
        { time: "08:00", event: "Registration and SWAG pick up" },
        { time: "10:00", event: "Opening Ceremony" },
        { time: "10:30", event: "Icebreaker" },
        { time: "11:00", event: "Hacking Starts!" },
        { time: "12:30", event: "Lunch" },
        { time: "15:00", event: "Tech Talk:" },
        { time: "19:00", event: "Dinner" },
        { time: "22:00", event: "Mini Event" },
      ],
    },
    {
      day: "Second Day",
      events: [
        { time: "00:00", event: "Midnight Snacks" },
        { time: "03:00", event: "NERF gun battle" },
        { time: "11:00", event: "Hacking Ends" },
        { time: "11:00", event: "Brunch" },
        { time: "11:30", event: "Judges Meeting / Orientation" },
        { time: "13:30", event: "Judging & Pitches" },
        { time: "15:00", event: "Closing Ceremony" },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      <h1 className="schedule-heading">SCHEDULE</h1>
      <div> For the event schedule please check back on the 13th of March</div>
      {/* <Grid container spacing={2}>
      {scheduleData.map((day, index) => (
        <Grid item md={6} key={index}>
          <ul className="schedule-list">
            <div className="schedule-day">{day.day}</div>
            {day.events.map((event, eventIndex) => (
              <li key={eventIndex} className="schedule-item">
                <span className="time">{event.time}</span>
                <span className="event">{event.event}</span>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
      </Grid> */}
    </div>
  );
};

export default Schedule;
