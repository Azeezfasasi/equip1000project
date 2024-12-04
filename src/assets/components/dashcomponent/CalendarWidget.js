import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";

const CalendarWidget = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setShowPopup(true);
  };

  const renderHeader = () => {
    return (
      <div className="header">
        <h2>{format(currentMonth, "MMMM yyyy")}</h2>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const date = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column" key={i}>
          {format(addDays(date, i), "EEE")}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;

        days.push(
          <div
            className={`column cell ${!isSameMonth(day, monthStart) ? "disabled" : ""} ${
              isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => handleDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="event">{events[format(cloneDay, "yyyy-MM-dd")]}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const handleEventSubmit = (event) => {
    event.preventDefault();
    const eventText = event.target.elements.eventText.value;
    setEvents((prevEvents) => ({
      ...prevEvents,
      [format(selectedDate, "yyyy-MM-dd")]: eventText,
    }));
    setShowPopup(false);
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {showPopup && (
        <div className="popup">
          <h3>{format(selectedDate, "MMMM d, yyyy")}</h3>
          <form onSubmit={handleEventSubmit}>
            <input type="text" name="eventText" placeholder="Add or view an event" defaultValue={events[format(selectedDate, "yyyy-MM-dd")]} />
            <button type="submit">Save</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarWidget;
