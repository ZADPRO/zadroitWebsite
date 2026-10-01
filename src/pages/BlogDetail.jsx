import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Check } from 'lucide-react';
import blogsData from '../data/blogs.json';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id) || blogsData[0];
  const [showToast, setShowToast] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        {/* Top Navigation & Category Tag Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/blog" style={{ color: 'var(--brand-primary, #ea580c)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 700 }}>
            <ArrowLeft size={18} /> Back to All Articles
          </Link>

          <div className="glass-pill" style={{ margin: 0 }}>
            {blog.category}
          </div>
        </div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', lineHeight: '1.25' }}>
          {blog.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid var(--border-color, #e2e8f0)', paddingBottom: '1.5rem', marginBottom: '2rem', color: '#64748b', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={16} style={{ color: 'var(--brand-primary, #ea580c)' }} />
            <span style={{ color: '#0f172a', fontWeight: 700 }}>{blog.author}</span> ({blog.authorRole})
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {blog.date}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {blog.readTime}</div>
        </div>

        <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: '24px', marginBottom: '2.5rem' }}>
          <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '18px' }} />
        </div>

        <div className="glass-panel" style={{ padding: '3rem', fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          <p style={{ marginBottom: '1.5rem', fontWeight: 600, color: '#0f172a' }}>
            {blog.excerpt}
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            {blog.content}
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            At Zadroit IT Solution, our engineering teams build scalable pipelines and custom interfaces designed specifically to tackle high-throughput data demands. Enterprise modernizations require not only cutting-edge frameworks, but also strict security controls and continuous performance telemetry.
          </p>

          <div style={{ borderTop: '1px solid var(--border-color, #e2e8f0)', paddingTop: '1.5rem', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {blog.tags.map((tag, i) => (
                <span key={i} className="glass-pill" style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                  #{tag}
                </span>
              ))}
            </div>
            <button onClick={handleShare} className="btn-secondary" style={{ fontSize: '0.85rem', padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              bottom: '28px',
              right: '28px',
              zIndex: 9999,
              background: '#0f172a',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: '14px',
              boxShadow: '0 10px 28px rgba(15, 23, 42, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.92rem',
              fontWeight: 600,
              border: '1px solid #334155',
            }}
          >
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={14} color="#ffffff" />
            </div>
            Article URL copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
