import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routers from '../routes/routers';

const Layout = () => {
    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    );
};

export default Layout;
