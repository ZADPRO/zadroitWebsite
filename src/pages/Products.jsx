import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, ChevronLeft, ArrowRight, CheckCircle2, Users, Send } from 'lucide-react';
import productsData from '../data/products.json';
import { sendSubscriptionEmail } from '../utils/emailService';

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [subEmail, setSubEmail] = useState('');
  const [subSending, setSubSending] = useState(false);
  const [subSubmitted, setSubSubmitted] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubSending(true);
    try {
      await sendSubscriptionEmail({ email: subEmail });
    } catch (err) {
      console.error('Subscription email error:', err);
    } finally {
      setSubSending(false);
      setSubSubmitted(true);
    }
  };

  // Auto-play carousel every 4 seconds unless hovered (Freezes on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productsData.length);
  };

  const scrollToProduct = (productId) => {
    const el = document.getElementById(`product-${productId}`);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* 1. HERO BANNER SECTION */}
      <section className="hero-fullscreen" style={{ paddingTop: '9rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={16} /> Enterprise Software Products
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            Innovative Digital Platforms <br />
            <span className="gradient-text">Built for Real-World Impact</span>
          </h1>
          <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
            Discover our suite of proprietary SaaS products across Microfinance, Education ERP, SuperApp Logistics, Express Couriers, and AI Healthcare.
          </p>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS AUTO-SCROLL SHOWCASE (FREEZES ON HOVER) */}
      <section
        className="section-padding"
        style={{ borderTop: '1px solid var(--border-color, #e2e8f0)', borderBottom: '1px solid var(--border-color, #e2e8f0)' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container" style={{ position: 'relative' }}>
          {/* Section Header with Top-Right Navigation Arrows */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', gap: '1.5rem' }}>
            <div>
              <span className="glass-pill" style={{ fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                Quick Platform Select
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Proprietary SaaS <span className="gradient-text">Platforms</span>
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous Product"
                className="carousel-btn"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <ChevronLeft size={22} style={{ display: 'block', margin: '0 auto' }} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Product"
                className="btn-primary"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <ChevronRight size={22} style={{ display: 'block', margin: '0 auto' }} />
              </button>
            </div>
          </div>

          {/* Cards Track */}
          <div style={{ overflow: 'hidden', padding: '10px 4px 15px 4px' }}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {[0, 1, 2, 3].map((offset) => {
                  const prod = productsData[(currentIndex + offset) % productsData.length];
                  return (
                    <motion.div
                      key={prod.id}
                      whileHover={{ y: -6, scale: 1.02 }}
                      onClick={() => scrollToProduct(prod.id)}
                      className="glass-panel"
                      style={{
                        cursor: 'pointer',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid var(--border-color, #fed7aa)',
                        borderRadius: '20px',
                        padding: '1.75rem 1.25rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        textAlign: 'center',
                      }}
                    >
                      {/* Big Logo */}
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '18px',
                          overflow: 'hidden',
                          border: '2px solid var(--border-color, #fed7aa)',
                          background: '#ffffff',
                          padding: '5px',
                          marginBottom: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img src={prod.logo} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                      </div>

                      {/* Product Name Only */}
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        {prod.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '1.5rem' }}>
            {productsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: currentIndex === idx ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: currentIndex === idx ? 'var(--brand-primary, #ea580c)' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPLORE ALL PLATFORMS FULL CATALOGUE (RESTORED ORIGINAL DETAILED LAYOUT) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Full Product Directory</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
              Explore All <span className="gradient-text">Platforms</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Comprehensive breakdown of Zadroit’s enterprise SaaS suite with live screenshots and feature capabilities.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {productsData.map((product, idx) => (
              <motion.div
                key={product.id}
                id={`product-${product.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel"
                style={{ padding: '3rem 2.5rem', borderRadius: '24px' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>

                  {/* Text Side */}
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                      <img src={product.logo} alt={product.name} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
                      <div>
                        <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '3px 10px', borderRadius: '6px' }}>{product.badge}</span>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>{product.name}</h3>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-primary, #ea580c)', fontWeight: 700, marginBottom: '0.75rem' }}>{product.tagline}</h4>
                    <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                      {product.shortDescription}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                      {product.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#0f172a' }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--brand-primary, #ea580c)', flexShrink: 0 }} />
                          <span style={{ fontWeight: 600 }}>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/products/${product.id}`} className="btn-primary" style={{ padding: '12px 26px', fontSize: '0.95rem', display: 'inline-flex' }}>
                      Explore Full Features & Live Demo <ChevronRight size={16} />
                    </Link>
                  </div>

                  {/* Image Preview Side */}
                  <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                    <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: '20px', overflow: 'hidden' }}>
                      <img
                        src={product.sampleImages[0]}
                        alt={product.name}
                        style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '16px' }}
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOIN OUR COMMUNITY SECTION */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border-color, #e2e8f0)' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '3.5rem 2rem',
              borderRadius: '28px',
              textAlign: 'center',
            }}
          >
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', boxShadow: '0 4px 12px var(--shadow-glow)' }}>
              <Users size={28} style={{ color: 'var(--brand-primary, #ea580c)' }} />
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              Join Our Growing <span className="gradient-text">Product Community</span>
            </h2>
            <p style={{ color: '#334155', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
              Subscribe to Zadroit Product Insights, release notes, early-access beta invitations, and developer APIs.
            </p>

            {subSubmitted ? (
              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', maxWidth: '480px', margin: '0 auto' }}>
                <CheckCircle2 size={32} style={{ color: 'var(--brand-primary, #ea580c)', margin: '0 auto 8px auto' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Subscribed Successfully!</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', margin: '4px 0 0 0' }}>
                  Thank you for subscribing (<strong>{subEmail}</strong>). You will receive updates directly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}
              >
                <input
                  type="email"
                  required
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder="Enter your work email"
                  style={{
                    flex: 1,
                    minWidth: '240px',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    background: '#ffffff',
                    border: '1.5px solid var(--border-color, #cbd5e1)',
                    color: '#0f172a',
                    outline: 'none',
                  }}
                />
                <button type="submit" disabled={subSending} className="btn-primary" style={{ padding: '12px 24px', opacity: subSending ? 0.7 : 1 }}>
                  {subSending ? 'Subscribing...' : 'Subscribe'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
