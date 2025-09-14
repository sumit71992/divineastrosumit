/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            500: '#ffd700',
            600: '#e6c200',
            700: '#cc9900',
          },
          mystical: {
            50: '#e8f4ec',
            100: '#b8d4c2',
            500: '#2d5a3d',
            700: '#1a4d3a',
            900: '#0f3d2c',
          }
        },
        animation: {
          'twinkle': 'twinkle 3s infinite',
          'rotate-slow': 'rotate 20s linear infinite',
          'pulse-glow': 'pulse-glow 2s infinite',
        },
        keyframes: {
          twinkle: {
            '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
            '50%': { opacity: '1', transform: 'scale(1.2)' },
          },
          rotate: {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
          'pulse-glow': {
            '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
            '70%': { boxShadow: '0 0 0 20px rgba(37, 211, 102, 0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
          },
        },
      },
    },
    plugins: [],
  }
  