/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1020',
        ember: '#ff5f31',
        emberSoft: '#ffcfb9',
        pine: '#0f766e',
        paper: '#f8f5ef',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(255, 95, 49, 0.22)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(255,95,49,0.18), transparent 36%), radial-gradient(circle at top right, rgba(15,118,110,0.18), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.94), rgba(248,245,239,0.92))',
      },
    },
  },
  plugins: [],
}
