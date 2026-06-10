import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <nav>
      <h2>🌸 Bloom Planner</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/favorites">Favorites</Link>

      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;