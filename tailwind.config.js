/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chipori: {
          red: '#8B0000',        // Darker red like in the image
          darkRed: '#6B0000',    // Even darker red for backgrounds
          white: '#FFFFFF',      // Pure white
          cream: '#FFF8F0',      // Off-white cream
          gold: '#DAA520',       // Gold accents
          charcoal: '#2C2C2C',   // Dark text
          lightGray: '#F5F5F5',  // Light gray backgrounds
          light: '#E0E0E0',      // Light borders
          border: '#E0E0E0'      // Light borders
        }
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
        'noto-kr': ['Noto Serif KR', 'serif'],
        'ramen-title': ['Montserrat', 'Open Sans', 'system-ui', 'sans-serif'],
        'ramen-bold': ['Montserrat Bold', 'Open Sans ExtraBold', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};