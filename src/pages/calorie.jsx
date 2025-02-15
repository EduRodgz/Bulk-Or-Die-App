import React, { useState, useEffect, useCallback } from 'react';
import './calorie.css';

const CalorieTracker = () => {
  const [entries, setEntries] = useState([{ food: '', calories: '', protein: '' }]);
  const [totals, setTotals] = useState({ calories: 0, protein: 0 });

  // Memoize the updateTotals function
  const updateTotals = useCallback(() => {
    const totalCalories = entries.reduce((sum, entry) => sum + (parseInt(entry.calories, 10) || 0), 0);
    const totalProtein = entries.reduce((sum, entry) => sum + (parseInt(entry.protein, 10) || 0), 0);
    
    setTotals({ calories: totalCalories, protein: totalProtein });
  }, [entries]); // `entries` as dependency

  useEffect(() => {
    updateTotals();  
  }, [entries, updateTotals]); // Add `updateTotals` as a dependency

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries[index] = { ...updatedEntries[index], [name]: value };
      return updatedEntries;
    });
  };

  const addEntry = () => {
    setEntries([...entries, { food: '', calories: '', protein: '' }]);
  };

  const removeEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className="calorie-tracker">
      <h1>Calorie & Protein Calculator 🏋</h1>
      <div className="entries-container">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <input
              type="text"
              name="food"
              value={entry.food}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Food Name"
            />
            <input
              type="number"
              name="calories"
              value={entry.calories}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Calories"
            />
            <input
              type="number"
              name="protein"
              value={entry.protein}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Protein (g)"
            />
            <button onClick={() => removeEntry(index)}>Delete</button>
          </div>
        ))}
        <button onClick={addEntry}>Add Food</button>
      </div>
      <div className="totals">
        <strong>Total Calories: {totals.calories} kcal</strong>
        <br />
        <strong>Total Protein: {totals.protein} g</strong>
      </div>
    </div>
  );
};

export default CalorieTracker;
