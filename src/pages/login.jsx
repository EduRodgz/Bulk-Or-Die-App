import APIService from "../services/apiService";
import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive1">
    <iframe
      width="200"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={`YouTube Video ${embedId}`}
    />
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleLogin = async () => {
    try {
      const service = new APIService();
      const isValidUser = await service.validateUser(loginData);

      if (isValidUser) {
        navigate("/home");
      } else {
        alert("Invalid username, password, or email. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login page">
      <h1>Login</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Enter your username, password, and email:
        </label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={handleInputChange}
          required
        />
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
        <p>If you do not have an account, you can register below.</p>
        <div className="space">
          <a href="/registration">Register</a>
        </div>
        <YoutubeEmbed embedId="lfppdaW24YQ" />
      </div>
    </div>
  );
};

export default Login;

