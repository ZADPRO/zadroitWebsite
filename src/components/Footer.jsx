import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
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

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer style={{ background: 'var(--footer-bg, linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%))', borderTop: '1px solid var(--border-color, #fed7aa)', paddingTop: '3.5rem', paddingBottom: '1.25rem', color: '#0f172a', transition: 'all 0.3s ease' }}>
      <div className="container">
        
        {/* Top Section: Brand Info + Services + Products */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Column 1: Brand Info & Contact Address */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <ZadroitLogo height={46} />
            </Link>
            <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.25rem', fontWeight: 500, maxWidth: '400px' }}>
              Your trusted partner for custom enterprise software development, cloud infrastructure, AI solutions, SAP integration, and proprietary SaaS platforms.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--brand-primary, #ea580c)', flexShrink: 0, marginTop: '3px' }} />
                <span>38/37B, No.1 Logi Street, Gugai, Salem – 636006, Tamil Nadu, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--brand-primary, #ea580c)', flexShrink: 0 }} />
                <a href="tel:04273562462" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>0427 3562462</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--brand-primary, #ea580c)', flexShrink: 0 }} />
                <a href="mailto:info@zadroit.com" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>info@zadroit.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-primary, #ea580c)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {productsData.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-primary, #ea580c)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Social Media Handles Centered */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '1.25rem' }}>
          {socialHandles.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1.5px solid var(--border-color, #fed7aa)',
                color: 'var(--brand-primary, #ea580c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px var(--shadow-glow, rgba(249, 115, 22, 0.25))',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 8px 24px var(--shadow-glow, rgba(234, 88, 12, 0.5))';
                e.currentTarget.style.borderColor = 'var(--brand-primary, #f97316)';
                e.currentTarget.style.background = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 16px var(--shadow-glow, rgba(249, 115, 22, 0.25))';
                e.currentTarget.style.borderColor = 'var(--border-color, #fed7aa)';
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Centered Navigation Links Separated by | */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem', fontSize: '0.95rem', fontWeight: 600 }}>
          {links.map((link, idx) => (
            <React.Fragment key={link.label}>
              <Link
                to={link.path}
                style={{ color: '#0f172a', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-primary, #ea580c)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
              >
                {link.label}
              </Link>
              {idx < links.length - 1 && (
                <span style={{ color: 'var(--brand-secondary, #fdba74)', fontWeight: 300, userSelect: 'none' }}>|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Horizontal Line Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color, #fed7aa)', margin: '0 0 1rem 0', opacity: 0.8 }} />

        {/* Compact Copyright and Privacy Policy Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: '#475569', fontSize: '0.85rem', fontWeight: 600 }}>
          <span>© {new Date().getFullYear()} ZAdroit IT Solution. All rights reserved.</span>
          <span style={{ color: 'var(--border-color, #fed7aa)' }}>•</span>
          <Link
            to="/contact"
            style={{ color: 'var(--brand-primary, #ea580c)', textDecoration: 'none', fontWeight: 700 }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
}
