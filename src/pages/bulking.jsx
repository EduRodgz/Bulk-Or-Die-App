import "./bulking.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Bulking() {
    const navigate = useNavigate();
    
    
    const [profile, setProfile] = useState({
        name:'',
        age:'',
        sex:'',
        weight:'',
        height:'',
        activity:'',
    });

    function handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;

        //create copy, modify the copy, and finally set the copy back.
        let copy = {...profile};
        copy[name]=value;
        setProfile(copy);
    }

    function saveProfile(){

        console.log(profile);

        // save to local storage
        localStorage.setItem("profile", JSON.stringify(profile));
        navigate('/profile');
    }

  return (
    <div className="content-page">
      <h1>Fill out general information about yourself!</h1>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input name="name" onChange={handleInputChange}
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
        <input name="age" onChange={handleInputChange}
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
        <input name="sex" onChange={handleInputChange}
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
        <input name="weight" onChange={handleInputChange}
          type="text" 
          className="form-control"
          id="formGroupExampleInput4"
          placeholder="lbs"
        ></input>
      </div>
      <label htmlFor="formGroupExampleInput5" className="form-label">
        Height
      </label>
      <input name="height" onChange={handleInputChange}
        type="number"
        className="form-control"
        id="formGroupExampleInput5"
        placeholder="height in cm"
      ></input>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput3" className="form-label">
          How many times a week do you workout?
        </label>
        <input name="activity" onChange={handleInputChange}
        type="number"
        className="form-control"
        id="formGroupExampleInput6"
        placeholder="(1-7)"
      ></input>
      </div>
      <div>
        <button onClick={saveProfile} className="btn-color">Save Profile</button>
      </div>
    </div>
  );
}

export default Bulking;
