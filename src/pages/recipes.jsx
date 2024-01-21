import "./recipes.css";

function Recipes() {
  return (
    <div className="recipe page">
      <h1>Recipes</h1>
      <div className="para">
        <p>Recipes with bulking in mind!</p>
      </div>
      <div className="recipe-card-group">
        <div className="recipe-card">
          <h1>Recipe #1 Early Riser Breakfast Burrito</h1>
          <p>
            Calories: 755 Protein: 32g Fat: 53g Carbs: 38g
            <p></p>
            <p>
              <a
                className="recipe-a"
                href="https://www.setforset.com/blogs/news/bulking-breakfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ingredients
              </a>
            </p>
          </p>
        </div>
        <div className="recipe-card">
          <h1>Recipe #2 Sweet potato and egg hash</h1>
          <p>
            Calories: 694 Protein: 40g Fat: 39g Carbs: 51g
            <p></p>
            <p>
              <a
                className="recipe-a"
                href="https://www.setforset.com/blogs/news/bulking-breakfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ingredients
              </a>
            </p>
          </p>
        </div>
        <div className="recipe-card">
          <h1>Recipe #3 Avocado egg and toast</h1>
          <p>
            Calories: 702 Protein: 40g Fat: 30g Carbs: 78g
            <p></p>
            <p>
              <a
                className="recipe-a"
                href="https://www.setforset.com/blogs/news/bulking-breakfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ingredients
              </a>
            </p>
          </p>
        </div>
        <div className="recipe-card">
          <h1>Recipe #4 Smoothie</h1>
          <p>
            Calories: 763 Protein: 53g Fat: 22g Carbs: 94g
            <p></p>
            <p>
              <a
                className="recipe-a"
                href="https://www.setforset.com/blogs/news/bulking-breakfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ingredients
              </a>
            </p>
          </p>
        </div>
        <div className="recipe-card">
          <h1>Recipe #5 Yogurt parfait</h1>
          <p>
            Calories: 715 Protein: 53g Fat: 28g Carbs: 66g
            <p></p>
            <p>
              <a
                className="recipe-a"
                href="https://www.setforset.com/blogs/news/bulking-breakfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ingredients
              </a>
            </p>
          </p>
        </div>
        <div className="recipe-card">
          <h1>Recipe #6 Overnight oats</h1>
          <p>
            Calories: 830 Protein: 26g Fat: 63g Carbs: 51g
            <p></p>
            <p>
              <a
                className="recipe-a"
                href="https://www.setforset.com/blogs/news/bulking-breakfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ingredients
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
