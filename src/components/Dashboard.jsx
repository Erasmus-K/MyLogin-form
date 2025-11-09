// src/components/Dashboard.jsx
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user state
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
