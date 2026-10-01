import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#0f172a' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            
            {/* Direct Service Subpage URLs matching reference site */}
            <Route path="/cybersecurity-services" element={<ServiceDetail />} />
            <Route path="/cloud-computing-solutions" element={<ServiceDetail />} />
            <Route path="/web-mobile-app-development" element={<ServiceDetail />} />
            <Route path="/oracle-software-solution" element={<ServiceDetail />} />
            <Route path="/sap-integration" element={<ServiceDetail />} />
            <Route path="/ai-machine-learning-development" element={<ServiceDetail />} />

            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
