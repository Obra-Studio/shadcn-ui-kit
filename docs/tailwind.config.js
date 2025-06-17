// tailwind.config.js
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Geist', 'Inter', 'sans-serif'],
		},
		screens: {
		  'desktop': '960px',
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }