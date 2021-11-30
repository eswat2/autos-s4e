const plugin = require('tailwindcss/plugin');
const tw_clrs = require('proto-tailwindcss-clrs');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: false, // or 'media' or 'class'
  purge: ['src/**/*.svelte'],
  theme: {
    extend: {
      spacing: {
        '24px': '24px',
        '76p5': '19.125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    tw_clrs({
      map: {
        bada55: '#bada55',
        slate: '#708090',
        slate4: '#4e5964',
        white: '#ffffff',
      },
      alphas: [50],
    }),
    plugin(function ({ addUtilities, theme, config }) {
      const themeColors = theme('colors');
      const individualColoredBorders = Object.keys(themeColors).map(
        colorName => ({
          [`.border-xbb-${colorName}`]: {
            borderBottom: `1px solid ${themeColors[colorName]} !important`,
          },
          [`.border-xbt-${colorName}`]: {
            borderTop: `1px solid ${themeColors[colorName]} !important`,
          },
          [`.border-xbl-${colorName}`]: {
            borderLeft: `1px solid ${themeColors[colorName]} !important`,
          },
          [`.border-xbr-${colorName}`]: {
            borderRight: `1px solid ${themeColors[colorName]} !important`,
          },
        }),
      );

      addUtilities(individualColoredBorders);
    }),
  ],
}
