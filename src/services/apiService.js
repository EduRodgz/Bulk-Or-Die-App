/*import axios from "axios";

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
  


export default APIService;*/
import axios from "axios";
import { API_BASE_URL } from "./config";

class APIService {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: { "Content-Type": "application/json" },
    });
  }

  handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    throw error;
  }

  async fetchRecipes() {
    try {
      const response = await this.api.get("/collections/recipes/records");
      return response.data;
    } catch (error) {
      this.handleError(error, "fetchRecipes");
    }
  }

  async createRecipe(recipe) {
    try {
      const response = await this.api.post("/collections/recipes/records", recipe);
      return response.data;
    } catch (error) {
      this.handleError(error, "createRecipe");
    }
  }

  async fetchUsers() {
    try {
      const response = await this.api.get("/collections/recipes_users/records");
      return response.data;
    } catch (error) {
      this.handleError(error, "fetchUsers");
    }
  }

  async registerUser(user) {
    try {
      const response = await this.api.post("/collections/recipes_users/records", user);
      return response.data;
    } catch (error) {
      this.handleError(error, "registerUser");
    }
  }

  async validateUser({ email, password }) {
    try {
      const response = await this.api.get("/collections/recipes_users/records", {
        params: { filter: `(email='${email}')` },
      });

      const user = response.data.items?.[0];

      return user ? user.password === password : false;
    } catch (error) {
      this.handleError(error, "validateUser");
    }
  }
}

export default new APIService();
