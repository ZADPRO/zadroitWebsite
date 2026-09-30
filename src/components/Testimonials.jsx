import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ position: 'relative', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <div className="glass-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} /> Client Testimonials
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
            What Our Clients <span className="gradient-text">Say About Us</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem' }}>
            Real reviews from CTOs, Directors, and Enterprise Partners who rely on Zadroit IT Solutions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', border: '1px solid #e2e8f0' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                  <Quote size={28} style={{ color: '#cbd5e1' }} />
                </div>

                <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{item.content}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{item.name}</h4>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block' }}>{item.role}, {item.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
