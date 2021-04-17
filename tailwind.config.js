module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './public/**/*.{js,jsx,ts,tsx,vue}'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Inter Regular", "sans-serif"],
      body: ["Inter Regular", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
 plugins: [
  require('@tailwindcss/typography')
],
}
