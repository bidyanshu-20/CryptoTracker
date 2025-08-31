import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Coin from './pages/Coin/Coin.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Features from './components/Features/Features.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import BlogDashboard from './components/BlogDashboard/BlogDashboard.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

const App = () => {
  return (
    <div className='app'>

      <Navbar />
      <Routes element = {<Navbar/>}>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path="/coinsFeatures" element = {<Features/>}/>
        <Route path="/coinspricing" element = {<Pricing/>}/>
        <Route path="/coinsblog" element = {<BlogDashboard/>}/>
         <Route path="/signup" element = {<SignUp/>}/>
      </Routes>
      <Footer/> 
    </div>
  );
};

export default App;
