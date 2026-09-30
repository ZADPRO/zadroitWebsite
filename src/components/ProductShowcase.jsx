import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import productsData from '../data/products.json';

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel every 4 seconds unless hovered
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

  // Get items to display: show 3 items starting from currentIndex (wrapping around)
  const visibleProducts = [];
  for (let i = 0; i < 3; i++) {
    visibleProducts.push(productsData[(currentIndex + i) % productsData.length]);
  }

  return (
    <section
      className="section-padding"
      style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', position: 'relative' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        
        {/* Section Header with Navigation Arrows */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <span className="glass-pill" style={{ marginBottom: '0.85rem' }}>
              <Sparkles size={14} /> Proprietary Software Suite
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
              Our Developed <span className="gradient-text">Products</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '600px' }}>
              Swipe or slide through Zadroit’s flagship enterprise platforms engineered for global scale.
            </p>
          </div>

          {/* Carousel Control Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: '#f0f9ff',
                border: '1.5px solid #bae6fd',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(2, 132, 199, 0.08)',
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: '#0284c7',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(2, 132, 199, 0.3)',
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Cards Track */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '10px 4px 20px 4px' }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {visibleProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -8 }}
                  style={{ display: 'flex' }}
                >
                  <Link
                    to={`/products/${product.id}`}
                    style={{
                      textDecoration: 'none',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
                      border: '1.5px solid #bae6fd',
                      borderRadius: '24px',
                      padding: '2rem 1.75rem',
                      boxShadow: '0 8px 24px rgba(2, 132, 199, 0.08)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                    }}
                    className="glass-panel"
                  >
                    <div>
                      {/* Top Bar: Logo + Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <div
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '2px solid #bae6fd',
                            background: '#ffffff',
                            padding: '4px',
                            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.12)',
                          }}
                        >
                          <img src={product.logo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                        </div>

                        <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', padding: '5px 12px', borderRadius: '10px', fontWeight: 700 }}>
                          {product.badge}
                        </span>
                      </div>

                      {/* Product Title & Tagline */}
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                        {product.name}
                      </h3>

                      <p style={{ color: '#0284c7', fontSize: '0.92rem', fontWeight: 700, marginBottom: '1rem', lineHeight: '1.4' }}>
                        {product.tagline}
                      </p>

                      {/* Short 1-Line Teaser */}
                      <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.55', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div style={{ borderTop: '1px solid #bae6fd', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        Explore Product <ChevronRight size={16} color="#0284c7" />
                      </span>
                      
                      <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', boxShadow: '0 4px 10px rgba(2, 132, 199, 0.3)' }}>
                        <ArrowRight size={16} />
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
          {productsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: currentIndex === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: currentIndex === idx ? '#0284c7' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* View All Products CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/products" className="btn-secondary" style={{ padding: '12px 28px', fontSize: '0.98rem' }}>
            View All Proprietary Platforms <ExternalLink size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
