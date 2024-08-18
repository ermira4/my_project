import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'; 
import HomePage from './pages/homePage/HomePage'; 
import LoginPage from './pages/loginPage/LoginPage'; 
import ServicesPage from './pages/services/ServicesPage';
import AboutUs from './pages/aboutUsPage/AboutUs';
import Biography from './pages/biographyPage/Biography';
import ContactUs from './pages/contactUsPage/ContactUs';

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* The ":id" param is required here to access a specific biography */}
          <Route path="/biography/:id" element={<Biography />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;






