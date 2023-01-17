/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			// Kustomisasi Tailwind
			colors: {
				skcolor: {
					DEFAULT: '#7b99b9',
					dark: '#517dad',
				},
			},
		},
	},
  variants: {
    extend: {
      display: ['group-hover'],
      borderwidth: ['group-hover'],
    },
  },
	plugins: [],
};
