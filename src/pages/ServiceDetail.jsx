import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Database, Workflow, Smartphone, Cloud, Cpu, ShieldCheck, CheckCircle2, ArrowRight, ChevronRight, HelpCircle, Layers, Award } from 'lucide-react';
import servicesData from '../data/services.json';

export default function ServiceDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  // Extract route slug if id is undefined
  const currentSlug = id || location.pathname.replace(/^\//, '');

  // Find matching service by id or slug
  const service = servicesData.find(
    (s) => s.id === currentSlug || (s.slugs && s.slugs.includes(currentSlug))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="section-padding" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>Service Not Found</h2>
          <p style={{ color: '#64748b', marginTop: '1rem', marginBottom: '2rem' }}>
            The requested service page does not exist or has been moved.
          </p>
          <Link to="/services" className="btn-primary">
            Explore All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const iconsMap = {
    ShieldCheck: ShieldCheck,
    Cloud: Cloud,
    Smartphone: Smartphone,
    Database: Database,
    Workflow: Workflow,
    Cpu: Cpu,
  };
  const ServiceIcon = iconsMap[service.icon] || Cpu;

  return (
    <div>
      {/* 1. HERO BANNER & BREADCRUMB */}
      <section style={{ paddingTop: '9rem', paddingBottom: '4.5rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #e0f2fe 0%, #f8fafc 100%)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem', fontWeight: 600 }}>
            <Link to="/" style={{ color: '#0284c7', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" style={{ color: '#0284c7', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#0f172a' }}>{service.title}</span>
          </div>

          <div style={{ maxWidth: '850px' }}>
            <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={16} /> Enterprise Technology Offerings
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #0284c7, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(2, 132, 199, 0.25)', flexShrink: 0 }}>
                <ServiceIcon size={28} color="#ffffff" />
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>
                {service.title}
              </h1>
            </div>

            <p style={{ color: '#0284c7', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              {service.tagline}
            </p>

            <p style={{ color: '#334155', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {service.heroDesc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '12px 28px' }}>
                Inquire About {service.title} <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary" style={{ padding: '12px 24px' }}>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', background: '#f8fafc', border: '1.5px solid #bae6fd' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0284c7', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
                  In-Depth Overview
                </span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                  Engineered to Drive <span className="gradient-text">Operational Excellence</span>
                </h2>
                <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.75' }}>
                  {service.overview}
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '20px', border: '1px solid #bae6fd', boxShadow: '0 8px 25px rgba(2, 132, 199, 0.08)' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={20} color="#0284c7" /> Key Business Advantages
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {service.benefits.map((b, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#0f172a' }}>
                      <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontWeight: 600 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES & OFFERINGS */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Key Deliverables</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a' }}>
              Core Solutions & <span className="gradient-text">Capabilities</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {service.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel"
                style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff', border: '1.5px solid #bae6fd', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: '1.25rem' }}>
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                    {cap.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK PROCESS / OUR APPROACH */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Streamlined Workflow</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a' }}>
              Our 4-Step <span className="gradient-text">Execution Process</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {service.process.map((stepItem, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f0f9ff',
                  border: '1.5px solid #bae6fd',
                  borderRadius: '20px',
                  padding: '2rem 1.5rem',
                  position: 'relative',
                }}
              >
                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#0284c7', display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>
                  {stepItem.step}
                </span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                  {stepItem.title}
                </h4>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Got Questions?</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a' }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #bae6fd',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <HelpCircle size={18} color="#0284c7" style={{ flexShrink: 0 }} />
                      {faq.q}
                    </h4>
                    <ChevronRight
                      size={20}
                      color="#0284c7"
                      style={{
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.65', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '4rem 2rem',
              borderRadius: '32px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #e0f2fe 0%, #e0e7ff 100%)',
              border: '1.5px solid #bae6fd',
            }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              Ready to Accelerate Your <span className="gradient-text">{service.title}?</span>
            </h2>
            <p style={{ color: '#334155', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
              Partner with Zadroit's certified engineers to build secure, high-performance IT infrastructure.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>
              Talk to Our Experts <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
