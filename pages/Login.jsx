import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
     <h1>🌸 Bloom Planner</h1>
<p>Flower Event Scheduling & Management System</p>

      <button onClick={handleLogin}>
        Enter Dashboard
      </button>
    </div>
  );
}

export default Login;