// src/components/Signup.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/users"; // JSON server URL

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if user already exists
    const res = await axios.get(`${API}?username=${username}`);
    if (res.data.length > 0) {
      alert("Username already exists!");
      return;
    }

    // Save new user
    await axios.post(API, { username, password });
    alert("Signup successful!");
    navigate("/login"); // Redirect to login
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
