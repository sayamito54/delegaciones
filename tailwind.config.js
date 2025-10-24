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
        // Colores institucionales Gov.co
        'govco': {
          'blue-dark': '#004884',
          'marine': '#3366CC',
          'blue-light': '#c9e2ff',
          'black': '#000000',
          'tundora': '#4B4B4B',
          'dim-gray': '#737373',
          'silver': '#BABABA',
          'concrete': '#F2F2F2',
          'hawkes-blue': '#F6F8F9',
          'white': '#FFFFFF',
          'success': '#068460',
          'warning': '#FFAB00',
          'error': '#A80521',
          'info': '#3366CC',
          'radical-red': '#F42F63',
          'shiraz': '#A80521',
          'orange': '#F3561F',
          'gold': '#FFAB00',
          'elf-green': '#068460',
          'dodger-blue': '#3772FF',
          'blue-capri': '#81ABFF',
          'blue-denim': '#4573D0',
          'blue-lake': '#5B8BFF',
          'blue-quilt': '#9DBEFF',
          'blue-ocean': '#5881D5',
          'blue-marlin': '#4A7EFF',
          'orange-v2': '#FF6C00',
          'green': '#069169',
          'red-flag': '#D31F3F',
          'yellow': '#FAD118',
          'gray': '#f1f1f1',
        },
        // Mantener colores existentes como fallback
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        // Fuentes institucionales Gov.co
        'govco-title': ['Montserrat-SemiBold', 'system-ui', 'sans-serif'],
        'govco-subtitle': ['Montserrat-Medium', 'system-ui', 'sans-serif'],
        'govco-body': ['WorkSans-Regular', 'system-ui', 'sans-serif'],
        'govco-body-medium': ['WorkSans-Medium', 'system-ui', 'sans-serif'],
        'govco-body-bold': ['WorkSans-Bold', 'system-ui', 'sans-serif'],
        'govco-icons': ['govco-font', 'system-ui', 'sans-serif'],
        // Mantener fuente existente como fallback
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Tamaños de fuente institucionales
        'govco-h1': ['40px', { lineHeight: '3rem' }],
        'govco-h2': ['32px', { lineHeight: '2.875rem' }],
        'govco-h3': ['24px', { lineHeight: '2.25rem' }],
        'govco-h4': ['20px', { lineHeight: '1.875rem' }],
        'govco-h5': ['18px', { lineHeight: '1.688rem' }],
        'govco-h6': ['16px', { lineHeight: '1.5rem' }],
        'govco-text1': ['20px', { lineHeight: '1.875rem' }],
        'govco-text2': ['16px', { lineHeight: '1.5rem' }],
        'govco-text3': ['14px', { lineHeight: '1.313rem' }],
        'govco-link': ['15px', { lineHeight: '1.375rem' }],
      },
      borderRadius: {
        'govco': '1.563rem', // 25px - Radio estándar de botones Gov.co
      },
    },
  },
  plugins: [],
}

