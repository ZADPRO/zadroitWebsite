import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Code, ShieldCheck, CloudUpload, Activity, CheckCircle2 } from 'lucide-react';

export default function ApproachMap() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Discovery & Architecture Blueprint',
      icon: Search,
      badge: 'Phase 1: Planning',
      summary: 'Thorough requirements gathering, enterprise system auditing, and scalability planning.',
      details: 'We analyze your business workflows, define technical requirements, select appropriate database schemas, and map out bi-directional API endpoints for seamless system integration.',
      techNodes: ['System Auditing', 'Database Schemas', 'Architecture Blueprint', 'Capacity Planning']
    },
    {
      step: '02',
      title: 'Technical Design & UI/UX Design',
      icon: Compass,
      badge: 'Phase 2: Design',
      summary: 'Designing responsive interactive prototypes and establishing API contracts.',
      details: 'Our designers craft wireframes and Figma prototypes while our architects create OpenAPI specifications, security protocols, and module dependencies.',
      techNodes: ['Figma Prototypes', 'OpenAPI Specifications', 'Design Systems', 'Data Contracts']
    },
    {
      step: '03',
      title: 'Agile Development & Sprint Execution',
      icon: Code,
      badge: 'Phase 3: Development',
      summary: 'Modular clean-code development with continuous integration and weekly sprint reviews.',
      details: 'Engineering team builds frontend components in React and backend services in Node/Go/Python, using Git flow and automated unit testing for rapid feedback.',
      techNodes: ['React & Node.js', 'Clean Architecture', 'Git Flow Sprints', 'Unit Testing']
    },
    {
      step: '04',
      title: 'Automated QA & Security VAPT Audit',
      icon: ShieldCheck,
      badge: 'Phase 4: Verification',
      summary: 'Rigorous penetration testing, performance benchmarking, and cross-browser QA.',
      details: 'We execute security penetration audits, load testing up to 10,000 requests/min, OWASP vulnerability scans, and GDPR/HIPAA compliance validation.',
      techNodes: ['OWASP VAPT Scans', 'Load Testing', 'Cross-Browser QA', 'HIPAA/GDPR Checks']
    },
    {
      step: '05',
      title: 'Cloud Deployment & CI/CD Pipelines',
      icon: CloudUpload,
      badge: 'Phase 5: Release',
      summary: 'Automated zero-downtime deployment to AWS/OCI with Kubernetes container orchestration.',
      details: 'We set up automated CI/CD deployment pipelines, SSL certificates, CDN caching rules, and load balancers to ensure immediate 99.99% system availability.',
      techNodes: ['Docker Containers', 'AWS / OCI Clusters', 'GitHub Actions', 'CDN Edge Caching']
    },
    {
      step: '06',
      title: '24/7 Monitoring & Maintenance',
      icon: Activity,
      badge: 'Phase 6: Support',
      summary: 'Continuous performance tracking, security patches, and ongoing feature enhancement.',
      details: 'Post-launch support includes real-time telemetry monitoring via Prometheus, automated database backups, quarterly security audits, and dedicated SLA support.',
      techNodes: ['24/7 Telemetry', 'Auto Backups', 'SLA Response Guarantee', 'Feature Iteration']
    }
  ];

  return (
    <div className="glass-panel" style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden', background: '#ffffff', border: '1px solid #e2e8f0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="glass-pill" style={{ marginBottom: '0.75rem' }}>Technical Architecture Map</span>
        <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>
          Our Engineering <span className="gradient-text">Delivery Lifecycle</span>
        </h3>
        <p style={{ color: '#475569', fontSize: '1rem', marginTop: '0.5rem' }}>
          Interactive step-by-step roadmap showing how Zadroit takes complex ideas to production-grade software.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}
      >
        {steps.map((item, index) => {
          const Icon = item.icon;
          const isSelected = activeStep === index;
          return (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: isSelected ? '#f0f9ff' : '#f8fafc',
                border: isSelected ? '2px solid #0284c7' : '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.25rem 1rem',
                textAlign: 'center',
                cursor: 'pointer',
                color: isSelected ? '#0284c7' : '#475569',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: isSelected ? '#0284c7' : '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon size={20} color={isSelected ? '#ffffff' : '#0284c7'} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0284c7', letterSpacing: '0.1em' }}>STEP {item.step}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', lineHeight: '1.3' }}>{item.title.split('&')[0]}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          style={{
            background: '#f8fafc',
            border: '1px solid #bae6fd',
            borderRadius: '16px',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
              {steps[activeStep].badge}
            </span>
            <h4 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.75rem', marginBottom: '0.75rem', color: '#0f172a' }}>
              {steps[activeStep].title}
            </h4>
            <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              {steps[activeStep].details}
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '1rem' }}>Key Deliverables & Nodes</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {steps[activeStep].techNodes.map((node, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#ffffff', padding: '10px 14px', borderRadius: '10px', fontSize: '0.88rem', color: '#0f172a', border: '1px solid #e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#0284c7" />
                  <span>{node}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
