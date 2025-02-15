import "./weekly.css";
import React, { useState, useEffect } from "react";

function Weekly() {
  const [data, setData] = useState({
    Monday: { Calories: "", Protein: "" },
    Tuesday: { Calories: "", Protein: "" },
    Wednesday: { Calories: "", Protein: "" },
    Thursday: { Calories: "", Protein: "" },
    Friday: { Calories: "", Protein: "" },
    Saturday: { Calories: "", Protein: "" },
    Sunday: { Calories: "", Protein: "" },
  });

  const [totals, setTotals] = useState({
    Calories: 0,
    Protein: 0,
  });

  const handleChange = (day, type, value) => {
    if (isNaN(value) || value < 0) return; // Validate input to ensure it's a positive number
    setData((prevData) => ({
      ...prevData,
      [day]: {
        ...prevData[day],
        [type]: value,
      },
    }));
  };

  const handleSave = () => {
    localStorage.setItem("weeklyData", JSON.stringify(data));
    alert("Data Saved!");
  };

  const handleLoad = () => {
    const savedData = JSON.parse(localStorage.getItem("weeklyData")) || {};
    setData(savedData);
    alert("Data Loaded!");
  };

  useEffect(() => {
    const dailyTotals = { Calories: 0, Protein: 0 };
    Object.keys(data).forEach((day) => {
      dailyTotals.Calories += parseInt(data[day].Calories) || 0;
      dailyTotals.Protein += parseInt(data[day].Protein) || 0;
    });
    setTotals(dailyTotals);
  }, [data]);

  return (
    <div className="weekly page">
      <h1>Weekly Bulk 🏋️</h1>
      <p>Use this table to keep a log of your weekly progress. You can save information to load for another day!</p>

      <table className="table2" width="100%">
        <thead>
          <tr>
            <th scope="col">🏋️‍♂️</th>
            <th scope="col">Calories</th>
            <th scope="col">Protein</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((day) => (
            <tr key={day}>
              <td>{day}</td>
              <td>
                <input
                  className="input2"
                  type="number"
                  value={data[day].Calories}
                  onChange={(e) =>
                    handleChange(day, "Calories", e.target.value)
                  }
                  aria-label={`Calories for ${day}`}
                />
              </td>
              <td>
                <input
                  className="input2"
                  type="number"
                  value={data[day].Protein}
                  onChange={(e) =>
                    handleChange(day, "Protein", e.target.value)
                  }
                  aria-label={`Protein for ${day}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals">
        <p>Total Calories: {totals.Calories}</p>
        <p>Total Protein: {totals.Protein}</p>
      </div>

      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleLoad}>Load</button>
      </div>
    </div>
  );
}

export default Weekly;

