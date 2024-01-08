module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
  theme: {
    extend: {},
  },
  plugins: [],
};