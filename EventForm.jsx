import { useState, useRef, useContext } from "react";
import { EventContext } from "../context/EventContext";

function EventForm() {
  const inputRef = useRef();

  const { addEvent } = useContext(EventContext);

  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("Rose");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventName.trim() === "" || date === "") {
      setMessage("Please fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      name: eventName,
      category,
      date,
      favorite: false,
    };

    addEvent(newEvent);

    setMessage("Event Added Successfully!");

    setEventName("");
    setDate("");
  };

  return (
    <div>
      <h3>🌸 Add Flower Event</h3>

      <button onClick={focusInput}>
        Focus Input
      </button>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) =>
            setEventName(e.target.value)
          }
        />

        <br />
        <br />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>Rose</option>
          <option>Tulip</option>
          <option>Orchid</option>
          <option>Sunflower</option>
        </select>

        <br />
        <br />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Add Event
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default EventForm;