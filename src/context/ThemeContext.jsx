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
    id: 'nordic-slate',
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
  },
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('zadroit_theme_id');
    const found = themesList.find((t) => t.id === saved);
    return found || themesList[0];
  });

  const applyThemeToDOM = (theme) => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', theme.primary);
    root.style.setProperty('--brand-secondary', theme.secondary);
    root.style.setProperty('--brand-accent', theme.accent);
    root.style.setProperty('--bg-main', theme.bgMain);
    root.style.setProperty('--hero-bg', theme.heroBg);
    root.style.setProperty('--footer-bg', theme.footerBg);
    root.style.setProperty('--border-color', theme.border);
    root.style.setProperty('--border-hover-color', theme.borderHover);
    root.style.setProperty('--shadow-glow', theme.glow);

    // Apply to global CSS classes via style tag or inline variables
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
      .glass-pill {
        background: ${theme.pillBg} !important;
        border-color: ${theme.pillBorder} !important;
        color: ${theme.textColor} !important;
      }
      .btn-primary {
        background: ${theme.btnPrimaryBg} !important;
        box-shadow: 0 4px 14px ${theme.glow} !important;
      }
      .btn-primary:hover {
        background: ${theme.btnPrimaryHover} !important;
        box-shadow: 0 8px 22px ${theme.glow} !important;
      }
      .btn-secondary {
        border-color: ${theme.border} !important;
      }
      .btn-secondary:hover {
        border-color: ${theme.primary} !important;
        color: ${theme.primary} !important;
        background: ${theme.bgMain} !important;
      }
      .glass-panel {
        border-color: ${theme.border} !important;
      }
      .glass-panel:hover {
        border-color: ${theme.borderHover} !important;
      }
      body {
        background-color: ${theme.bgMain} !important;
      }
      .hero-fullscreen {
        background: ${theme.heroBg} !important;
      }
    `;
  };

  useEffect(() => {
    applyThemeToDOM(currentTheme);
    localStorage.setItem('zadroit_theme_id', currentTheme.id);
  }, [currentTheme]);

  const selectTheme = (themeId) => {
    const theme = themesList.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, selectTheme, themesList }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
