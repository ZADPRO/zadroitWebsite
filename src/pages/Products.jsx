import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ChevronRight, Users, Send } from 'lucide-react';
import productsData from '../data/products.json';

export default function Products() {
  return (
    <div>
      {/* 1. HERO BANNER IMAGES & SECTION */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #edf4ff 0%, #f8fafc 100%)' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={16} /> Enterprise Software Products
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            Innovative Digital Platforms <br />
            <span className="gradient-text">Built for Real-World Impact</span>
          </h1>
          <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            Discover our suite of proprietary SaaS products across Microfinance, Education ERP, SuperApp Logistics, Express Couriers, and AI Healthcare.
          </p>

          {/* Banner Images Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
            {productsData.map((p) => (
              <div key={p.id} className="glass-panel" style={{ padding: '0.75rem', borderRadius: '16px', overflow: 'hidden', background: '#ffffff', border: '1px solid #cbd5e1' }}>
                <img src={p.sampleImages[0]} alt={p.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', display: 'block', marginTop: '8px' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PRODUCT LISTING WITH ANIMATIONS & INTRO */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {productsData.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel"
                style={{ padding: '3rem 2.5rem', borderRadius: '24px', background: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                  
                  {/* Text Side */}
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                      <img src={product.logo} alt={product.name} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
                      <div>
                        <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>{product.badge}</span>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>{product.name}</h3>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', color: '#0284c7', fontWeight: 600, marginBottom: '0.75rem' }}>{product.tagline}</h4>
                    <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                      {product.shortDescription}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                      {product.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#0f172a' }}>
                          <CheckCircle2 size={16} color="#059669" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/products/${product.id}`} className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
                      Explore Full Features & Live Demo <ChevronRight size={16} />
                    </Link>
                  </div>

                  {/* Image Preview Side */}
                  <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                    <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: '20px', overflow: 'hidden', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
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

      {/* 3. JOIN OUR COMMUNITY SECTION */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '3.5rem 2rem',
              borderRadius: '28px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #e0f2fe, #e0e7ff)',
              border: '1px solid #bae6fd',
            }}
          >
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <Users size={28} color="#0284c7" />
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              Join Our Growing <span className="gradient-text">Product Community</span>
            </h2>
            <p style={{ color: '#334155', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
              Subscribe to Zadroit Product Insights, release notes, early-access beta invitations, and developer APIs.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for joining the Zadroit Product Community!');
              }}
              style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}
            >
              <input
                type="email"
                required
                placeholder="Enter your work email"
                style={{
                  flex: 1,
                  minWidth: '240px',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '12px 24px' }}>
                Subscribe <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
