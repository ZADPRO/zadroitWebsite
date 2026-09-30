import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Briefcase, MapPin, DollarSign, ArrowRight, CheckCircle2, X, Send } from 'lucide-react';
import careersData from '../data/careers.json';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);

  return (
    <div>
      {/* 1. HERO BANNER SECTION */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #edf4ff 0%, #f8fafc 100%)' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={16} /> Careers at ZAdroit
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            Build The Future of Enterprise Tech <br />
            <span className="gradient-text">Join Our Engineering Team</span>
          </h1>
          <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
            We are looking for passionate developers, cloud architects, AI engineers, and ERP integration consultants to drive innovative digital solutions.
          </p>
        </div>
      </section>

      {/* 2. OPEN VACANCIES LIST */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Active Opportunities</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
              Current <span className="gradient-text">Openings</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {careersData.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel"
                style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.78rem', background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '8px', fontWeight: 700 }}>
                      {job.department}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>{job.type}</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                    {job.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={15} color="#0284c7" /> {job.location}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={15} color="#4f46e5" /> Experience: {job.experience}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={15} color="#059669" /> {job.salaryRange}</div>
                  </div>

                  <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {job.shortDescription}
                  </p>
                </div>

                <button
                  onClick={() => { setSelectedJob(job); setApplied(false); }}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem', padding: '10px' }}
                >
                  Read Position Details & Apply <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODAL FOR READ MORE & APPLY */}
      <AnimatePresence>
        {selectedJob && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel"
              style={{ maxWidth: '650px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '2.5rem', borderRadius: '24px', position: 'relative', background: '#ffffff', border: '1px solid #cbd5e1' }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', color: '#0f172a', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={20} />
              </button>

              <span className="glass-pill" style={{ marginBottom: '0.75rem' }}>{selectedJob.department}</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>{selectedJob.title}</h2>
              <p style={{ color: '#0284c7', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                {selectedJob.location} • {selectedJob.experience} • {selectedJob.salaryRange}
              </p>

              {applied ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                  <p style={{ color: '#334155', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Thank you for applying to Zadroit. Our HR engineering team will review your application and contact you shortly.
                  </p>
                  <button onClick={() => setSelectedJob(null)} className="btn-secondary">Close Window</button>
                </div>
              ) : (
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Key Responsibilities</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: '#334155' }}>
                      {selectedJob.responsibilities.map((res, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} /> {res}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Candidate Requirements</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: '#334155' }}>
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle2 size={16} color="#4f46e5" style={{ flexShrink: 0, marginTop: '3px' }} /> {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Form */}
                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Apply for this Role</h4>
                    <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <input type="text" required placeholder="Full Name" style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none' }} />
                      <input type="email" required placeholder="Email Address" style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none' }} />
                      <input type="url" placeholder="LinkedIn Profile / Portfolio URL" style={{ padding: '12px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none' }} />
                      <button type="submit" className="btn-primary" style={{ padding: '12px' }}>
                        Submit Application <Send size={16} />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
