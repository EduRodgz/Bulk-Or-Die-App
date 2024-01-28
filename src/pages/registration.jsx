import APIService from "../services/apiService";
import "./registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [registration, setRegistration] = useState([]);
  const [newRegistration, setNewRegistration] = useState({
    username: "",
    password: "",
    password: "",
  });

  async function handleClick() {
    try {
      const service = new APIService();
      const savedRegistration = await service.newRegistration(newRegistration);
      console.log(savedRegistration);
      const updatedRegistration = await service.getRegistration();
      setRegistration(updatedRegistration);
      setNewRegistration({
        username: "",
        password: "",
        password: "",
      });

      localStorage.setItem("registration", JSON.stringify(registration));
      navigate("/login");
      
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewRegistration((prevRegistration) => ({
      ...prevRegistration,
      [name]: value,
    }

    ));
  }

  return (
    <div className="registration page">
      <h1>Registration</h1>
      <div>
        <p className="p5">Creater a user profile!</p>
        <div className="recipe-input">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Enter a username, password and email!
            </label>
            <input
              name="username"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Username"
            ></input>
            <input
              name="password"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Password"
            ></input>
            <input
              name="email"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="Email"
            ></input>
            <div>
              <button onClick={handleClick}>Register User</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Already have account? Login below!</p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Registration;
