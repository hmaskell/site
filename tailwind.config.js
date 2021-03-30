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
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
    layers: ['base', 'utilities']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'floop-img': "url('floops.svg')"
      })

    },
  },
  variants: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [
    hero_icons_plugin
  ],

  theme: {
    boxShadow: {
      '3xl': '0px 0px 15px 10px rgba(183,148,244,0.5)',
      '4xl': '20px 0px 50px -10px #00C2D0, -15px -10px 50px -10px #E7005D, -5px 20px 50px -10px #FFE12E'
    },


    fontFamily: {
      'sans': ['Nunito', defaultTheme.fontFamily.sans]
    }
  }
}


  ;