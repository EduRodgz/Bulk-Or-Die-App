import Home from "./pages/home";
import Profile from "./pages/profile";
import CalorieCalculator from "./pages/calorie";
import BulkingCalculator from "./pages/bulking";
import WeeklyBulk from "./pages/weekly";

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
    path: "/weekly",
    Component: WeeklyBulk
  }
];

export default routes;
