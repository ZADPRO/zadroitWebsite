import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import servicesData from '../data/services.json';
import productsData from '../data/products.json';
import ZadroitLogo from './ZadroitLogo';

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <ZadroitLogo height={46} />
            </Link>
            <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Your trusted partner for custom enterprise software development, cloud infrastructure, AI solutions, SAP integration, and proprietary SaaS platforms.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#334155' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: '#0284c7', flexShrink: 0, marginTop: '3px' }} />
                <span>38/37B, No.1 Logi Street, Gugai, Salem – 636006, Tamil Nadu, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: '#0284c7', flexShrink: 0 }} />
                <a href="tel:04273562462" style={{ color: '#334155', textDecoration: 'none', fontWeight: 600 }}>0427 3562462</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: '#0284c7', flexShrink: 0 }} />
                <a href="mailto:info@zadroit.com" style={{ color: '#334155', textDecoration: 'none', fontWeight: 600 }}>info@zadroit.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>Company Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Home', 'About Us', 'Services', 'Products', 'Blog', 'Careers', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link to={path} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <ArrowRight size={14} style={{ color: '#0284c7' }} /> {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Products */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {productsData.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', color: '#64748b', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} ZAdroit IT Solution. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
