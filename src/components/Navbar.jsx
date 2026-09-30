import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import ZadroitLogo from './ZadroitLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid rgba(226, 232, 240, 0.6)',
        padding: scrolled ? '0.75rem 0' : '1rem 0',
        boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo Component */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <ZadroitLogo height={44} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#0284c7' : '#334155',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '4px 0',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, #0284c7, #eab308)',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            Get In Touch <ChevronRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: '#f1f5f9',
            border: '1px solid #cbd5e1',
            color: '#0f172a',
            borderRadius: '8px',
            padding: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-toggle-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            padding: '1.5rem',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? '#0284c7' : '#0f172a',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid #f1f5f9',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            Get In Touch
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav, .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
