import APIService from "../services/apiService";
import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
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
      const name = e.target.name;
      const value = e.target.value;
  
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    

  return (
    <div className="login page">
      <h1>Login</h1>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter a username, password and email!
        </label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Username"
          onChange={handleInputChange}
          ></input>
        <input
          name="password"
          type="text"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Password"
          onChange={handleInputChange}
          ></input>
        <input
          name="email"
          type="text"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="Email"
          onChange={handleInputChange}
          ></input>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="p-para">
        <p>If you do not have an account you can register down below.</p>
        </div>
        <div className="space">
          <a href="/registration">Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
