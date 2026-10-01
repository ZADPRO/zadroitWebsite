import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Phone, Mail, Send, CheckCircle2, Check, Package, X } from 'lucide-react';
import productsData from '../data/products.json';
import { sendContactEmail, getEmailConfig } from '../utils/emailService';

const serviceGroups = [
  {
    category: 'IT Services & Consulting',
    icon: '🛠️',
    items: [
      { id: 'oracle', name: 'Oracle Software Solutions', desc: 'EBS, Database & Cloud Modernization' },
      { id: 'sap', name: 'SAP Integration', desc: 'ECC & S/4HANA Enterprise Integration' },
      { id: 'web-mobile', name: 'Web & Mobile App Development', desc: 'Custom Full-Stack Apps & iOS/Android' },
      { id: 'cloud', name: 'Cloud Computing Solutions', desc: 'AWS, Azure & Cloud Infrastructure' },
      { id: 'ai-ml', name: 'AI & Machine Learning Development', desc: 'Predictive Models & Automation' },
      { id: 'cybersecurity', name: 'Cybersecurity Services', desc: 'Audits, SOC & Threat Protection' },
    ],
  },
  {
    category: 'Proprietary SaaS Products',
    icon: '🚀',
    items: [
      { id: 'zadpro-microfin', name: 'ZAdPro MicroFin', desc: 'Loan & Microfinance Management Platform' },
      { id: 'zadpro-yoke', name: 'ZAdPro Yoke', desc: 'All-in-One Education ERP System' },
      { id: 'zadpro-superapp', name: 'ZAdPro SuperApp', desc: 'Logistics, Delivery & Vendor Platform' },
      { id: 'zadpro-express', name: 'ZAdPro Express Courier', desc: 'Express Dispatch & Tracking SaaS' },
      { id: 'zadpro-healthcare', name: 'ZAdPro HealthCare AI', desc: 'AI Medical Diagnostics & Health ERP' },
    ],
  },
];

