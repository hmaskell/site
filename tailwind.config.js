const defaultTheme = require('tailwindcss/defaultTheme')

var hero_icons_plugin = require("tailwind-heropatterns")({
  // as per tailwind docs you can pass variants
  variants: [],

  // the list of patterns you want to generate a class for
  // the names must be in kebab-case
  // an empty array will generate all 87 patterns
  patterns: ["wiggle", "plus", "rain", "hexagons", "volcano-lamp", "bank-note", "aztec", "endless-clouds"],

  // The foreground colors of the pattern
  colors: {
    default: "#D6BCFA",
  },

  // The foreground opacity
  opacity: {
    default: ".05",
  }
});

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    hero_icons_plugin
  ],

  theme: {
    fontFamily: {
      'serif': ['Fredoka One', defaultTheme.fontFamily.serif],
      'sans': ['Open Sans', defaultTheme.fontFamily.sans]
    }
  }
}


  ;