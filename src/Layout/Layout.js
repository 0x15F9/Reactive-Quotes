import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Pages from './Pages/Pages';

const Layout = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Pages />
            <Footer />
        </BrowserRouter>
    );
}

export default Layout;