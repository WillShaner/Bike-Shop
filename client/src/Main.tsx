import React from 'react';
import Navigation from './layout/Header/Navigation';
import { navLinks } from './layout/Header/navLinks';
import { theme } from './context/theme';
import { ThemeProvider } from '@mui/material';
import Footer from './layout/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/AboutPage/About';
import Chat from './layout/Chat/Chat';
import Shop from './pages/Shop/Shop';
function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation navLinks={navLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Chat />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default Main;
