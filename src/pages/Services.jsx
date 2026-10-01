import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Sparkles, Database, Workflow, Smartphone, Cloud, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import servicesData from '../data/services.json';
import ApproachMap from '../components/ApproachMap';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      {/* 1. HERO BANNER SECTION */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #edf4ff 0%, #f8fafc 100%)' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={16} /> Enterprise Services & Solutions
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            Comprehensive IT Services <br />
            <span className="gradient-text">Engineered for Scalability</span>
          </h1>
          <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
            Discover our full spectrum of enterprise capabilities from Oracle & SAP software integration to cloud native DevOps, mobile applications, and AI machine learning.
          </p>
        </div>
      </section>

      {/* 2. OUR APPROACH (TECHNICAL DESIGN ANIMATED MAP) */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <ApproachMap />
        </div>
      </section>

      {/* 3. SERVICE LIST */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Our Technical Offerings</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
              Specialized Service <span className="gradient-text">Portfolio</span>
            </h2>
          </div>

          <div className="services-2col-grid">
            {servicesData.map((service) => {
              const iconsMap = {
                Database: Database,
                Workflow: Workflow,
                Smartphone: Smartphone,
                Cloud: Cloud,
                Cpu: Cpu,
                ShieldCheck: ShieldCheck,
              };
              const ServiceIcon = iconsMap[service.icon] || Cpu;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="glass-panel"
                  style={{
                    padding: '2.25rem 2rem',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.25rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, var(--brand-primary, #ea580c), var(--brand-secondary, #f97316))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <ServiceIcon size={24} color="#ffffff" />
                      </div>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a' }}>
                        {service.title}
                      </h3>
                    </div>

                    <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                      {service.fullDesc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
                    <Link to={`/services/${service.id}`} className="btn-primary" style={{ fontSize: '0.9rem', padding: '10px 20px', display: 'inline-flex' }}>
                      Know More & Specifications <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '10px 18px', display: 'inline-flex' }}>
                      Inquire Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <style>{`
            .services-2col-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 2rem;
            }
            @media (max-width: 768px) {
              .services-2col-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </div>
      </section>

      {/* 4. ZADROIT DELIVERS TAILORED SOLUTIONS FOR SUSTAINABILITY AND GROWTH */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Enterprise Commitment</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
              Zadroit Delivers Tailored Solutions for <span className="gradient-text">Sustainability and Growth</span>
            </h2>
            <p style={{ color: '#334155', fontSize: '1.05rem', marginTop: '0.75rem', lineHeight: '1.7' }}>
              We provide flexible, budget-friendly IT solutions that scale seamlessly with your business. Our cloud-based architectures and security compliance frameworks optimize efficiency and eliminate unnecessary operational expenses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-primary, #ea580c)', marginBottom: '0.75rem' }}>Cost-Effective & Scalable IT</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>Cloud-native systems and automation tools optimizing efficiency and ensuring seamless long-term scaling.</p>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-primary, #ea580c)', marginBottom: '0.75rem' }}>Security & GDPR Compliance</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>End-to-end encryption, multi-layered firewall security, and strict GDPR & HIPAA regulatory compliance.</p>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-primary, #ea580c)', marginBottom: '0.75rem' }}>24/7 Technical Support</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>Proactive monitoring, regular patch updates, and rapid SLA incident response for maximum system uptime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
