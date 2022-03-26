import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login/login';
import Homepage from '../pages/homepage/homepage';
import Custom404 from '../pages/custom404/custom404';

const Routers = () => {
    return (
        <Routes>
            <Route path="*" element={<Custom404 />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
        </Routes>
    );
};

export default Routers;
