
import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';
import Calorie from './pages/calorie';
import Bulking from './pages/bulking';
import Reference from './pages/reference';
import Weekly from './pages/weekly';
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
        <Route path='/' element={<Home />}></Route>
      
        <Route path='/profile' element={<Profile />}></Route>
      
        <Route path='/calorie' element={<Calorie />}></Route>
      
        <Route path='/bulking' element={<Bulking />}></Route>
      
        <Route path='/reference' element={<Reference />}></Route>

        <Route path='/weekly' element={<Weekly />}></Route>

        <Route path='/links' element={<Links />}></Route>
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
