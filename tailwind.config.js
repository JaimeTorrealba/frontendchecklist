module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        darker: '#090b48ff',
        dark: '#0e116cff',
        main: '#111482ff',
        light: '#171db5ff',
        lighter: '#1c22d9ff',
      },
      success: {
        darker: '#1c734fff',
        dark: '#249465ff',
        main: '#2cb67dff',
        light: '#3acf91ff',
        lighter: '#5bd7a3ff',
      },
      secondary: {
        darker: '#521FEA',
        dark: '#6F44EE',
        main: '#7F5AF0',
        light: '#766EF4',
        lighter: '#C5B4F8',
      },
      info: {
        darker: '#4e81f9ff',
        dark: '#759dfaff',
        main: '#98b6fbff',
        light: '#c4d5fdff',
        lighter: '#ebf1feff',
      },
      warning: {
        darker: '#b8b800ff',
        dark: '#e0e000ff',
        main: '#ffff00ff',
        light: '#ffff33ff',
        lighter: '#ffff5cff',
      },
      error: {
        darker: '#ff0a0aff',
        dark: '#ff3333ff',
        main: '#ff4b4bff',
        light: '#ff8585ff',
        lighter: '#ffadadff',
      },
      main: {
        lighter: '#E0E0E0',
        light: '#F2F2F2',
        main: '#BDBDBD',
        dark: '#828282',
        darker: '#4F4F4F',
        obscure: '#333333',
      },
      base: {
        white: '#FFF',
      },
    },
    fontFamily: {
      open: ['Open Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