function ServiceModalSelect({ value, isProduct, onChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div>
      {/* Input Field Trigger Button */}
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        style={{
          width: '100%',
          padding: '13px 16px',
          borderRadius: '12px',
          background: '#f8fafc',
          border: '1.5px solid #bae6fd',
          color: '#0f172a',
          fontSize: '0.95rem',
          fontWeight: 600,
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(2, 132, 199, 0.04)',
          transition: 'all 0.2s ease',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {value ? (
            <>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>{value}</span>
              <span style={{ fontSize: '0.72rem', background: isProduct ? '#e0f2fe' : '#e0e7ff', color: isProduct ? '#0369a1' : '#4338ca', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                {isProduct ? 'SaaS Product' : 'IT Service'}
              </span>
            </>
          ) : (
            <span style={{ color: '#64748b' }}>Click to select Service or Product...</span>
          )}
        </span>
        <span style={{ fontSize: '0.8rem', background: '#0284c7', color: '#ffffff', padding: '4px 10px', borderRadius: '8px', fontWeight: 700, flexShrink: 0 }}>
          Choose
        </span>
      </button>

      {/* Modal Popup Overlay Rendered directly into Document Body (Full Website Portal) */}
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                background: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: '100%',
                  maxWidth: '680px',
                  maxHeight: '85vh',
                  margin: 'auto',
                  background: '#ffffff',
                  border: '1.5px solid #bae6fd',
                  borderRadius: '24px',
                  boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                {/* Modal Header */}
                <div style={{ padding: '1.5rem 1.75rem 1.25rem 1.75rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Select Service or Product
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                      Choose an IT consulting domain or one of Zadroit's proprietary SaaS platforms.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#f1f5f9',
                      border: 'none',
                      color: '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Tab Filters */}
                <div style={{ padding: '0.75rem 1.75rem', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: '8px', background: '#ffffff' }}>
                  {[
                    { id: 'all', label: 'All Items' },
                    { id: 'services', label: '🛠️ IT Services' },
                    { id: 'products', label: '🚀 SaaS Products' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '10px',
                        fontSize: '0.85rem',
                        fontWeight: activeTab === tab.id ? 700 : 600,
                        background: activeTab === tab.id ? '#0284c7' : '#f8fafc',
                        color: activeTab === tab.id ? '#ffffff' : '#475569',
                        border: activeTab === tab.id ? '1px solid #0284c7' : '1px solid #e2e8f0',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Modal Body Content (Scrollable Grid) */}
                <div style={{ padding: '1.25rem 1.75rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {serviceGroups
                    .filter((group) => {
                      if (activeTab === 'services') return group.category.includes('Services');
                      if (activeTab === 'products') return group.category.includes('Products');
                      return true;
                    })
                    .map((group) => (
                      <div key={group.category}>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            fontWeight: 800,
                            color: '#0284c7',
                            marginBottom: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          <span>{group.icon}</span> {group.category}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.85rem' }}>
                          {group.items.map((item) => {
                            const isSelected = value === item.name;
                            const itemIsProduct = group.category.includes('Products');
                            return (
                              <div
                                key={item.id}
                                onClick={() => {
                                  onChange(item.name, itemIsProduct);
                                  setIsModalOpen(false);
                                }}
                                style={{
                                  padding: '12px 14px',
                                  borderRadius: '14px',
                                  background: isSelected ? '#e0f2fe' : '#ffffff',
                                  border: isSelected ? '1.5px solid #0284c7' : '1.5px solid #e2e8f0',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  boxShadow: isSelected ? '0 4px 12px rgba(2, 132, 199, 0.12)' : '0 2px 6px rgba(0,0,0,0.02)',
                                }}
                                onMouseEnter={(e) => {
                                  if (!isSelected) {
                                    e.currentTarget.style.borderColor = '#bae6fd';
                                    e.currentTarget.style.background = '#f0f9ff';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!isSelected) {
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                    e.currentTarget.style.background = '#ffffff';
                                  }
                                }}
                              >
                                <div>
                                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: isSelected ? '#0369a1' : '#0f172a' }}>
                                    {item.name}
                                  </div>
                                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                                    {item.desc}
                                  </div>
                                </div>
                                {isSelected ? (
                                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Check size={14} color="#ffffff" />
                                  </div>
                                ) : (
                                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid #cbd5e1', flexShrink: 0 }} />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Modal Footer */}
                <div style={{ padding: '1rem 1.75rem', borderTop: '1px solid #e2e8f0', background: '#f8fafc', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn-secondary"
                    style={{ padding: '8px 20px', fontSize: '0.88rem' }}
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

export default function Contact() {
  const emailConfig = getEmailConfig();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'IT Solution Inquiry',
    service: 'Web & Mobile App Development',
    isProduct: false,
    selectedProduct: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendContactEmail(formData);
    } catch (err) {
      console.error('Contact email dispatch error:', err);
    } finally {
      setSending(false);
      setSubmitted(true);
    }
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
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #bae6fd' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Send Us a Message
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Submitting this form dispatches your project details directly to us.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Message Dispatched!</h4>
                  <p style={{ color: '#334155', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you <strong>{formData.name}</strong>. Your inquiry has been generated and sent to <strong>{emailConfig.receiveEmailId}</strong>.
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
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1.5px solid #bae6fd',
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
                        placeholder="xyz@company.com"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: '1.5px solid #bae6fd',
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
                        placeholder="+91 XXXXX XXXXX"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: '1.5px solid #bae6fd',
                          color: '#0f172a',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Interested Service / Product</label>
                    <ServiceModalSelect
                      value={formData.service}
                      isProduct={formData.isProduct}
                      onChange={(selectedName, itemIsProduct) => {
                        setFormData({
                          ...formData,
                          service: selectedName,
                          isProduct: itemIsProduct,
                          selectedProduct: itemIsProduct ? selectedName : '',
                        });
                      }}
                    />
                  </div>

                  {/* Secondary Product Picker Pills when a Product is selected or active */}
                  {formData.isProduct && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ background: '#f0f9ff', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #bae6fd' }}
                    >
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0284c7', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Package size={14} /> Selected SaaS Platform:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {productsData.map((p) => {
                          const isCur = formData.selectedProduct === p.name;
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: p.name, selectedProduct: p.name, isProduct: true })}
                              style={{
                                padding: '6px 12px',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                fontWeight: isCur ? 700 : 600,
                                background: isCur ? '#0284c7' : '#ffffff',
                                color: isCur ? '#ffffff' : '#334155',
                                border: isCur ? '1px solid #0284c7' : '1px solid #cbd5e1',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                              }}
                            >
                              {p.name}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Project Details & Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your requirements"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1.5px solid #bae6fd',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <button type="submit" disabled={sending} className="btn-primary" style={{ padding: '14px', marginTop: '0.5rem', opacity: sending ? 0.7 : 1 }}>
                    {sending ? 'Sending Email...' : `Send a message to zadroit`} <Send size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section >
    </div >
  );
}
