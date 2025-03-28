/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(215, 110, 110) 40%, rgb(155, 81, 224) 100%)',
        'custom-gradient': 'linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(65, 0, 0) 39%, rgb(155, 81, 224) 100%)',
      },
      boxShadow: {
        'even': '0 0 10px rgba(0, 0, 0, 0.47)',
        'odd': '0 0 10px rgba(0, 0, 0, 0.22)',
      },

      /** ✅ Add More Animations */
      keyframes: {
        // Slide Animations
        slideLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        // Fade Animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },

        // Zoom Animations
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },

        // Rotate Animation
        rotateIn: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },

        // Bounce Animation
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      animation: {
        // Slide Animations
        slideLeft: "slideLeft 1s ease-out",
        slideRight: "slideRight 1s ease-out",
        slideUp: "slideUp 1s ease-out",
        slideDown: "slideDown 1s ease-out",

        // Fade Animations
        fadeIn: "fadeIn 1s ease-in",
        fadeOut: "fadeOut 1s ease-out",

        // Zoom Animations
        zoomIn: "zoomIn 0.8s ease-in-out",
        zoomOut: "zoomOut 0.8s ease-in-out",

        // Rotate Animation
        rotateIn: "rotateIn 1s ease-out",

        // Bounce Animation
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
