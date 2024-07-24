// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Component/HeroSection';
import Navbar from './Component/Navbar';
import SignIn from './Component/SIgnIn';
import HomePage from './Component/Home';
import Footer from './Component/Footer';
import Destination from './Component/Destination';
import MainCard from './Component/MainCard';
import Hotel from './Component/Hotel'
import MainSec from './Component/MainSec';
import TravelPackage from './Component/TravelPackage';
import DashBoard from './Component/DashBoard';
import StarRate from './Component/Star';
import Dash from './Component/Dash'





const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-3">
        <Routes>
          <Route path="/" element={<DashBoard/>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/Destination" element = {<Destination/>}/>
          <Route path="/Footer" element = {<Footer/>}/>
          <Route path="/hotel" element = {<Hotel/>}/>
          <Route path = "/home" element = {<HomePage/>}/>
          <Route path = "/hotel/:id" element = {<MainSec/>}/>
          <Route path='/travelpac' element = {<TravelPackage/>}/>
          <Route path='/star' element = {<StarRate/>}/>
          <Route path='/dash/*' element = {<Dash/>}/>
       

        </Routes>
      </div>
    </Router>
  );
}

export default App;
