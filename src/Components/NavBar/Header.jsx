import React from 'react';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar';
import { Home } from '../Content/Home';
import { MenuComponent } from '../Content/MenuComponent';
import { About } from '../Content/About';
import { Contact } from '../Content/Contact';
import './Header.css';

export const Header = () => {
  return (
    <>
      <HashRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
};
