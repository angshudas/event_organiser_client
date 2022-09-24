/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tab': '481px',
      // => @media (min-width: 640px) { ... }

      'lap': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
/*
  320px — 480px: Mobile devices.
481px — 768px: iPads, Tablets.
769px — 1024px: Small screens, laptops.
1025px — 1200px: Desktops, large screens.
1201px and more — Extra large screens, TV.
*/