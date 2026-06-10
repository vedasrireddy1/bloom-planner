import { useContext } from "react";
import { EventContext } from "../context/EventContext";

function EventList() {
  const {
    events,
    deleteEvent,
    toggleFavorite,
  } = useContext(EventContext);

  const getFlowerIcon = (category) => {
    switch (category) {
      case "Rose":
        return "🌹";

      case "Tulip":
        return "🌷";

      case "Orchid":
        return "🌺";

      case "Sunflower":
        return "🌻";

      default:
        return "🌸";
    }
  };

  return (
    <div className="event-list">
      <h3>🌷 Upcoming Events</h3>

      {events.length === 0 ? (
        <p>No Events Added</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>
                {getFlowerIcon(event.category)}
                {" "}
                {event.name}
              </strong>

              <br />

              🌸 Category:
              {" "}
              {event.category}

              <br />

              📅 Date:
              {" "}
              {event.date}

              <br />
              <br />

              <button
                onClick={() =>
                  toggleFavorite(event.id)
                }
              >
                {event.favorite
                  ? "💖 Favorited"
                  : "🤍 Favorite"}
              </button>

              <button
                onClick={() =>
                  deleteEvent(event.id)
                }
              >
                🗑 Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventList;