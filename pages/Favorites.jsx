import Navbar from "../components/Navbar";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

function Favorites() {
  const { events } = useContext(EventContext);

  const favoriteEvents = events.filter(
    (event) => event.favorite
  );

  return (
    <>
      <Navbar />

      <div className="favorite-card">
        <h2>💖 Favorite Events</h2>

        <div className="stats-card">
          <h3>Total Favorites: {favoriteEvents.length}</h3>
        </div>

        {favoriteEvents.length === 0 ? (
          <p>No favorite events yet</p>
        ) : (
          <ul>
            {favoriteEvents.map((event) => (
              <li key={event.id}>
                <strong>{event.name}</strong>

                <br />

                🌸 Category: {event.category}

                <br />

                📅 Date: {event.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Favorites;