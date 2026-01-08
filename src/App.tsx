import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Package from './pages/Package';
import Shop from './pages/Shop';
import Testimonials from './pages/Testimonials';
import Consultations from './pages/Consultations';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <AdminProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/package" element={<Package />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </AdminProvider>
  );
}

export default App;
