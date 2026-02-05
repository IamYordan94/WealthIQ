// Design system – single source for theme
export const colors = {
  bgDark: '#0a0a0f',
  bgCard: '#1a1a24',
  primary: '#10b981',
  primaryDark: '#059669',
  primaryLight: '#34d399',
  secondary: '#a855f7',
  accent: '#fbbf24',
  textPrimary: '#ffffff',
  textSecondary: '#a0a0b0',
  textMuted: '#606070',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  error: '#ef4444',
  border: 'rgba(255, 255, 255, 0.1)',
  premium: '#fbbf24',
  bgCardHover: 'rgba(255, 255, 255, 0.05)',
  transparent: 'rgba(0, 0, 0, 0)',
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 };
export const borderRadius = { sm: 8, md: 12, lg: 16, xl: 24, full: 999 };

export const typography = {
  h1: { fontSize: 32, fontWeight: 'bold', lineHeight: 40, letterSpacing: -0.5 },
  h2: { fontSize: 24, fontWeight: 'bold', lineHeight: 32, letterSpacing: -0.3 },
  h3: { fontSize: 20, fontWeight: 'bold', lineHeight: 28, letterSpacing: -0.2 },
  body: { fontSize: 16, fontWeight: 'normal', lineHeight: 24, letterSpacing: 0 },
  bodySmall: { fontSize: 14, fontWeight: 'normal', lineHeight: 20, letterSpacing: 0 },
  caption: { fontSize: 12, fontWeight: 'normal', lineHeight: 16, letterSpacing: 0.2 },
  label: { fontSize: 14, fontWeight: '600', lineHeight: 20, letterSpacing: 0.1 },
  button: { fontSize: 16, fontWeight: '600', lineHeight: 24, letterSpacing: 0.3 },
};

export const shadows = {
  sm: { elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 3 },
  md: { elevation: 6, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 },
  lg: { elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  glow: { elevation: 8, shadowColor: '#10b981', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.35, shadowRadius: 12 },
};

export const glass = {
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cardLight: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  premium: {
    backgroundColor: 'rgba(251, 191, 36, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.25)',
    elevation: 4,
    shadowColor: 'rgba(251, 191, 36, 0.3)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  border: 'rgba(255, 255, 255, 0.08)',
  borderBright: 'rgba(255, 255, 255, 0.15)',
};

export const animations = {
  fast: 200,
  normal: 400,
  slow: 800,
  spring: { tension: 40, friction: 7 },
};
