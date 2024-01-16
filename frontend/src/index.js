import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Home from './pages/home/Home';
import Connection from './pages/connection/Connection';
import User from './pages/user/User';
import './style/style.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/connection" element={< Connection />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
