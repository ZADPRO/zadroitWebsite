import React from 'react';
import logoImg from '../assets/logo.png';

export default function ZadroitLogo({ height = 48, className = '' }) {
  return (
    <img
      src={logoImg}
      alt="ZAdroit IT Solutions"
      style={{ height: `${height}px`, width: 'auto', display: 'block', objectFit: 'contain' }}
      className={className}
    />
  );
}
