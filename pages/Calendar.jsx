import Navbar from "../components/Navbar";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

function Calendar() {
  const { events } = useContext(EventContext);

  const today = new Date().toISOString().split("T")[0];

  const todayEvents = events.filter(
    (event) => event.date === today
  );

  return (
    <>
      <Navbar />

      <div className="calendar-card">
        <h2>📅 Event Calendar</h2>

        <div className="stats-card">
          <h3>Total Scheduled Events: {events.length}</h3>
          <h3>Today's Events: {todayEvents.length}</h3>
        </div>

        <h3>🌷 Upcoming Events</h3>

        {events.length === 0 ? (
          <p>No events scheduled</p>
        ) : (
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <strong>{event.name}</strong>

                <br />

                🌸 Category: {event.category}

                <br />

                📅 Date: {event.date}

                <br />

                {event.favorite ? "💖 Favorite Event" : "🤍 Regular Event"}
              </li>
            ))}
          </ul>
        )}

        <br />

        <h3>⭐ Today's Events</h3>

        {todayEvents.length === 0 ? (
          <p>No events scheduled for today</p>
        ) : (
          <ul>
            {todayEvents.map((event) => (
              <li key={event.id}>
                🌸 {event.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Calendar;