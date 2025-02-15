/*import React, { useState, useEffect } from 'react';
import './calorie.css';

function Calorie() {
  const [inputs, setInputs] = useState([{ food: '', calories: "", protein: "" }]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);

  useEffect(() => {
    calculateTotalValues();
  }, [inputs]);

  const calculateTotalValues = () => {
    const totalCals = inputs.reduce((sum, input) => sum + parseInt(input.calories || 0), 0);
    const totalProt = inputs.reduce((sum, input) => sum + parseInt(input.protein || 0), 0);

    setTotalCalories(totalCals);
    setTotalProtein(totalProt);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { food: '', calories: "", protein: "" }]);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div className="calorie page">
      <h1>Calorie & Protein Calculator🏋</h1>
      <div className='calorie-page-output'>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            name="food"
            value={input.food}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Food Name"
          />
          <input
            type="number"
            name="calories"
            value={input.calories}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Calories"
          />
          <input
            type="number"
            name="protein"
            value={input.protein}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Protein (g)"
          />
          <div>
          <button onClick={handleAddInput}>Add Food</button>
          <button onClick={() => handleRemoveInput(index)}>Delete</button>
          </div>
        </div>
      ))}
      <div>
        <strong>Total Calories: {totalCalories} kcal</strong>
        <br />
        <strong>Total Protein: {totalProtein} g</strong>
      </div>
    </div>
    </div>
  );
}

export default Calorie;*/
import React, { useState, useEffect } from 'react';
import './calorie.css';

const CalorieTracker = () => {
  const [entries, setEntries] = useState([{ food: '', calories: '', protein: '' }]);
  const [totals, setTotals] = useState({ calories: 0, protein: 0 });

  useEffect(() => {
    updateTotals();
  }, [entries]);

  const updateTotals = () => {
    const totalCalories = entries.reduce((sum, entry) => sum + (parseInt(entry.calories, 10) || 0), 0);
    const totalProtein = entries.reduce((sum, entry) => sum + (parseInt(entry.protein, 10) || 0), 0);
    
    setTotals({ calories: totalCalories, protein: totalProtein });
  };

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
