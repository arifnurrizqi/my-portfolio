/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"], // atau './**/*.html' tergantung struktur
  theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#2563EB',
                dark: '#1D4ED8',
                light: '#3B82F6'
            },
            secondary: {
                DEFAULT: '#10B981',
                dark: '#059669',
                light: '#34D399'
            },
            accent: {
                DEFAULT: '#F59E0B',
                dark: '#D97706',
                light: '#FBBF24'
            },
            dark: {
                DEFAULT: '#1F2937',
                light: '#374151',
                lighter: '#4B5563'
            },
            light: {
                DEFAULT: '#F9FAFB',
                dark: '#F3F4F6'
            }
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        }
    }
  },
  plugins: [],
}

