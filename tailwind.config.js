/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        knight: {
          red: '#C0392B',
          'red-bright': '#E74C3C',
          'red-deep': '#8B1A1A',
          'red-glow': '#FF2D2D',
          'red-muted': '#7F1D1D',
          black: '#0A0A0A',
          'black-2': '#111111',
          'black-3': '#1A1A1A',
          'black-4': '#222222',
          'black-5': '#2D2D2D',
          gray: '#3D3D3D',
          'gray-light': '#555555',
          'gray-muted': '#888888',
          'gray-faint': '#AAAAAA',
          white: '#F5F0F0',
          'white-dim': '#D4CCCC',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'type-cursor': 'typeCursor 1s step-end infinite',
        'border-flow': 'borderFlow 3s linear infinite',
        'particle': 'particle 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px #C0392B40, 0 0 20px #C0392B20' },
          '50%': { boxShadow: '0 0 20px #C0392B80, 0 0 40px #C0392B40' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typeCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(720deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'knight-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A0505 50%, #0A0A0A 100%)',
        'red-gradient': 'linear-gradient(135deg, #C0392B, #8B1A1A)',
        'card-gradient': 'linear-gradient(145deg, #1A1A1A, #111111)',
        'glow-gradient': 'radial-gradient(ellipse at center, #C0392B20 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
