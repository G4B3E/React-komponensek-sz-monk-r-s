import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Fooldal from './pages/Fooldal';
import Szakmaitapasztalat from './pages/Szakmaitapasztalat';
import Idopont from './pages/Idopont';

function App() {
  return (

  <div>
   <Menu/>
    <Routes>
      <Route path='/' element={<Fooldal />} />
      <Route path='/tapasztalat' element={<Szakmaitapasztalat />} />
      <Route path='/idopont' element={<Idopont />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
