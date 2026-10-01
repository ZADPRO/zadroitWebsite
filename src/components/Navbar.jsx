import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Palette, Check, Sparkles } from 'lucide-react';
import ZadroitLogo from './ZadroitLogo';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const { currentTheme, selectTheme, themesList } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setThemePickerOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close theme picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setThemePickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.88)',
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
                  color: isActive ? 'var(--brand-primary, #ea580c)' : '#334155',
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
                      height: '3px',
                      borderRadius: '2px',
                      background: `linear-gradient(90deg, var(--brand-primary, #ea580c), var(--brand-secondary, #f97316))`,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Theme Selector */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
          {/* Theme Dropdown Container */}
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              onClick={() => setThemePickerOpen(!themePickerOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '50px',
                border: `1.5px solid ${currentTheme.border || '#fed7aa'}`,
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: themePickerOpen ? `0 0 0 3px ${currentTheme.glow}` : '0 2px 8px rgba(0,0,0,0.04)',
              }}
              title="Select Website Theme"
            >
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${currentTheme.colorPreview}, ${currentTheme.colorSecondary || currentTheme.colorPreview})`,
                  boxShadow: '0 0 6px rgba(0,0,0,0.2)',
                }}
              />
              <Palette size={16} style={{ color: currentTheme.primary }} />
              <span>{currentTheme.name}</span>
            </button>

            {/* Theme Dropdown Menu */}
            {themePickerOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  right: 0,
                  width: '280px',
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 20px 35px -10px rgba(15, 23, 42, 0.2)',
                  padding: '12px',
                  zIndex: 200,
                  animation: 'fadeIn 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px 12px', borderBottom: '1px solid #f1f5f9', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                    <Sparkles size={15} style={{ color: currentTheme.primary }} />
                    <span>Select Color Theme (10)</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '2px 8px', borderRadius: '10px', color: '#64748b', fontWeight: 600 }}>
                    Global Style
                  </span>
                </div>

                <div style={{ maxHeight: '340px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', paddingRight: '2px' }}>
                  {themesList.map((t) => {
                    const isSelected = currentTheme.id === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          selectTheme(t.id);
                          setThemePickerOpen(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '8px 10px',
                          borderRadius: '10px',
                          border: isSelected ? `1.5px solid ${t.primary}` : '1px solid transparent',
                          background: isSelected ? 'rgba(241, 245, 249, 0.8)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          textAlign: 'left',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) e.currentTarget.style.background = '#f8fafc';
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${t.colorPreview}, ${t.colorSecondary || t.colorPreview})`,
                              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                              flexShrink: 0,
                            }}
                          />
                          <div>
                            <div style={{ fontSize: '0.88rem', fontWeight: isSelected ? 700 : 600, color: isSelected ? t.primary : '#1e293b' }}>
                              {t.name}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{t.category}</div>
                          </div>
                        </div>
                        {isSelected && <Check size={16} style={{ color: t.primary, strokeWidth: 2.5 }} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            Get In Touch <ChevronRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-only-controls">
          <button
            onClick={() => setThemePickerOpen(!themePickerOpen)}
            style={{
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              color: currentTheme.primary,
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Theme selector"
          >
            <Palette size={20} />
          </button>

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
          {/* Mobile Theme Selector Strip */}
          <div style={{ paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>
              Select Theme (10 options)
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {themesList.map((t) => (
                <button
                  key={t.id}
                  onClick={() => selectTheme(t.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    border: currentTheme.id === t.id ? `2px solid ${t.primary}` : '1px solid #e2e8f0',
                    background: currentTheme.id === t.id ? 'rgba(241, 245, 249, 0.9)' : '#ffffff',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    fontWeight: currentTheme.id === t.id ? 700 : 500,
                  }}
                >
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: t.colorPreview,
                    }}
                  />
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? 'var(--brand-primary, #ea580c)' : '#0f172a',
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
          .mobile-toggle-btn, .mobile-only-controls {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
