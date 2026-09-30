import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Users, TrendingUp, Sparkles, Code2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Cpu,
      title: 'Advanced & Future-Ready Tech',
      description: 'We harness AI, Cloud Computing, Blockchain, and SAP integration to give your business a permanent competitive edge.',
      gradient: 'linear-gradient(135deg, #0284c7, #06b6d4)',
      accentColor: '#0284c7',
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromising Security',
      description: 'End-to-end encryption, strict GDPR & HIPAA compliance, and 24/7 security threat monitoring for absolute peace of mind.',
      gradient: 'linear-gradient(135deg, #4f46e5, #9333ea)',
      accentColor: '#4f46e5',
    },
    {
      icon: Zap,
      title: 'Cost-Effective & Scalable',
      description: 'Flexible cloud architectures and automated workflows designed to grow with your business without wasteful overhead.',
      gradient: 'linear-gradient(135deg, #059669, #10b981)',
      accentColor: '#059669',
    },
    {
      icon: Code2,
      title: 'Tailor-Made Solutions',
      description: 'Every software module is customized specifically around your existing enterprise workflows and growth milestones.',
      gradient: 'linear-gradient(135deg, #d97706, #eab308)',
      accentColor: '#d97706',
    },
    {
      icon: Users,
      title: 'Client-Centric Partnership',
      description: 'We build long-term relationships, operating as a dedicated extension of your engineering team with continuous updates.',
      gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)',
      accentColor: '#2563eb',
    },
    {
      icon: TrendingUp,
      title: 'Rapid Time to Market',
      description: 'Agile sprints and best-in-class CI/CD deployment pipelines accelerate product releases by up to 40%.',
      gradient: 'linear-gradient(135deg, #0d9488, #0284c7)',
      accentColor: '#0d9488',
    },
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <div className="glass-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} /> Why Choose Zadroit
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            Built for Innovation, Scalability & <span className="gradient-text">Long-Term Excellence</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>
            We empower enterprise businesses and hyper-growth startups with custom digital solutions tailored to their exact goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-panel"
                style={{ padding: '2.25rem', position: 'relative', overflow: 'hidden', background: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: item.gradient,
                  }}
                />

                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: item.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
                  }}
                >
                  <Icon size={28} color="#ffffff" />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem', color: '#0f172a' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
