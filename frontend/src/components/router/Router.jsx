import React from 'react';
import Home from '../../pages/home/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../components/header/Header';
import Profil from '../../pages/profil/Profil';
import Login from '../../pages/login/Login.jsx';
import Error from '../../pages/error/Error.jsx';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/login" element={< Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;