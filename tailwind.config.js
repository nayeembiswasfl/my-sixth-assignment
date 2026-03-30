/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#6d28ff',
          electric: '#b21dff',
          mist: '#f3ecff',
          ink: '#141c34',
          muted: '#6d7f94',
          border: '#ebe8f5',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(109, 40, 255, 0.10)',
        card: '0 16px 32px rgba(17, 24, 39, 0.08)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #6d28ff 0%, #b21dff 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
