import { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

function EventProvider({ children }) {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const toggleFavorite = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id
          ? { ...event, favorite: !event.favorite }
          : event
      )
    );
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        deleteEvent,
        toggleFavorite,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;