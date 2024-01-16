import React from 'react';
import Home from '../../pages/home/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../components/header/Header';
import User from '../../pages/user/User';
import Connection from '../../pages/connection/Connection';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/connection" element={< Connection />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;