import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login/login';
import Homepage from './pages/homepage/homepage';

const App = () => {
    <Router>
        <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'/home'} element={<Homepage />} />
        </Routes>
    </Router>
};

export default App;
