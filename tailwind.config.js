/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chipori: {
          red: '#DC2626',        // Bright red like in the reference
          darkRed: '#B91C1C',    // Darker red for hover states
          white: '#FFFFFF',      // Pure white
          cream: '#FFF8F0',      // Off-white cream
          gold: '#DAA520',       // Gold accents
          charcoal: '#000000',   // Pure black text like reference
          lightGray: '#F5F5F5',  // Light gray backgrounds
          light: '#E0E0E0',      // Light borders
          border: '#E0E0E0',     // Light borders
          headerRed: '#DC2626',  // Bright red for headers
          contentWhite: '#FFFFFF' // White for content areas
        }
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
        'noto-kr': ['Noto Serif KR', 'serif'],
        'chipori-title': ['Inter', 'system-ui', 'sans-serif'], // Bold rounded font like reference
        'chipori-bold': ['Inter', 'system-ui', 'sans-serif'], // Bold version
        'chipori-text': ['Inter', 'system-ui', 'sans-serif']  // Regular text
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