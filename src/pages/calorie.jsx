import React, { useState, useEffect } from 'react';
import './calorie.css';

function Calorie() {
  const [inputs, setInputs] = useState([{ food: '', calories: 0, protein: 0 }]);
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
      <h1>Calorie & Protein Calculator</h1>
      <button onClick={handleAddInput}>Add Food</button>
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
          <button onClick={() => handleRemoveInput(index)}>Delete</button>
        </div>
      ))}
      <div>
        <strong>Total Calories: {totalCalories}</strong>
        <br />
        <strong>Total Protein: {totalProtein}g</strong>
      </div>
    </div>
  );
}

export default Calorie;
