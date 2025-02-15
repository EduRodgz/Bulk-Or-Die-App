
/*import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';
import Calorie from './pages/calorie';
import Bulking from './pages/bulking';
import Reference from './pages/reference';
import Recipes from './pages/recipes';
import Weekly from './pages/weekly';
import Registration from './pages/registration';
import Login from "./pages/login";
import Links from './pages/links'; 
import Navbar from './pages/navbar';
import Footer from './pages/footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import * as bts from 'bootstrap';
window.bootstrap = bts;

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        
        <Route path='/registration' element={<Registration />}></Route>

        <Route path='/Home' element={<Home />}></Route>
      
        <Route path='/profile' element={<Profile />}></Route>
      
        <Route path='/calorie' element={<Calorie />}></Route>
      
        <Route path='/bulking' element={<Bulking />}></Route>
      
        <Route path='/reference' element={<Reference />}></Route>

        <Route path='/recipes' element={<Recipes />}></Route>

        <Route path='/weekly' element={<Weekly />}></Route>

        <Route path='/links' element={<Links />}></Route>


      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./pages/navbar";
import Footer from "./pages/footer";

// Import pages dynamically
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
