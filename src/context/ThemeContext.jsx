import React, { createContext, useContext, useState, useEffect } from 'react';

export const themesList = [
  {
    id: 'sunset-gold',
    name: 'Sunset Gold',
    category: 'Warm & Energetic',
    colorPreview: '#ea580c',
    colorSecondary: '#f97316',
    primary: '#ea580c',
    secondary: '#f97316',
    accent: '#d97706',
    gradientText: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #d97706 100%)',
    bgMain: '#fffcf8',
    heroBg: 'linear-gradient(180deg, #fff7ed 0%, #fffcf8 100%)',
    footerBg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
    border: '#fed7aa',
    borderHover: '#fb923c',
    glow: 'rgba(234, 88, 12, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #ea580c, #f97316)',
    btnPrimaryHover: 'linear-gradient(135deg, #c2410c, #ea580c)',
    pillBg: 'rgba(249, 115, 22, 0.08)',
    pillBorder: 'rgba(249, 115, 22, 0.25)',
    textColor: '#ea580c',
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    category: 'Classic Tech',
    colorPreview: '#0284c7',
    colorSecondary: '#06b6d4',
    primary: '#0284c7',
    secondary: '#06b6d4',
    accent: '#2563eb',
    gradientText: 'linear-gradient(135deg, #2C69D1 0%, #0ABCF9 100%)',
    bgMain: '#f8fafc',
    heroBg: 'linear-gradient(180deg, #e0f2fe 0%, #f8fafc 100%)',
    footerBg: 'linear-gradient(135deg, #e0f2fe 0%, #e0e7ff 100%)',
    border: '#bae6fd',
    borderHover: '#38bdf8',
    glow: 'rgba(10, 188, 249, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #0284c7, #2563eb)',
    btnPrimaryHover: 'linear-gradient(135deg, #0369a1, #1d4ed8)',
    pillBg: 'rgba(2, 132, 199, 0.08)',
    pillBorder: 'rgba(2, 132, 199, 0.25)',
    textColor: '#0284c7',
  },
  {
    id: 'emerald-mint',
    name: 'Emerald Mint',
    category: 'Eco & Growth',
    colorPreview: '#059669',
    colorSecondary: '#10b981',
    primary: '#059669',
    secondary: '#10b981',
    accent: '#34d399',
    gradientText: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
    bgMain: '#f0fdf4',
    heroBg: 'linear-gradient(180deg, #dcfce7 0%, #f0fdf4 100%)',
    footerBg: 'linear-gradient(135deg, #dcfce7 0%, #ecfdf5 100%)',
    border: '#a7f3d0',
    borderHover: '#34d399',
    glow: 'rgba(16, 185, 129, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #059669, #10b981)',
    btnPrimaryHover: 'linear-gradient(135deg, #047857, #059669)',
    pillBg: 'rgba(16, 185, 129, 0.08)',
    pillBorder: 'rgba(16, 185, 129, 0.25)',
    textColor: '#059669',
  },
  {
    id: 'royal-violet',
    name: 'Royal Violet',
    category: 'Enterprise SaaS',
    colorPreview: '#7c3aed',
    colorSecondary: '#a855f7',
    primary: '#7c3aed',
    secondary: '#a855f7',
    accent: '#c084fc',
    gradientText: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
    bgMain: '#faf5ff',
    heroBg: 'linear-gradient(180deg, #f3e8ff 0%, #faf5ff 100%)',
    footerBg: 'linear-gradient(135deg, #f3e8ff 0%, #fae8ff 100%)',
    border: '#e9d5ff',
    borderHover: '#c084fc',
    glow: 'rgba(124, 58, 237, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    btnPrimaryHover: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
    pillBg: 'rgba(124, 58, 237, 0.08)',
    pillBorder: 'rgba(124, 58, 237, 0.25)',
    textColor: '#7c3aed',
  },
  {
    id: 'ruby-crimson',
    name: 'Ruby Crimson',
    category: 'Vibrant Passion',
    colorPreview: '#e11d48',
    colorSecondary: '#f43f5e',
    primary: '#e11d48',
    secondary: '#f43f5e',
    accent: '#fb7185',
    gradientText: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #fb7185 100%)',
    bgMain: '#fff1f2',
    heroBg: 'linear-gradient(180deg, #ffe4e6 0%, #fff1f2 100%)',
    footerBg: 'linear-gradient(135deg, #ffe4e6 0%, #fff1f2 100%)',
    border: '#fecdd3',
    borderHover: '#fb7185',
    glow: 'rgba(225, 29, 72, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #e11d48, #f43f5e)',
    btnPrimaryHover: 'linear-gradient(135deg, #be123c, #e11d48)',
    pillBg: 'rgba(225, 29, 72, 0.08)',
    pillBorder: 'rgba(225, 29, 72, 0.25)',
    textColor: '#e11d48',
  },
  {
    id: 'oceanic-teal',
    name: 'Oceanic Teal',
    category: 'Deep Sea Modern',
    colorPreview: '#0d9488',
    colorSecondary: '#14b8a6',
    primary: '#0d9488',
    secondary: '#14b8a6',
    accent: '#2dd4bf',
    gradientText: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #2dd4bf 100%)',
    bgMain: '#f0fdfa',
    heroBg: 'linear-gradient(180deg, #ccfbf1 0%, #f0fdfa 100%)',
    footerBg: 'linear-gradient(135deg, #ccfbf1 0%, #e6fffa 100%)',
    border: '#99f6e4',
    borderHover: '#2dd4bf',
    glow: 'rgba(20, 184, 166, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #0d9488, #14b8a6)',
    btnPrimaryHover: 'linear-gradient(135deg, #0f766e, #0d9488)',
    pillBg: 'rgba(13, 148, 136, 0.08)',
    pillBorder: 'rgba(13, 148, 136, 0.25)',
    textColor: '#0d9488',
  },
  {
    id: 'nordic-indigo',
    name: 'Nordic Indigo',
    category: 'Corporate Elegance',
    colorPreview: '#3b82f6',
    colorSecondary: '#6366f1',
    primary: '#3b82f6',
    secondary: '#6366f1',
    accent: '#4f46e5',
    gradientText: 'linear-gradient(135deg, #1d4ed8 0%, #4f46e5 50%, #6366f1 100%)',
    bgMain: '#f8fafc',
    heroBg: 'linear-gradient(180deg, #e0e7ff 0%, #f8fafc 100%)',
    footerBg: 'linear-gradient(135deg, #e0e7ff 0%, #e0f2fe 100%)',
    border: '#c7d2fe',
    borderHover: '#818cf8',
    glow: 'rgba(79, 70, 229, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #3b82f6, #4f46e5)',
    btnPrimaryHover: 'linear-gradient(135deg, #1d4ed8, #4338ca)',
    pillBg: 'rgba(79, 70, 229, 0.08)',
    pillBorder: 'rgba(79, 70, 229, 0.25)',
    textColor: '#4f46e5',
  },
  {
    id: 'lux-gold',
    name: 'Lux Gold',
    category: 'Luxury Bronze',
    colorPreview: '#d97706',
    colorSecondary: '#fbbf24',
    primary: '#b45309',
    secondary: '#d97706',
    accent: '#fbbf24',
    gradientText: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #fbbf24 100%)',
    bgMain: '#fffbe6',
    heroBg: 'linear-gradient(180deg, #fef3c7 0%, #fffbe6 100%)',
    footerBg: 'linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)',
    border: '#fde68a',
    borderHover: '#fbbf24',
    glow: 'rgba(217, 119, 6, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #b45309, #d97706)',
    btnPrimaryHover: 'linear-gradient(135deg, #78350f, #b45309)',
    pillBg: 'rgba(217, 119, 6, 0.08)',
    pillBorder: 'rgba(217, 119, 6, 0.25)',
    textColor: '#b45309',
  },
  {
    id: 'cyber-pink',
    name: 'Cyber Pink',
    category: 'Futuristic Magenta',
    colorPreview: '#db2777',
    colorSecondary: '#ec4899',
    primary: '#db2777',
    secondary: '#ec4899',
    accent: '#f472b6',
    gradientText: 'linear-gradient(135deg, #c026d3 0%, #db2777 50%, #ec4899 100%)',
    bgMain: '#fdf2f8',
    heroBg: 'linear-gradient(180deg, #fce7f3 0%, #fdf2f8 100%)',
    footerBg: 'linear-gradient(135deg, #fce7f3 0%, #fae8ff 100%)',
    border: '#fbcfe8',
    borderHover: '#f472b6',
    glow: 'rgba(219, 39, 119, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #db2777, #ec4899)',
    btnPrimaryHover: 'linear-gradient(135deg, #be185d, #db2777)',
    pillBg: 'rgba(219, 39, 119, 0.08)',
    pillBorder: 'rgba(219, 39, 119, 0.25)',
    textColor: '#db2777',
  },
  {
    id: 'midnight-neon',
    name: 'Midnight Neon',
    category: 'Cyberpunk Dark',
    colorPreview: '#38bdf8',
    colorSecondary: '#c084fc',
    primary: '#38bdf8',
    secondary: '#818cf8',
    accent: '#c084fc',
    gradientText: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
    bgMain: '#0b1329',
    heroBg: 'linear-gradient(180deg, #0f172a 0%, #0b1329 100%)',
    footerBg: 'linear-gradient(135deg, #1e293b 0%, #0b1329 100%)',
    border: '#334155',
    borderHover: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.45)',
    btnPrimaryBg: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    btnPrimaryHover: 'linear-gradient(135deg, #0369a1, #0284c7)',
    pillBg: 'rgba(56, 189, 248, 0.12)',
    pillBorder: 'rgba(56, 189, 248, 0.35)',
    textColor: '#38bdf8',
    isDark: true,
  },
  {
    id: 'solar-flare',
    name: 'Solar Flare',
    category: 'High-Impact Red',
    colorPreview: '#dc2626',
    colorSecondary: '#f59e0b',
    primary: '#dc2626',
    secondary: '#f59e0b',
    accent: '#ef4444',
    gradientText: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #f59e0b 100%)',
    bgMain: '#fff5f5',
    heroBg: 'linear-gradient(180deg, #ffe4e6 0%, #fff5f5 100%)',
    footerBg: 'linear-gradient(135deg, #fef2f2 0%, #fef3c7 100%)',
    border: '#fca5a5',
    borderHover: '#ef4444',
    glow: 'rgba(220, 38, 38, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #dc2626, #f59e0b)',
    btnPrimaryHover: 'linear-gradient(135deg, #991b1b, #d97706)',
    pillBg: 'rgba(220, 38, 38, 0.08)',
    pillBorder: 'rgba(220, 38, 38, 0.25)',
    textColor: '#dc2626',
  },
  {
    id: 'deep-forest',
    name: 'Deep Forest',
    category: 'Bio & Nature',
    colorPreview: '#15803d',
    colorSecondary: '#84cc16',
    primary: '#15803d',
    secondary: '#84cc16',
    accent: '#22c55e',
    gradientText: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #84cc16 100%)',
    bgMain: '#f6fdf8',
    heroBg: 'linear-gradient(180deg, #dcfce7 0%, #f6fdf8 100%)',
    footerBg: 'linear-gradient(135deg, #ecfdf5 0%, #f7fee7 100%)',
    border: '#86efac',
    borderHover: '#22c55e',
    glow: 'rgba(21, 128, 61, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #15803d, #84cc16)',
    btnPrimaryHover: 'linear-gradient(135deg, #166534, #65a30d)',
    pillBg: 'rgba(21, 128, 61, 0.08)',
    pillBorder: 'rgba(21, 128, 61, 0.25)',
    textColor: '#15803d',
  },
  {
    id: 'ultramarine',
    name: 'Ultramarine Sapphire',
    category: 'Deep Tech Navy',
    colorPreview: '#1e40af',
    colorSecondary: '#3b82f6',
    primary: '#1e40af',
    secondary: '#3b82f6',
    accent: '#60a5fa',
    gradientText: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)',
    bgMain: '#f0f7ff',
    heroBg: 'linear-gradient(180deg, #dbeafe 0%, #f0f7ff 100%)',
    footerBg: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
    border: '#93c5fd',
    borderHover: '#3b82f6',
    glow: 'rgba(30, 64, 175, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    btnPrimaryHover: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)',
    pillBg: 'rgba(30, 64, 175, 0.08)',
    pillBorder: 'rgba(30, 64, 175, 0.25)',
    textColor: '#1e40af',
  },
  {
    id: 'amethyst-glow',
    name: 'Amethyst Glow',
    category: 'Mystic Purple',
    colorPreview: '#9333ea',
    colorSecondary: '#f43f5e',
    primary: '#9333ea',
    secondary: '#f43f5e',
    accent: '#c084fc',
    gradientText: 'linear-gradient(135deg, #7e22ce 0%, #9333ea 50%, #f43f5e 100%)',
    bgMain: '#faf5ff',
    heroBg: 'linear-gradient(180deg, #f3e8ff 0%, #faf5ff 100%)',
    footerBg: 'linear-gradient(135deg, #f3e8ff 0%, #ffe4e6 100%)',
    border: '#d8b4fe',
    borderHover: '#c084fc',
    glow: 'rgba(147, 51, 234, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #9333ea, #f43f5e)',
    btnPrimaryHover: 'linear-gradient(135deg, #7e22ce, #e11d48)',
    pillBg: 'rgba(147, 51, 234, 0.08)',
    pillBorder: 'rgba(147, 51, 234, 0.25)',
    textColor: '#9333ea',
  },
  {
    id: 'coral-sunrise',
    name: 'Coral Sunrise',
    category: 'Fresh Peach',
    colorPreview: '#ff6b6b',
    colorSecondary: '#f06595',
    primary: '#ff6b6b',
    secondary: '#f06595',
    accent: '#cc5de8',
    gradientText: 'linear-gradient(135deg, #ff6b6b 0%, #f06595 50%, #cc5de8 100%)',
    bgMain: '#fff0f3',
    heroBg: 'linear-gradient(180deg, #ffe3e8 0%, #fff0f3 100%)',
    footerBg: 'linear-gradient(135deg, #ffe3e8 0%, #f3d9fa 100%)',
    border: '#ffc9c9',
    borderHover: '#ff8787',
    glow: 'rgba(255, 107, 107, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #ff6b6b, #f06595)',
    btnPrimaryHover: 'linear-gradient(135deg, #fa5252, #e64980)',
    pillBg: 'rgba(255, 107, 107, 0.08)',
    pillBorder: 'rgba(255, 107, 107, 0.25)',
    textColor: '#ff6b6b',
  },
  {
    id: 'titanium-slate',
    name: 'Titanium Slate',
    category: 'Sleek Minimalist',
    colorPreview: '#475569',
    colorSecondary: '#0ea5e9',
    primary: '#475569',
    secondary: '#0ea5e9',
    accent: '#38bdf8',
    gradientText: 'linear-gradient(135deg, #334155 0%, #475569 50%, #0ea5e9 100%)',
    bgMain: '#f8fafc',
    heroBg: 'linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%)',
    footerBg: 'linear-gradient(135deg, #e2e8f0 0%, #e0f2fe 100%)',
    border: '#cbd5e1',
    borderHover: '#0ea5e9',
    glow: 'rgba(71, 85, 105, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #334155, #0ea5e9)',
    btnPrimaryHover: 'linear-gradient(135deg, #1e293b, #0284c7)',
    pillBg: 'rgba(71, 85, 105, 0.08)',
    pillBorder: 'rgba(71, 85, 105, 0.25)',
    textColor: '#334155',
  },
  {
    id: 'bordeaux-wine',
    name: 'Bordeaux Wine',
    category: 'Luxury Burgundy',
    colorPreview: '#9f1239',
    colorSecondary: '#be123c',
    primary: '#9f1239',
    secondary: '#be123c',
    accent: '#fb7185',
    gradientText: 'linear-gradient(135deg, #881337 0%, #9f1239 50%, #be123c 100%)',
    bgMain: '#fff1f2',
    heroBg: 'linear-gradient(180deg, #ffe4e6 0%, #fff1f2 100%)',
    footerBg: 'linear-gradient(135deg, #ffe4e6 0%, #fff0f3 100%)',
    border: '#fecdd3',
    borderHover: '#be123c',
    glow: 'rgba(159, 18, 57, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #9f1239, #be123c)',
    btnPrimaryHover: 'linear-gradient(135deg, #881337, #9f1239)',
    pillBg: 'rgba(159, 18, 57, 0.08)',
    pillBorder: 'rgba(159, 18, 57, 0.25)',
    textColor: '#9f1239',
  },
  {
    id: 'tropical-aqua',
    name: 'Tropical Aqua',
    category: 'Lagoon Turquoise',
    colorPreview: '#0891b2',
    colorSecondary: '#06b6d4',
    primary: '#0891b2',
    secondary: '#06b6d4',
    accent: '#22d3ee',
    gradientText: 'linear-gradient(135deg, #155e75 0%, #0891b2 50%, #06b6d4 100%)',
    bgMain: '#ecfeff',
    heroBg: 'linear-gradient(180deg, #cffaff 0%, #ecfeff 100%)',
    footerBg: 'linear-gradient(135deg, #cffaff 0%, #e0f2fe 100%)',
    border: '#a5f3fc',
    borderHover: '#06b6d4',
    glow: 'rgba(8, 145, 178, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #0891b2, #06b6d4)',
    btnPrimaryHover: 'linear-gradient(135deg, #155e75, #0891b2)',
    pillBg: 'rgba(8, 145, 178, 0.08)',
    pillBorder: 'rgba(8, 145, 178, 0.25)',
    textColor: '#0891b2',
  },
  {
    id: 'copper-bronze',
    name: 'Copper Bronze',
    category: 'Metallic Warmth',
    colorPreview: '#c2410c',
    colorSecondary: '#d97706',
    primary: '#c2410c',
    secondary: '#d97706',
    accent: '#f59e0b',
    gradientText: 'linear-gradient(135deg, #9a3412 0%, #c2410c 50%, #d97706 100%)',
    bgMain: '#fffaf5',
    heroBg: 'linear-gradient(180deg, #ffedd5 0%, #fffaf5 100%)',
    footerBg: 'linear-gradient(135deg, #ffedd5 0%, #fef3c7 100%)',
    border: '#fed7aa',
    borderHover: '#d97706',
    glow: 'rgba(194, 65, 12, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #c2410c, #d97706)',
    btnPrimaryHover: 'linear-gradient(135deg, #9a3412, #c2410c)',
    pillBg: 'rgba(194, 65, 12, 0.08)',
    pillBorder: 'rgba(194, 65, 12, 0.25)',
    textColor: '#c2410c',
  },
  {
    id: 'cosmic-nebula',
    name: 'Cosmic Nebula',
    category: 'Deep Space Vibrant',
    colorPreview: '#8b5cf6',
    colorSecondary: '#ec4899',
    primary: '#8b5cf6',
    secondary: '#ec4899',
    accent: '#d946ef',
    gradientText: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #ec4899 100%)',
    bgMain: '#faf5ff',
    heroBg: 'linear-gradient(180deg, #f3e8ff 0%, #faf5ff 100%)',
    footerBg: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%)',
    border: '#ddd6fe',
    borderHover: '#ec4899',
    glow: 'rgba(139, 92, 246, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    btnPrimaryHover: 'linear-gradient(135deg, #6d28d9, #db2777)',
    pillBg: 'rgba(139, 92, 246, 0.08)',
    pillBorder: 'rgba(139, 92, 246, 0.25)',
    textColor: '#8b5cf6',
  },
  {
    id: 'electric-lime',
    name: 'Electric Lime',
    category: 'Vibrant Citrus',
    colorPreview: '#65a30d',
    colorSecondary: '#84cc16',
    primary: '#65a30d',
    secondary: '#84cc16',
    accent: '#eab308',
    gradientText: 'linear-gradient(135deg, #4d7c0f 0%, #65a30d 50%, #eab308 100%)',
    bgMain: '#f7fee7',
    heroBg: 'linear-gradient(180deg, #ecfccb 0%, #f7fee7 100%)',
    footerBg: 'linear-gradient(135deg, #ecfccb 0%, #fef9c3 100%)',
    border: '#bef264',
    borderHover: '#84cc16',
    glow: 'rgba(101, 163, 13, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #65a30d, #84cc16)',
    btnPrimaryHover: 'linear-gradient(135deg, #4d7c0f, #65a30d)',
    pillBg: 'rgba(101, 163, 13, 0.08)',
    pillBorder: 'rgba(101, 163, 13, 0.25)',
    textColor: '#65a30d',
  },
  {
    id: 'rose-gold-luxe',
    name: 'Rose Gold Luxe',
    category: 'Blush Luxury',
    colorPreview: '#be185d',
    colorSecondary: '#fbbf24',
    primary: '#be185d',
    secondary: '#fbbf24',
    accent: '#f43f5e',
    gradientText: 'linear-gradient(135deg, #9d174d 0%, #be185d 50%, #fbbf24 100%)',
    bgMain: '#fff1f2',
    heroBg: 'linear-gradient(180deg, #ffe4e6 0%, #fff1f2 100%)',
    footerBg: 'linear-gradient(135deg, #ffe4e6 0%, #fef3c7 100%)',
    border: '#fecdd3',
    borderHover: '#fbbf24',
    glow: 'rgba(190, 24, 93, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #be185d, #d97706)',
    btnPrimaryHover: 'linear-gradient(135deg, #9d174d, #b45309)',
    pillBg: 'rgba(190, 24, 93, 0.08)',
    pillBorder: 'rgba(190, 24, 93, 0.25)',
    textColor: '#be185d',
  },
  {
    id: 'arctic-frost',
    name: 'Arctic Frost',
    category: 'Glacier Blue',
    colorPreview: '#0284c7',
    colorSecondary: '#38bdf8',
    primary: '#0284c7',
    secondary: '#38bdf8',
    accent: '#7dd3fc',
    gradientText: 'linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #7dd3fc 100%)',
    bgMain: '#f0f9ff',
    heroBg: 'linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 100%)',
    footerBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
    border: '#bae6fd',
    borderHover: '#38bdf8',
    glow: 'rgba(2, 132, 199, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    btnPrimaryHover: 'linear-gradient(135deg, #0369a1, #0284c7)',
    pillBg: 'rgba(2, 132, 199, 0.08)',
    pillBorder: 'rgba(2, 132, 199, 0.25)',
    textColor: '#0284c7',
  },
  {
    id: 'volcanic-lava',
    name: 'Volcanic Lava',
    category: 'Magma Flame',
    colorPreview: '#b91c1c',
    colorSecondary: '#ea580c',
    primary: '#b91c1c',
    secondary: '#ea580c',
    accent: '#f97316',
    gradientText: 'linear-gradient(135deg, #991b1b 0%, #b91c1c 50%, #ea580c 100%)',
    bgMain: '#fff5f5',
    heroBg: 'linear-gradient(180deg, #fee2e2 0%, #fff5f5 100%)',
    footerBg: 'linear-gradient(135deg, #fee2e2 0%, #ffedd5 100%)',
    border: '#fca5a5',
    borderHover: '#ea580c',
    glow: 'rgba(185, 28, 28, 0.35)',
    btnPrimaryBg: 'linear-gradient(135deg, #b91c1c, #ea580c)',
    btnPrimaryHover: 'linear-gradient(135deg, #991b1b, #c2410c)',
    pillBg: 'rgba(185, 28, 28, 0.08)',
    pillBorder: 'rgba(185, 28, 28, 0.25)',
    textColor: '#b91c1c',
  },
  {
    id: 'matrix-cyber',
    name: 'Matrix Cyber',
    category: 'Terminal Dark',
    colorPreview: '#22c55e',
    colorSecondary: '#10b981',
    primary: '#22c55e',
    secondary: '#10b981',
    accent: '#4ade80',
    gradientText: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #10b981 100%)',
    bgMain: '#05180f',
    heroBg: 'linear-gradient(180deg, #0a291a 0%, #05180f 100%)',
    footerBg: 'linear-gradient(135deg, #0f3824 0%, #05180f 100%)',
    border: '#15803d',
    borderHover: '#4ade80',
    glow: 'rgba(34, 197, 94, 0.45)',
    btnPrimaryBg: 'linear-gradient(135deg, #15803d, #22c55e)',
    btnPrimaryHover: 'linear-gradient(135deg, #166534, #15803d)',
    pillBg: 'rgba(34, 197, 94, 0.12)',
    pillBorder: 'rgba(34, 197, 94, 0.35)',
    textColor: '#4ade80',
    isDark: true,
  },
];

