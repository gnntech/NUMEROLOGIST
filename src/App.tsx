import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AdminProvider } from './context/AdminContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Package from './pages/Package';
import Consultations from './pages/Consultations';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <HelmetProvider>
      <AdminProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/package" element={<Package />} />
              <Route path="/consultations" element={<Consultations />} />
              <Route path="/store" element={<Store />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout>
        </Router>
      </AdminProvider>
    </HelmetProvider>
  );
}

export default App;
