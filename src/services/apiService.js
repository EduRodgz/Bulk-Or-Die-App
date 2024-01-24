import axios from "axios";

export const defaultRecipes = [
  {
    name: "Recipe #1 Early Riser Breakfast Burrito",
    description: "Calories: 755 Protein: 32g Fat: 53g Carbs: 38g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
    name: "Recipe #2 Sweet potato and egg hash",
    description: "Calories: 694 Protein: 40g Fat: 39g Carbs: 51g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
    name: "Recipe #3 Avocado egg and toast",
    description: "Calories: 702 Protein: 40g Fat: 30g Carbs: 78g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
    name: "Recipe #4 Smoothie",
    description: "Calories: 763 Protein: 53g Fat: 22g Carbs: 94g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
    name: "Recipe #5 Yogurt parfait",
    description: "Calories: 715 Protein: 53g Fat: 28g Carbs: 66g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
    name: "Recipe #6 Overnight oats",
    description: "Calories: 830 Protein: 26g Fat: 63g Carbs: 51g",
    link: "Calories: 830 Protein: 26g Fat: 63g Carbs: 51g",
    creator: "System",
  },
];

class APIService {
  async getRecipes() {
    const response = await axios.get(
      "https://fsdi.pockethost.io/api/collections/recipes/records"
    );
    return response.data;
  }

  async saveRecipe(item) {
    const response = await axios.post(
      "https://fsdi.pockethost.io/api/collections/recipes/records",
      item
    );
    return response.data;
  }
}

export default APIService;
