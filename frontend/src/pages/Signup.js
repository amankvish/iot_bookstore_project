import React, { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(userData);
      navigate("/login");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
