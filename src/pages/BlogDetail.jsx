import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import blogsData from '../data/blogs.json';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id) || blogsData[0];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <Link to="/blog" style={{ color: '#0284c7', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 700, marginBottom: '2rem' }}>
          <ArrowLeft size={18} /> Back to All Articles
        </Link>

        <div className="glass-pill" style={{ marginBottom: '1rem' }}>{blog.category}</div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', lineHeight: '1.25' }}>
          {blog.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem', marginBottom: '2rem', color: '#64748b', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={16} color="#0284c7" />
            <span style={{ color: '#0f172a', fontWeight: 700 }}>{blog.author}</span> ({blog.authorRole})
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {blog.date}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {blog.readTime}</div>
        </div>

        <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: '24px', marginBottom: '2.5rem', background: '#ffffff', border: '1px solid #e2e8f0' }}>
          <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '18px' }} />
        </div>

        <div className="glass-panel" style={{ padding: '3rem', fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', background: '#ffffff', border: '1px solid #e2e8f0' }}>
          <p style={{ marginBottom: '1.5rem', fontWeight: 600, color: '#0f172a' }}>
            {blog.excerpt}
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            {blog.content}
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            At Zadroit IT Solution, our engineering teams build scalable pipelines and custom interfaces designed specifically to tackle high-throughput data demands. Enterprise modernizations require not only cutting-edge frameworks, but also strict security controls and continuous performance telemetry.
          </p>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {blog.tags.map((tag, i) => (
                <span key={i} style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                  #{tag}
                </span>
              ))}
            </div>
            <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Article URL copied to clipboard!'); }} className="btn-secondary" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
