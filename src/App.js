
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./pages/navbar";
import Footer from "./pages/footer";


import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
