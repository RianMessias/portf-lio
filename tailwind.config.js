/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#87CEFA',
      },
    },
  },
  variants: {},
  plugins: [],
}

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adicione os caminhos para os seus arquivos de origem
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        lightskyblue: '#87CEFA',
      },
    },
  },
  plugins: [],
}
