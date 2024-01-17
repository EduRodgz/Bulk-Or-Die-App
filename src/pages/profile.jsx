import { useEffect, useState } from 'react';
import './profile.css';



function calculateBulkInfo(age, sex, height, weight,) {
    let caloriesNeeded;
  if (sex === 'M') {
    caloriesNeeded = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else if (sex === 'F') {
    caloriesNeeded = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

    const proteinNeeded = weight * 1.5;
  
    return {
      caloriesNeeded,
      proteinNeeded,
    };
  }
  
function DisplayProfile({ profile }) {
    return (
      <div className="profile-display">
        <h1>Profile Summary:</h1>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Sex: {profile.sex}</p>
        <p>Weight: {profile.weight}</p>
        <p>Height: {profile.height}</p>
        <p>Workout Frequency: {profile.activity}</p>
      </div>
    );
  }

  function Profile() {
    
    const [profile, setProfile] = useState({});
    
  
    useEffect(() => {
      const savedJson = localStorage.getItem("profile");
        if(savedJson){
          const obj = JSON.parse(savedJson);
          setProfile(obj);
        }
    }, []);
  
    function displayBulkInfo() {
      const { age, sex, height, weight, activity } = profile;
      if (age && sex && height && weight && activity) {
        const { caloriesNeeded, proteinNeeded } = calculateBulkInfo(age, sex, height, weight, activity);
        return (
          <div className='profile-display'>
            <h3>Calories/Protein needed a day to bulk:</h3>
            <p>Calories Needed: {caloriesNeeded} kcal</p>
            <p>Protein Needed: {proteinNeeded} grams</p>
          </div>
        );
      } else {
        return <p>Go to /Bulking if no info is displayed!</p>;
      }
    }
  
    return (
      <div className='profile page'>
        {profile ? <DisplayProfile profile={profile} /> : <p>No profile data found. Go to /Bulking to create profile!</p>}
        {displayBulkInfo()}
      </div>
    );
  }
  
  export default Profile;