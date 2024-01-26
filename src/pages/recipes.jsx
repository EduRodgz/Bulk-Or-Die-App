import APIService from "../services/apiService";
import "./recipes.css";
import { defaultRecipes } from "../services/apiService";
import { useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    firstName: "",
    lastName: "",
    description: "",
    protein: "",
    calories: "",
    fat: "",
    carbs: "",
    link: "",
  });

  async function handleClick() {
    try {
      const service = new APIService();
      const savedRecipe = await service.saveRecipe(newRecipe);
      console.log(savedRecipe);
      const updatedRecipes = await service.getRecipes();
      setRecipes(updatedRecipes);
      setNewRecipe({
        firstName: "",
        lastName: "",
        description: "",
        protein: "",
        calories: "",
        fat: "",
        carbs: "",
        link: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error saving recipe:", error.message);
    }
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  }

  return (
    <div className="recipe page">
      <h1>Recipes</h1>
      <div className="para">
        <p>Recipes with bulking in mind!</p>
      </div>

      <div className="recipe-card-group">
        {defaultRecipes.map((r) => (
          <div className="recipe-card">
            <h1>{r.name}</h1>
            <p>
              {r.description}
              <p></p>
              <p>
                <a
                  className="recipe-a"
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ingredients
                </a>
              </p>
            </p>
          </div>
        ))}

        <div className="recipe-input">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Build your own recipe!
            </label>
            <input
              name="recipe"
              onChange={handleInputChange}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Recipe Name"
            ></input>
            <label for="exampleFormControlInput1" class="form-label">
              Credit the Chef!
            </label>
            <div class="row">
              <div class="col">
                <input
                  name="firstName"
                  onChange={handleInputChange}
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                ></input>
              </div>
              <div class="col">
                <input
                  name="lastName"
                  onChange={handleInputChange}
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                ></input>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Recipe Description
            </label>
            <textarea
              name="description"
              onChange={handleInputChange}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Using 2 eggs mix with...etc."
            ></textarea>
            <div class="mb-3">
              <input
                name="protein"
                onChange={handleInputChange}
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Protein(g) amount"
              ></input>
              <input
                name="calories"
                onChange={handleInputChange}
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Calories(gkcal) amount"
              ></input>
              <input
                name="fat"
                onChange={handleInputChange}
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Fat(g) amount"
              ></input>
              <input
                name="carbs"
                onChange={handleInputChange}
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Carbs(g) amount"
              ></input>
              
              <label for="formFile" class="form-label" name="link"onChange={handleInputChange}>
                Have a recipe already typed up? Upload it here!
              </label>
              <input class="form-control" type="file" id="formFile"></input>
              <div>
                <button onClick={handleClick}>Save Recipe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
