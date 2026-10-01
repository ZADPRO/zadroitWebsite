import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Target, Eye, Camera, Maximize2, X } from 'lucide-react';

// Diverse Gallery Photos grouped into 4 Vertical Columns
const column1Photos = [
  { id: 'c1-1', height: '340px', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
  { id: 'c1-2', height: '260px', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
  { id: 'c1-3', height: '380px', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80' },
  { id: 'c1-4', height: '280px', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80' },
];

const column2Photos = [
  { id: 'c2-1', height: '280px', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
  { id: 'c2-2', height: '390px', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
  { id: 'c2-3', height: '310px', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' },
  { id: 'c2-4', height: '350px', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
];

const column3Photos = [
  { id: 'c3-1', height: '370px', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
  { id: 'c3-2', height: '290px', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' },
  { id: 'c3-3', height: '360px', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
  { id: 'c3-4', height: '320px', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' },
];

const column4Photos = [
  { id: 'c4-1', height: '310px', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80' },
  { id: 'c4-2', height: '380px', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' },
  { id: 'c4-3', height: '270px', image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80' },
  { id: 'c4-4', height: '350px', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80' },
];

function VerticalMasonryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', overflow: 'hidden' }}>

      {/* Keyframes & Hover Freeze CSS matching the screen recording */}
      <style>{`
        @keyframes verticalMarqueeUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes verticalMarqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .vertical-gallery-wrapper {
          position: relative;
          width: 100%;
          height: 640px;
          overflow: hidden;
        }
        .vertical-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          height: 100%;
        }
        @media (max-width: 992px) {
          .vertical-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .vertical-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .vertical-col-track-up {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          animation: verticalMarqueeUp 26s linear infinite;
        }
        .vertical-col-track-down {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          animation: verticalMarqueeDown 30s linear infinite;
        }
        .vertical-col-track-up-alt {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          animation: verticalMarqueeUp 32s linear infinite;
        }
        .vertical-col-track-down-alt {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          animation: verticalMarqueeDown 28s linear infinite;
        }
        .vertical-gallery-wrapper:hover .vertical-col-track-up,
        .vertical-gallery-wrapper:hover .vertical-col-track-down,
        .vertical-gallery-wrapper:hover .vertical-col-track-up-alt,
        .vertical-gallery-wrapper:hover .vertical-col-track-down-alt {
          animation-play-state: paused !important;
        }
        .vertical-photo-card {
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: #0f172a;
        }
      `}</style>

      <div className="container" style={{ marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
          <div className="glass-pill" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Camera size={16} style={{ color: '#0284c7' }} /> Our Memories
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
            Life & Moments at <span className="gradient-text">ZAdroit</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Hover anywhere over the gallery to freeze auto-scrolling and view any memory in detail.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="vertical-gallery-wrapper">

          {/* Top & Bottom Subtle Fade Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(to bottom, #f8fafc 0%, rgba(248, 250, 252, 0) 100%)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(to top, #f8fafc 0%, rgba(248, 250, 252, 0) 100%)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />

          <div className="vertical-gallery-grid">

            {/* Column 1 Moving Up */}
            <div style={{ overflow: 'hidden' }}>
              <div className="vertical-col-track-up">
                {[...column1Photos, ...column1Photos].map((photo, index) => (
                  <div
                    key={`c1-${index}`}
                    className="vertical-photo-card"
                    onClick={() => setSelectedPhoto(photo)}
                    style={{ height: photo.height, width: '100%' }}
                  >
                    <img src={photo.image} alt="ZAdroit Memory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 Moving Down */}
            <div style={{ overflow: 'hidden' }}>
              <div className="vertical-col-track-down">
                {[...column2Photos, ...column2Photos].map((photo, index) => (
                  <div
                    key={`c2-${index}`}
                    className="vertical-photo-card"
                    onClick={() => setSelectedPhoto(photo)}
                    style={{ height: photo.height, width: '100%' }}
                  >
                    <img src={photo.image} alt="ZAdroit Memory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 Moving Up */}
            <div style={{ overflow: 'hidden' }}>
              <div className="vertical-col-track-up-alt">
                {[...column3Photos, ...column3Photos].map((photo, index) => (
                  <div
                    key={`c3-${index}`}
                    className="vertical-photo-card"
                    onClick={() => setSelectedPhoto(photo)}
                    style={{ height: photo.height, width: '100%' }}
                  >
                    <img src={photo.image} alt="ZAdroit Memory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 Moving Down */}
            <div style={{ overflow: 'hidden' }}>
              <div className="vertical-col-track-down-alt">
                {[...column4Photos, ...column4Photos].map((photo, index) => (
                  <div
                    key={`c4-${index}`}
                    className="vertical-photo-card"
                    onClick={() => setSelectedPhoto(photo)}
                    style={{ height: photo.height, width: '100%' }}
                  >
                    <img src={photo.image} alt="ZAdroit Memory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(12px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '900px',
                maxHeight: '85vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0px',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  zIndex: 10,
                }}
              >
                <X size={22} />
              </button>

              <img
                src={selectedPhoto.image}
                alt="ZAdroit Memory Full View"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default function About() {
  const teamMembers = [
    {
      name: 'XYZ',
      role: 'Founder & Managing Director',
      bio: 'Visionary technology leader with over 12 years of experience in enterprise software, SAP integration, and digital transformation.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'XYZ',
      role: 'Head of Artificial Intelligence',
      bio: 'Specialist in machine learning models, predictive health algorithms, and natural language processing pipelines.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'XYZ',
      role: 'Lead Cloud Architect',
      bio: 'AWS & Azure certified architect managing Kubernetes clusters, CI/CD pipelines, and zero-trust cybersecurity.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'XYZ',
      role: 'FinTech Software Principal',
      bio: 'Lead architect behind ZAdPro MicroFin and Express Logistics ERP modules with real-time payment integrations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div>
      {/* 1. HERO BANNER SECTION */}
      <section className="hero-fullscreen" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #e0f2fe 0%, #f8fafc 100%)' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="glass-pill" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={16} /> About ZAdroit IT Solution
          </div>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
            Your Vision, Our Technology<br />
            <span className="gradient-text">Together We Build The Future</span>
          </h1>
          <p style={{ color: '#334155', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
            Transforming challenges into opportunities with cutting-edge digital solutions, enterprise software development, and strategic IT partnerships.
          </p>
        </div>
      </section>

      {/* 2. OUR JOURNEY BEGINS */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="glass-pill" style={{ marginBottom: '1rem' }}>Our Journey Begins</span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1.25rem', color: '#0f172a' }}>
                The Story Behind <span className="gradient-text">ZAdroit IT Solution</span>
              </h2>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                What started as a small team of passionate tech experts in Salem, Tamil Nadu, has grown into a trusted global IT solutions provider. With over a decade of hands-on experience, we help businesses streamline operations, boost productivity, and stay ahead with cutting-edge technology.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7' }}>
                Driven by continuous innovation and strong client partnerships, our mission remains unchanged empowering businesses of all sizes with future-ready digital solutions.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>
                  Decade of Milestone Achievements
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ borderLeft: '4px solid #0284c7', paddingLeft: '1rem' }}>
                    <h5 style={{ color: '#0f172a', fontWeight: 700 }}>2016 - Company Foundation</h5>
                    <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Established core team specializing in custom web applications & database architectures.</p>
                  </div>
                  <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '1rem' }}>
                    <h5 style={{ color: '#0f172a', fontWeight: 700 }}>2020 - Enterprise SaaS Launch</h5>
                    <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Released ZAdPro Yoke Education ERP & Express Logistics platforms.</p>
                  </div>
                  <div style={{ borderLeft: '4px solid #059669', paddingLeft: '1rem' }}>
                    <h5 style={{ color: '#0f172a', fontWeight: 700 }}>2026 - AI & Global Expansion</h5>
                    <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Integrating MedPredit AI health algorithms and SAP CPI cloud integrations for enterprise clients.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Core Capabilities</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a' }}>
              What We Do: <span className="gradient-text">Advantage at ZAdroit</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Result Driven', desc: 'We help clients achieve concrete financial goals increasing revenue, reducing operational waste, and enhancing brand value.' },
              { title: 'Tailor-Made Solutions', desc: 'Strong implementation capabilities across Enterprise Web, Mobile Apps, Cloud Infrastructure, AI models, and Digital Experiences.' },
              { title: 'Consultative Client Partnership', desc: 'We believe in creative, consultative technology partnerships with our vision to act as your long-term trusted advisor.' },
              { title: 'Accelerated Time to Market', desc: 'Best-in-class agile delivery methods, CI/CD tools, and component libraries that accelerate launch schedules.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0284c7', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR CORE BELIEFS */}
      <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Our Guiding Principles</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a' }}>
              Our Core <span className="gradient-text">Beliefs</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Shaping the future of business through intelligent, scalable, and innovative technology solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2.5rem', background: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Eye size={26} color="#0284c7" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.7' }}>
                We empower businesses through technology, driving continuous innovation, sustainable growth, and long-term success in a constantly evolving digital world.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', background: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={26} color="#2563eb" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.7' }}>
                We simplify technology for businesses by delivering smart, scalable, and secure IT solutions that enhance efficiency, boost productivity, and drive sustainable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET OUR TEAM */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Leadership & Experts</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a' }}>
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Your vision, our technology together, we build the future.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="glass-panel"
                style={{ padding: '2rem', textAlign: 'center', background: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 1.25rem auto',
                    border: '3px solid #0284c7',
                  }}
                />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
                  {member.name}
                </h4>
                <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
                  {member.role}
                </span>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VERTICAL MASONRY MULTI-COLUMN AUTO-SCROLL GALLERY (EXACT MATCH FOR USER RECORDING) */}
      <VerticalMasonryGallery />
    </div>
  );
}
