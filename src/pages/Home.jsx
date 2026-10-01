import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Database, Cloud, Smartphone, Workflow, ChevronRight, Award, CheckCircle2, Layers, Activity, ArrowUpRight } from 'lucide-react';
import productsData from '../data/products.json';
import servicesData from '../data/services.json';
import logoImg from '../assets/logo.png';
import ProductShowcase from '../components/ProductShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

function HeroLogoShowcase() {
  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '380px' }}>

      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.35) 0%, rgba(217, 119, 6, 0.16) 50%, transparent 75%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Orbiting Concentric Tech Rings */}
      <div style={{ position: 'absolute', width: '340px', height: '340px', borderRadius: '50%', border: '1.5px dashed rgba(249, 115, 22, 0.45)' }} />
      <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(234, 88, 12, 0.25)' }} />

      {/* Main Center Floating ZAdroit Logo Emblem */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '260px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          position: 'relative',
          padding: '10px',
        }}
      >
        <img
          src={logoImg}
          alt="ZAdroit IT Solutions"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '200px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 12px 30px rgba(249, 115, 22, 0.55)) drop-shadow(0 0 15px rgba(234, 88, 12, 0.35))',
          }}
        />
      </motion.div>

      {/* Floating Interactive Badge 1 (Top Left) - 20+ Custom Solutions */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '15px',
          left: '-10px',
          background: '#ffffff',
          padding: '10px 16px',
          borderRadius: '16px',
          border: '1.5px solid #fed7aa',
          boxShadow: '0 10px 25px rgba(234, 88, 12, 0.14)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 4,
        }}
      >
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ea580c', lineHeight: 1 }}>20+</div>
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Custom Solutions</div>
          <div style={{ fontSize: '0.7rem', color: '#ea580c', fontWeight: 700 }}>Delivered Globally</div>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 2 (Top Right) - 98% Satisfaction Rate */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '25px',
          right: '-10px',
          background: '#ffffff',
          padding: '10px 16px',
          borderRadius: '16px',
          border: '1.5px solid #fef08a',
          boxShadow: '0 10px 25px rgba(245, 158, 11, 0.14)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 4,
        }}
      >
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#d97706', lineHeight: 1 }}>98%</div>
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Satisfaction Rate</div>
          <div style={{ fontSize: '0.7rem', color: '#d97706', fontWeight: 700 }}>Client Retention</div>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 3 (Bottom Left) - 10+ Yrs Industry Expertise */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '0px',
          background: '#ffffff',
          padding: '10px 16px',
          borderRadius: '16px',
          border: '1.5px solid #fed7aa',
          boxShadow: '0 10px 25px rgba(234, 88, 12, 0.14)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 4,
        }}
      >
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ea580c', lineHeight: 1 }}>10+ Yrs</div>
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Industry Expertise</div>
          <div style={{ fontSize: '0.7rem', color: '#ea580c', fontWeight: 700 }}>Enterprise IT Leadership</div>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 4 (Bottom Right) - 99.99% Cloud Uptime */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '0px',
          background: '#ffffff',
          padding: '10px 16px',
          borderRadius: '16px',
          border: '1.5px solid #fef08a',
          boxShadow: '0 10px 25px rgba(217, 119, 6, 0.14)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 4,
        }}
      >
        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#d97706', lineHeight: 1 }}>99.99%</div>
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Cloud Uptime</div>
          <div style={{ fontSize: '0.7rem', color: '#d97706', fontWeight: 700 }}>Enterprise SLA</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* 1. ANIMATED HERO SECTION - FULL SCREEN VIEWPORT */}
      <section className="hero-fullscreen" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #fff7ed 0%, #fffcf8 100%)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
                <Sparkles size={16} /> Empowering Global Enterprise Operations
              </div>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.15, color: '#0f172a' }}>
                Innovate & Scale With <span className="gradient-text">ZAdroit IT Solutions</span>
              </h1>
              <p style={{ color: '#334155', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                We provide outsourced enterprise IT services, custom mobile/web application development, SAP & Oracle ERP integration, cloud computing, and AI-driven automation for businesses worldwide.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
                <Link to="/contact" className="btn-primary">
                  Transform Your Business <ArrowRight size={18} />
                </Link>
                <Link to="/products" className="btn-secondary">
                  Explore Products
                </Link>
              </div>

            </motion.div>


            {/* Right Visual Floating Logo Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <HeroLogoShowcase />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. DEVELOPED PRODUCT LOGOS & DYNAMIC DETAILS (Interactive Spotlight Showcase) */}
      <ProductShowcase />

      {/* 3. SERVICES LIST PROVIDING BY ZADROIT */}
      <section className="section-padding" style={{ background: '#fffcf8', borderBottom: '1px solid #fed7aa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>End-to-End Capabilities</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
              Services We <span className="gradient-text">Provide</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Comprehensive enterprise technology services engineered to accelerate business growth and operational reliability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {servicesData.map((service, index) => {
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
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-panel"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}
                >
                  <div>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: '#fff7ed',
                        border: '1px solid #fed7aa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <ServiceIcon size={26} color="#ea580c" />
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {service.shortDesc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                          <CheckCircle2 size={14} color="#ea580c" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={`/services#${service.id}`} style={{ color: '#ea580c', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                    Read More & Specifications <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5. WHO WE ARE */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="glass-pill" style={{ marginBottom: '1rem' }}>Who We Are</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
                A Legacy of Growth, <span className="gradient-text">Innovation & Success</span>
              </h2>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                ZAdroit is a trusted IT solutions provider based in Salem, Tamil Nadu, delivering scalable, secure, and future-ready technology services to clients globally.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                From custom SaaS product development and cloud infrastructure to SAP S/4HANA integrations and AI algorithms, our certified engineers help businesses modernize operations and gain a decisive edge in the digital era.
              </p>

              <Link to="/about" className="btn-primary">
                Learn More About Our Journey <ArrowRight size={18} />
              </Link>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
                ZAdroit Core Pillars
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#e0f2fe', padding: '10px', borderRadius: '12px', color: '#0284c7' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>Result Driven</h4>
                    <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Increasing revenue, saving operational cost, and amplifying enterprise brand value.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#e0e7ff', padding: '10px', borderRadius: '12px', color: '#2563eb' }}>
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>Tailor Made Engineering</h4>
                    <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Custom web, mobile apps, digital experience, and cloud implementations.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#d1fae5', padding: '10px', borderRadius: '12px', color: '#059669' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>Consultative Client Partnership</h4>
                    <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Acting as a trusted technology advisor rather than an off-site vendor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT OUR CLIENTS SAY ABOUT US */}
      <Testimonials />

      {/* CALL TO ACTION BANNER */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '4rem 2rem',
              borderRadius: '32px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #e0f2fe 0%, #e0e7ff 100%)',
              border: '1px solid #bae6fd',
            }}
          >
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
              Let’s Build The Future <span className="gradient-text">Together</span>
            </h2>
            <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
              Transform your business with cutting-edge technology. Partner with Zadroit today.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>
              Contact Our Engineers <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
