import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import "./Sidebar.css"; 

const Sidebar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="Main-sidebar sidebar-container p-3">
      <h5 className="fw-bold">My calendar</h5>

      <div className="calendar-container my-3">
        <Calendar onChange={setDate} value={date} className="custom-calendar" />
      </div>

      <div className="event-list mt-4">
        {[
          {
            name: "Event Name",
            time: "02:00 PM",
            image: "https://via.placeholder.com/60",
          },
          {
            name: "Event Name",
            time: "02:00 PM",
            image: "https://via.placeholder.com/60",
          },
          {
            name: "Event Name",
            time: "02:00 PM",
            image: "https://via.placeholder.com/60",
          },
          {
            name: "Event Name",
            time: "02:00 PM",
            image: "https://via.placeholder.com/60",
          },
        ].map((event, index) => (
          <div
            key={index}
            className="event-card d-flex align-items-center my-2"
          >
            <img src={event.image} alt="Event" className="event-img me-2" />
            <div>
              <h6 className="mb-1 fw-bold">{event.name}</h6>
              <p className="text-muted small mb-0">{event.time}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary w-100 mt-3">All events</button>
    </div>
  );
};

export default Sidebar;
