module.exports = {
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'svg-hero': "url('img/bg-pattern-desktop.svg')",
      })
    }
  },
  variants: {},
  plugins: [],
};
