import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import servicesData from '../data/services.json';
import productsData from '../data/products.json';
import ZadroitLogo from './ZadroitLogo';

export default function Footer() {
  const socialHandles = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6c0-.88-.72-1.6-1.6-1.6Z"/>
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <ZadroitLogo height={46} />
            </Link>
            <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Your trusted partner for custom enterprise software development, cloud infrastructure, AI solutions, SAP integration, and proprietary SaaS platforms.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#334155', marginBottom: '1.5rem' }}>
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

            {/* Social Media Handles */}
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>
                Follow Us
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {socialHandles.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#f0f9ff',
                      border: '1.5px solid #bae6fd',
                      color: '#0284c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
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
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
