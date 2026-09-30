import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'IT Solution Inquiry',
    service: 'Web & Mobile Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetEmail = 'vijay.loganathan@zadroit.com';
    const emailSubject = encodeURIComponent(`[Zadroit Inquiry] ${formData.subject} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Requested: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

    setSubmitted(true);
  };

  return (
    <div>
      {/* 1. HERO BANNER SECTION */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #edf4ff 0%, #f8fafc 100%)' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={16} /> Get In Touch
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            Let’s Transform Your Business <br />
            <span className="gradient-text">With Technology</span>
          </h1>
          <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
            Connect with our engineering team in Salem, India. We look forward to partnering on innovative enterprise digital solutions.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            {/* Contact Info Cards */}
            <div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0f172a' }}>
                Contact <span className="gradient-text">Information</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} color="#0284c7" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Headquarters Address</h4>
                    <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      38/37B, No.1 Logi Street, Gugai, Salem – 636006, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} color="#4f46e5" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Phone Number</h4>
                    <a href="tel:04273562462" style={{ color: '#0284c7', fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none' }}>
                      0427-3562462
                    </a>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} color="#059669" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Email Address</h4>
                    <a href="mailto:info@zadroit.com" style={{ color: '#0284c7', fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none', display: 'block' }}>
                      info@zadroit.com
                    </a>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Direct Dispatch: vijay.loganathan@zadroit.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1px solid #cbd5e1' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Send Us a Message
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Submitting this form dispatches your project details directly to <strong>vijay.loganathan@zadroit.com</strong>.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Message Dispatched!</h4>
                  <p style={{ color: '#334155', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you <strong>{formData.name}</strong>. Your inquiry has been generated and queued for <strong>vijay.loganathan@zadroit.com</strong>.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary">
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          background: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          color: '#0f172a',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          background: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          color: '#0f172a',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Interested Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Oracle Software Solutions">Oracle Software Solutions</option>
                      <option value="SAP Integration">SAP Integration</option>
                      <option value="Web & Mobile App Development">Web & Mobile App Development</option>
                      <option value="Cloud Computing Solutions">Cloud Computing Solutions</option>
                      <option value="AI & Machine Learning Development">AI & Machine Learning Development</option>
                      <option value="Cybersecurity Services">Cybersecurity Services</option>
                      <option value="Proprietary SaaS Product License">Proprietary SaaS Product License</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Project Details & Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project requirements, scope, or timeline..."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '14px', marginTop: '0.5rem' }}>
                    Send Email to vijay.loganathan@zadroit.com <Send size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
