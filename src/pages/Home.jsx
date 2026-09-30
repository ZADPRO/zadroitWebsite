import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Database, Cloud, Smartphone, Workflow, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import productsData from '../data/products.json';
import servicesData from '../data/services.json';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      {/* 1. ANIMATED HERO SECTION - FULL SCREEN VIEWPORT */}
      <section className="hero-fullscreen" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #e0f2fe 0%, #f8fafc 100%)' }}>
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

              {/* Stats Highlights */}
              <div style={{ display: 'flex', gap: '2rem', borderTop: '2px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7', display: 'block' }}>20+</span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Custom Solutions</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2563eb', display: 'block' }}>98%</span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Satisfaction Rate</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669', display: 'block' }}>10+ Yrs</span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Industry Expertise</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="glass-panel animate-float" style={{ padding: '2.25rem', borderRadius: '24px', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #0284c7, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Cpu size={24} color="#ffffff" />
                    </div>
                    <div>
                      <h4 style={{ color: '#0f172a', fontWeight: 800, fontSize: '1.1rem' }}>ZAdroit Engine</h4>
                      <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>● System Active 99.99%</span>
                    </div>
                  </div>
                  <Award size={26} color="#0284c7" />
                </div>

                {/* Light Blueprint Console */}
                <div style={{ background: '#f0f9ff', borderRadius: '12px', padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#0f172a', marginBottom: '1.5rem', border: '1.5px solid #bae6fd' }}>
                  <div style={{ color: '#0284c7', fontWeight: 'bold' }}>// Architecture Initialization</div>
                  <div><span style={{ color: '#2563eb', fontWeight: 'bold' }}>const</span> app = <span style={{ color: '#0284c7' }}>initZadroitEnterprise</span>({'{\n  cloud: "AWS / OCI",\n  sap: true,\n  aiModels: ["MedPredit", "MicroFin"]\n}'});</div>
                  <div style={{ color: '#059669', marginTop: '6px', fontWeight: 'bold' }}>✓ Enterprise Stack Ready</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 700 }}>Cloud Uptime</span>
                    <h5 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 800 }}>99.99% SLA</h5>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 700 }}>Security VAPT</span>
                    <h5 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 800 }}>ISO & HIPAA</h5>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. DEVELOPED PRODUCT LOGOS & DYNAMIC DETAILS */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Proprietary Software Suite</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
              Our Developed <span className="gradient-text">Products</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Click on any product logo or card to open detailed specifications, sample screenshots, and client case studies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {productsData.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                  className="glass-panel"
                >
                  <div style={{ padding: '1.75rem', textAlign: 'center' }}>
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        margin: '0 auto 1.25rem auto',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        border: '2px solid #e2e8f0',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <img src={product.logo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontWeight: 700, display: 'inline-block', marginBottom: '0.75rem' }}>
                      {product.badge}
                    </span>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                      {product.name}
                    </h3>
                    
                    <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.25rem', height: '2.6em', overflow: 'hidden' }}>
                      {product.shortDescription}
                    </p>

                    <span style={{ fontSize: '0.88rem', color: '#0284c7', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      View Product Details <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES LIST PROVIDING BY ZADROIT */}
      <section className="section-padding" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
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
                        background: '#e0f2fe',
                        border: '1px solid #bae6fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <ServiceIcon size={26} color="#0284c7" />
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
                          <CheckCircle2 size={14} color="#059669" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={`/services#${service.id}`} style={{ color: '#0284c7', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
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
