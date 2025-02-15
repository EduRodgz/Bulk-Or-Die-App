import Home from "./pages/home";
import Profile from "./pages/profile";
import CalorieCalculator from "./pages/calorieCalculator";
import BulkingCalculator from "./pages/bulkingCalculator";
import Reference from "./pages/reference";
import Recipes from "./pages/recipes";
import WeeklyBulk from "./pages/weeklyBulk";

const routes = [
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/profile",
    Component: Profile
  },
  {
    path: "/calorie",
    Component: CalorieCalculator
  },
  {
    path: "/bulking",
    Component: BulkingCalculator
  },
  {
    path: "/reference",
    Component: Reference
  },
  {
    path: "/recipes",
    Component: Recipes
  },
  {
    path: "/weekly",
    Component: WeeklyBulk
  }
];

export default routes;
