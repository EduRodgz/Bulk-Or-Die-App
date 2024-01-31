import axios from "axios";

export const defaultRecipes = [
  {
    name: "Early Riser Breakfast Burrito",
    description: "Calories: 755 Protein: 32g Fat: 53g Carbs: 38g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
  },
  {
    name: "Sweet potato and egg hash",
    description: "Calories: 694 Protein: 40g Fat: 39g Carbs: 51g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
  },
  {
    name: "Avocado egg and toast",
    description: "Calories: 702 Protein: 40g Fat: 30g Carbs: 78g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
  },
  {
    name: "UwU Smoothie",
    description: "Calories: 763 Protein: 53g Fat: 22g Carbs: 94g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
  },
  {
    name: "Yogurt parfait",
    description: "Calories: 715 Protein: 53g Fat: 28g Carbs: 66g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
    creator: "System",
  },
  {
    name: "Overnight oats",
    description: "Calories: 830 Protein: 26g Fat: 63g Carbs: 51g",
    link: "https://www.setforset.com/blogs/news/bulking-breakfast",
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
    try {
      const response = await axios.post(
        "https://fsdi.pockethost.io/api/collections/recipes/records",
        item
      );
      return response.data;
    } catch (error) {
      console.error('Error saving recipe:', error);
      throw error;
    }
  }

  async getRegistration() {
    const response = await axios.get(
      "https://fsdi.pockethost.io/api/collections/recipes_users/records"
    );
    return response.data;
  }

  async newRegistration(item){
    try{
      const response = await axios.post(
        "https://fsdi.pockethost.io/api/collections/recipes_users/records",
        item
      );
      return response.data;
    } catch (error){
      console.error('Error registering new user:', error);
      throw error;
    }
  }

  async validateUser(credentials) {
    try {
      const response = await axios.get(
        `https://fsdi.pockethost.io/api/collections/recipes_users/records?filter=(email='${credentials.email}')`
      );

      if(response.data.items && response.data.items.length > 0) {
        return response.data.items[0].password == credentials.password;
      }


      return false;
    } catch (error) {
      console.error("Error validating user:", error);
      throw error;
    }
  }



  }
  


export default APIService;
