import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, CheckCircle2, Building, Layers, PlayCircle, Send } from 'lucide-react';
import productsData from '../data/products.json';
import { sendLiveDemoEmail, getEmailConfig } from '../utils/emailService';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id) || productsData[0];
  const [selectedImg, setSelectedImg] = useState(product.sampleImages[0]);
  const [demoRequested, setDemoRequested] = useState(false);
  const [demoForm, setDemoForm] = useState({ name: '', email: '', phone: '' });
  const [demoSending, setDemoSending] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const emailConfig = getEmailConfig();

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setDemoSending(true);
    try {
      await sendLiveDemoEmail({
        productName: product.name,
        name: demoForm.name,
        email: demoForm.email,
        phone: demoForm.phone,
      });
    } catch (err) {
      console.error('Live demo email error:', err);
    } finally {
      setDemoSending(false);
      setDemoSubmitted(true);
    }
  };

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: '#f8fafc' }}>
      <div className="container">
        {/* Back Link */}
        <Link to="/products" style={{ color: '#0284c7', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 700, marginBottom: '2rem' }}>
          <ArrowLeft size={18} /> Back to Products List
        </Link>

        {/* Product Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.25rem' }}>
              <img src={product.logo} alt={product.name} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover', border: '2px solid #0284c7' }} />
              <div>
                <span className="glass-pill" style={{ fontSize: '0.8rem', padding: '2px 10px' }}>{product.badge}</span>
                <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a' }}>{product.name}</h1>
              </div>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: '#0284c7', fontWeight: 600, marginBottom: '1rem' }}>{product.tagline}</h3>
            <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {product.fullDescription}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => setDemoRequested(true)}
                className="btn-primary"
                style={{ padding: '12px 28px' }}
              >
                Request Live Demo <PlayCircle size={18} />
              </button>
              <Link to="/contact" className="btn-secondary">
                Contact Enterprise Sales
              </Link>
            </div>
          </div>

          {/* Featured Screenshot */}
          <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '24px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <img
              src={selectedImg}
              alt={product.name}
              style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '18px' }}
            />
          </div>
        </div>

        {/* Sample Images Gallery */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} color="#0284c7" /> Interface Gallery & Screenshots
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {product.sampleImages.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setSelectedImg(imgUrl)}
                className="glass-panel"
                style={{
                  padding: '6px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  background: '#ffffff',
                  border: selectedImg === imgUrl ? '3px solid #0284c7' : '1px solid #e2e8f0',
                  transition: 'all 0.2s ease',
                }}
              >
                <img src={imgUrl} alt={`Screenshot ${index + 1}`} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Key Features & Tech Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          
          {/* Features */}
          <div className="glass-panel" style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              Core Module Capabilities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {product.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.98rem', color: '#0f172a' }}>
                  <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Customers */}
          <div>
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', background: '#ffffff', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} color="#0284c7" /> Built With Modern Tech Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {product.techStack.map((tech, idx) => (
                  <span key={idx} style={{ background: '#e0f2fe', color: '#0369a1', padding: '6px 14px', borderRadius: '8px', fontSize: '0.88rem', fontWeight: 600 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building size={18} color="#059669" /> Trusted By Enterprise Clients
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {product.customers.map((cust, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.92rem' }}>{cust.name}</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{cust.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Demo Modal Banner */}
        {demoRequested && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <div className="glass-panel" style={{ maxWidth: '500px', width: '100%', padding: '2.5rem', borderRadius: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid #bae6fd' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>Request {product.name} Demo</h3>
              
              {demoSubmitted ? (
                <div style={{ padding: '1rem 0' }}>
                  <CheckCircle2 size={42} color="#059669" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Demo Request Received!</h4>
                  <p style={{ color: '#334155', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you <strong>{demoForm.name}</strong>. Demo credentials will be dispatched to <strong>{demoForm.email}</strong> and notified to <strong>{emailConfig.receiveEmailId}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setDemoSubmitted(false); setDemoRequested(false); }}
                    className="btn-primary"
                    style={{ padding: '10px 24px' }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Submit details to receive credentials via email:
                  </p>
                  
                  <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none' }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work Email Address *"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none' }}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={demoForm.phone}
                      onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                      style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none' }}
                    />
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                      <button type="submit" disabled={demoSending} className="btn-primary" style={{ flex: 1, opacity: demoSending ? 0.7 : 1 }}>
                        {demoSending ? 'Submitting...' : 'Submit Request'}
                      </button>
                      <button type="button" onClick={() => setDemoRequested(false)} className="btn-secondary">Close</button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
