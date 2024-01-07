
import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';
import Calorie from './pages/calorie';
import Bulking from './pages/bulking';
import Reference from './pages/reference';
import Navbar from './pages/navbar';
import Footer from './pages/footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
      <Routes>
        <Route path='/calorie' element={<Calorie />}></Route>
      </Routes>
      <Routes>
        <Route path='/bulking' element={<Bulking />}></Route>
      </Routes>
      <Routes>
        <Route path='/reference' element={<Reference />}></Route>
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
