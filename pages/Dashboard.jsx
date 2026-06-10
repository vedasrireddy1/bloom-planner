import { useContext } from "react";
import Navbar from "../components/Navbar";
import EventContainer from "../components/EventContainer";
import Footer from "../components/Footer";
import { EventContext } from "../context/EventContext";

function Dashboard() {
  const { events } = useContext(EventContext);

  const favoriteCount = events.filter(
    (event) => event.favorite
  ).length;

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        {/* Hero Section */}

        <div className="stats-card">
          <h1>🌸 Bloom Planner</h1>

          <p>
            Organize flower festivals,
            exhibitions, weddings,
            garden shows and floral events.
          </p>
        </div>

        {/* Quote Section */}

        <div className="stats-card">
          <h3>🌼 Flower Inspiration</h3>

          <p>
            "Flowers always make people
            better, happier and more helpful."
          </p>
        </div>

        {/* Statistics */}

        <div className="stats-card">
          <h3>Total Events: {events.length}</h3>

          <h3>Favorite Events: {favoriteCount}</h3>
        </div>

        <EventContainer />

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;