export function hexToRgb(hex) {
  if (!hex) return { r: 234, g: 88, b: 12 };
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num)) return { r: 234, g: 88, b: 12 };
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function buildCustomThemeObject(primaryHex = '#6366f1', secondaryHex = '#a855f7', isDark = false) {
  const { r, g, b } = hexToRgb(primaryHex);
  const { r: r2, g: g2, b: b2 } = hexToRgb(secondaryHex);

  const bgMain = isDark ? '#0b1329' : `rgba(${r}, ${g}, ${b}, 0.02)`;
  const heroBg = isDark
    ? `linear-gradient(180deg, #0f172a 0%, #0b1329 100%)`
    : `linear-gradient(180deg, rgba(${r}, ${g}, ${b}, 0.07) 0%, rgba(255, 255, 255, 0.98) 100%)`;
  const footerBg = isDark
    ? `linear-gradient(135deg, #1e293b 0%, #0b1329 100%)`
    : `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.05) 0%, rgba(${r2}, ${g2}, ${b2}, 0.08) 100%)`;
  const border = isDark ? 'rgba(255,255,255,0.15)' : `rgba(${r}, ${g}, ${b}, 0.22)`;
  const borderHover = primaryHex;
  const glow = `rgba(${r}, ${g}, ${b}, 0.35)`;

  return {
    id: 'custom',
    name: 'Custom Palette',
    category: 'User Created',
    colorPreview: primaryHex,
    colorSecondary: secondaryHex,
    primary: primaryHex,
    secondary: secondaryHex,
    accent: secondaryHex,
    gradientText: `linear-gradient(135deg, ${primaryHex} 0%, ${secondaryHex} 100%)`,
    bgMain,
    heroBg,
    footerBg,
    border,
    borderHover,
    glow,
    btnPrimaryBg: `linear-gradient(135deg, ${primaryHex}, ${secondaryHex})`,
    btnPrimaryHover: `linear-gradient(135deg, ${primaryHex}, ${primaryHex})`,
    pillBg: `rgba(${r}, ${g}, ${b}, 0.1)`,
    pillBorder: `rgba(${r}, ${g}, ${b}, 0.3)`,
    textColor: primaryHex,
    isDark,
  };
}

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [customColors, setCustomColors] = useState(() => {
    return {
      primary: localStorage.getItem('zadroit_custom_primary') || '#6366f1',
      secondary: localStorage.getItem('zadroit_custom_secondary') || '#a855f7',
      isDark: localStorage.getItem('zadroit_custom_is_dark') === 'true',
    };
  });

  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedId = localStorage.getItem('zadroit_theme_id');
    if (savedId === 'custom') {
      const p = localStorage.getItem('zadroit_custom_primary') || '#6366f1';
      const s = localStorage.getItem('zadroit_custom_secondary') || '#a855f7';
      const d = localStorage.getItem('zadroit_custom_is_dark') === 'true';
      return buildCustomThemeObject(p, s, d);
    }
    const found = themesList.find((t) => t.id === savedId);
    return found || themesList[0];
  });

  const applyThemeToDOM = (theme) => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', theme.primary);
    root.style.setProperty('--brand-secondary', theme.secondary);
    root.style.setProperty('--brand-accent', theme.accent);
    root.style.setProperty('--brand-orange', theme.primary);
    root.style.setProperty('--brand-orange-hover', theme.primary);
    root.style.setProperty('--bg-main', theme.bgMain);
    root.style.setProperty('--bg-card', theme.isDark ? '#1e293b' : '#ffffff');
    root.style.setProperty('--hero-bg', theme.heroBg);
    root.style.setProperty('--footer-bg', theme.footerBg);
    root.style.setProperty('--border-color', theme.border);
    root.style.setProperty('--border-hover-color', theme.borderHover);
    root.style.setProperty('--shadow-glow', theme.glow);
    root.style.setProperty('--text-accent', theme.primary);

    // Apply to global CSS classes via style tag
    const styleId = 'zadroit-dynamic-theme-styles';
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
      .gradient-text {
        background: ${theme.gradientText} !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
      .glass-pill, .theme-pill {
        background: ${theme.pillBg} !important;
        border-color: ${theme.pillBorder} !important;
        color: ${theme.textColor} !important;
      }
      .btn-primary {
        background: ${theme.btnPrimaryBg} !important;
        box-shadow: 0 4px 14px ${theme.glow} !important;
        color: #ffffff !important;
      }
      .btn-primary:hover {
        background: ${theme.btnPrimaryHover} !important;
        box-shadow: 0 8px 22px ${theme.glow} !important;
      }
      .btn-secondary {
        border-color: ${theme.border} !important;
        color: ${theme.isDark ? '#e2e8f0' : '#0f172a'} !important;
        background: ${theme.isDark ? '#1e293b' : '#ffffff'} !important;
      }
      .btn-secondary:hover {
        border-color: ${theme.primary} !important;
        color: ${theme.primary} !important;
        background: ${theme.pillBg} !important;
      }
      .glass-panel, .theme-card {
        background: ${theme.isDark ? '#1e293b' : '#ffffff'} !important;
        border-color: ${theme.border} !important;
        box-shadow: 0 10px 30px -5px ${theme.glow}, 0 4px 12px rgba(15, 23, 42, 0.04) !important;
      }
      .glass-panel:hover, .theme-card:hover {
        border-color: ${theme.borderHover} !important;
        box-shadow: 0 16px 35px -5px ${theme.glow} !important;
      }
      body {
        background-color: ${theme.bgMain} !important;
        color: ${theme.isDark ? '#f8fafc' : '#0f172a'} !important;
      }
      .hero-fullscreen {
        background: ${theme.heroBg} !important;
      }
      .theme-accent-text, .theme-text-primary {
        color: ${theme.primary} !important;
      }
      .theme-accent-bg {
        background-color: ${theme.primary} !important;
        color: #ffffff !important;
      }
      .theme-pill-bg {
        background: ${theme.pillBg} !important;
        color: ${theme.primary} !important;
      }
      .theme-border-accent {
        border-color: ${theme.border} !important;
      }
      /* Carousel Navigation Buttons & Indicators */
      .carousel-btn, .slider-btn, button[aria-label*="Previous"], button[aria-label*="Next"] {
        background: ${theme.isDark ? '#1e293b' : '#ffffff'} !important;
        border: 1px solid ${theme.border} !important;
        color: ${theme.primary} !important;
      }
      .carousel-btn:hover, .slider-btn:hover, button[aria-label*="Previous"]:hover, button[aria-label*="Next"]:hover {
        background: ${theme.primary} !important;
        color: #ffffff !important;
        box-shadow: 0 4px 14px ${theme.glow} !important;
      }
      /* Swiper & Slider Dot Indicators */
      .dot-active, .indicator-active {
        background: ${theme.primary} !important;
      }
    `;
  };

  useEffect(() => {
    applyThemeToDOM(currentTheme);
    localStorage.setItem('zadroit_theme_id', currentTheme.id);
  }, [currentTheme]);

  const selectTheme = (themeId) => {
    if (themeId === 'custom') {
      const customObj = buildCustomThemeObject(customColors.primary, customColors.secondary, customColors.isDark);
      setCurrentTheme(customObj);
      localStorage.setItem('zadroit_theme_id', 'custom');
      return;
    }
    const theme = themesList.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  const updateCustomColors = (primary, secondary, isDark) => {
    const updated = {
      primary: primary || customColors.primary,
      secondary: secondary || customColors.secondary,
      isDark: isDark !== undefined ? isDark : customColors.isDark,
    };
    setCustomColors(updated);
    localStorage.setItem('zadroit_custom_primary', updated.primary);
    localStorage.setItem('zadroit_custom_secondary', updated.secondary);
    localStorage.setItem('zadroit_custom_is_dark', updated.isDark);

    const customObj = buildCustomThemeObject(updated.primary, updated.secondary, updated.isDark);
    setCurrentTheme(customObj);
    localStorage.setItem('zadroit_theme_id', 'custom');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, selectTheme, themesList, customColors, updateCustomColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

