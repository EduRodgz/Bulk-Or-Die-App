import "./bulking.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Bulking() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    sex: "",
    weight: "",
    height: "",
    activity: "",
  });

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    //create copy, modify the copy, and finally set the copy back.
    let copy = { ...profile };
    copy[name] = value;
    setProfile(copy);
  }

  function saveProfile() {
   // console.log(profile);

    // save to local storage
    localStorage.setItem("profile", JSON.stringify(profile));
    navigate("/profile");
  }

  return (
    <div className="content-page">
      <h1>Fill out general information about yourself!</h1>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input
          name="name"
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="John Smith"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Age
        </label>
        <input
          name="age"
          onChange={handleInputChange}
          type="number"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="0-99"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput3" className="form-label">
          Sex
        </label>
        <input
          name="sex"
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="formGroupExampleInput3"
          placeholder="Type M or F"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput4" className="form-label">
          Weight
        </label>
        <input
          name="weight"
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="formGroupExampleInput4"
          placeholder="lbs"
        ></input>
      </div>
      <label htmlFor="formGroupExampleInput5" className="form-label">
        Height
      </label>
      <input
        name="height"
        onChange={handleInputChange}
        type="number"
        className="form-control"
        id="formGroupExampleInput5"
        placeholder="height in cm"
      ></input>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput3" className="form-label">
          How many minutes do you workout for?
        </label>
        <input
          name="activity"
          onChange={handleInputChange}
          type="number"
          className="form-control"
          id="formGroupExampleInput6"
          placeholder="(1-7)"
        ></input>
      </div>
      <div>
        <button onClick={saveProfile} className="btn-color">
          Save Profile
        </button>
      </div>
      <div className="reference">
        <h5>Reference</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Feet/Inches</th>
              <th scope="col">Cm</th>
              <th scope="col">Activity level</th>
              <th scope="col">Minutes you workout a day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5'0</td>
              <td>152.4</td>
              <td>1</td>
              <td>15</td>
            </tr>
            <tr>
              <td>5'1</td>
              <td>154.9</td>
              <td>2</td>
              <td>30</td>
            </tr>
            <tr>
              <td>5'2</td>
              <td>157.4</td>
              <td>3</td>
              <td>45</td>
            </tr>
            <tr>
              <td>5'3</td>
              <td>160.0</td>
              <td>4</td>
              <td>60</td>
            </tr>
            <tr>
              <td>5'4</td>
              <td>162.2</td>
              <td>5</td>
              <td>75</td>
            </tr>
            <tr>
              <td>5'5</td>
              <td>165.1</td>
              <td>6</td>
              <td>90</td>
            </tr>
            <tr>
              <td>5'6</td>
              <td>167.6</td>
              <td>7</td>
              <td>120+</td>
            </tr>
            <tr>
              <td>5'7</td>
              <td>170.2</td>
            </tr>
            <tr>
              <td>5'8</td>
              <td>172.7</td>
            </tr>
            <tr>
              <td>5'9</td>
              <td>175.3</td>
            </tr>
            <tr>
              <td>5'10</td>
              <td>177.8</td>
            </tr>
            <tr>
              <td>5'11</td>
              <td>180.3</td>
            </tr>
            <tr>
              <td>6'0</td>
              <td>182.9</td>
            </tr>
            <tr>
              <td>6'1</td>
              <td>185.4</td>
            </tr>
            <tr>
              <td>6'2</td>
              <td>188.0</td>
            </tr>
            <tr>
              <td>6'3</td>
              <td>190.5</td>
            </tr>
            <tr>
              <td>6'4</td>
              <td>193.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bulking;
