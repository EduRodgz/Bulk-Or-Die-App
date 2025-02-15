import { useEffect, useState } from "react";
import "./profile.css";

// Function to calculate bulk info (calories and protein)
const calculateBulkInfo = (age, sex, height, weight) => {
  if (!age || !sex || !height || !weight) {
    return { caloriesNeeded: 0, proteinNeeded: 0 }; // Return default values if inputs are missing
  }

  const caloriesNeeded =
    sex === "M"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : sex === "F"
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 0; // Return 0 if sex is invalid

  const proteinNeeded = weight * 1.5; // Protein is 1.5x bodyweight

  return { caloriesNeeded, proteinNeeded };
};

// Component to display the profile summary
const DisplayProfile = ({ profile }) => (
  <div className="profile-display">
    <h1>🫂 Profile Summary:</h1>
    <p>Name: {profile.name}</p>
    <p>Age: {profile.age}</p>
    <p>Sex: {profile.sex}</p>
    <p>Weight: {profile.weight}</p>
    <p>Height: {profile.height}</p>
    <p>Workout Frequency: {profile.activity}</p>
  </div>
);

const Profile = () => {
  const [profile, setProfile] = useState(null); // Holds the profile data
  const [loading, setLoading] = useState(true); // Loading state to handle async data fetching

  // Fetch profile data from localStorage when component mounts
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
    setLoading(false); // Set loading to false after data is loaded
  }, []);

  // Display bulk info based on the profile data
  const displayBulkInfo = () => {
    if (!profile) {
      return <p>Go to /Bulking if no info is displayed!</p>;
    }

    const { age, sex, height, weight } = profile;
    const { caloriesNeeded, proteinNeeded } = calculateBulkInfo(age, sex, height, weight);

    return (
      <div className="profile-display">
        <h3>Calories/Protein Needed for Bulking:</h3>
        <p>Calories Needed: {caloriesNeeded} kcal</p>
        <p>Protein Needed: {proteinNeeded} grams</p>
      </div>
    );
  };

  // Show loading state until profile data is fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile page">
      {profile ? (
        <>
          <DisplayProfile profile={profile} />
          {displayBulkInfo()}
        </>
      ) : (
        <p>No profile data found. Go to /Bulking to create your profile!</p>
      )}
    </div>
  );
};

export default Profile;
