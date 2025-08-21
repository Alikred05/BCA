import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Notice from './pages/Notice';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import Members from './pages/Members';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:position" element={<Members />} />      
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/details/:memId" element={<Details />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;