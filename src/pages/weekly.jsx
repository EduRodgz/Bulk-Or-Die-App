import "./weekly.css";
import React, { useState, useEffect } from 'react';

function Weekly() {
  const [data, setData] = useState({
    Monday: { Calories: '', Protein: '' },
    Tuesday: { Calories: '', Protein: '' },
    Wednesday: { Calories: '', Protein: '' },
    Thursday: { Calories: '', Protein: '' },
    Friday: { Calories: '', Protein: '' },
    Saturday: { Calories: '', Protein: '' },
    Sunday: { Calories: '', Protein: '' },
  });

  const [totals, setTotals] = useState({
    Calories: 0,
    Protein: 0,
  });

  const handleChange = (day, type, value) => {
    setData((prevData) => ({
      ...prevData,
      [day]: {
        ...prevData[day],
        [type]: value,
      },
    }));
  };

  const handleSave = () => {
    localStorage.setItem('weeklyData', JSON.stringify(data));
    alert('Data Saved');
  };
  const handleLoad = () => {
    const savedData = JSON.parse(localStorage.getItem('weeklyData')) || {};
    setData(savedData);
    alert('Data Loading');
  };

  useEffect(() => {
    let dailyTotals = { Calories: 0, Protein: 0 };
    Object.keys(data).forEach((day) => {
      dailyTotals.Calories += parseInt(data[day].Calories) || 0;
      dailyTotals.Protein += parseInt(data[day].Protein) || 0;
    });
    setTotals(dailyTotals);
  }, [data]);

  return (
    <div className="weekly">
      <h1>Weekly Bulk</h1>
      <p>
        Use this calculator to maintain a log of your calories/protein for the
        week!
      </p>
      <table className="table2">
        <thead>
          <tr>
            <th scope="col">🏋️‍♂️</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
            <th scope="col">Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Calories(kcal)</th>
            {Object.keys(data).map((day) => (
              <td key={`calories-${day}`}>
                <input
                  type="text"
                  value={data[day].Calories}
                  onChange={(e) => handleChange(day, 'Calories', e.target.value)}
                />
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Protein(g)</th>
            {Object.keys(data).map((day) => (
              <td key={`protein-${day}`}>
                <input
                  type="text"
                  value={data[day].Protein}
                  onChange={(e) => handleChange(day, 'Protein', e.target.value)}
                />
              </td>
            ))}
          </tr>
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
