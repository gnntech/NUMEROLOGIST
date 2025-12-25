import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Package from './pages/Package';
import Offers from './pages/Offers';
import Testimonials from './pages/Testimonials';
import Consultations from './pages/Consultations';
import Store from './pages/Store';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/package" element={<Package />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
