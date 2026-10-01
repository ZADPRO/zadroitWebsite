import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, ArrowRight, Search, ChevronRight } from 'lucide-react';
import blogsData from '../data/blogs.json';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = ['All', 'Enterprise ERP', 'Artificial Intelligence', 'FinTech', 'Cybersecurity'];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* 1. HERO BANNER SECTION */}
      <section className="hero-fullscreen" style={{ paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={16} /> Insights & Articles
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            ZAdroit Technical <span className="gradient-text">Blog & Insights</span>
          </h1>
          <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            Stay informed with the latest insights on SAP S/4HANA integration, AI healthcare analytics, microfinance engineering, and zero-trust cloud security.
          </p>

          {/* Search Bar & Category Filter */}
          <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={20} color="#64748b" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, technologies..."
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  borderRadius: '14px',
                  background: '#ffffff',
                  border: '1.5px solid var(--border-color, #cbd5e1)',
                  color: '#0f172a',
                  fontSize: '1rem',
                  outline: 'none',
                  boxShadow: '0 4px 12px var(--shadow-glow)',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOG LISTING */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border-color, #e2e8f0)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {filteredBlogs.slice(0, visibleCount).map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span className="glass-pill" style={{ position: 'absolute', top: '12px', right: '12px', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {blog.category}
                    </span>
                  </div>

                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {blog.date}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {blog.readTime}</span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                      {blog.title}
                    </h3>
                    
                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 1.75rem 1.75rem 1.75rem' }}>
                  <Link to={`/blog/${blog.id}`} style={{ color: 'var(--brand-primary, #ea580c)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                    Read Full Article <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* VIEW MORE OPTION */}
          {visibleCount < filteredBlogs.length && (
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setVisibleCount((prev) => prev + 3)} className="btn-secondary" style={{ padding: '12px 32px' }}>
                View More Articles <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
