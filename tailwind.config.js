/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				purple_: "#8553FB",
				black_: "#252F40",
				gray_: "#67748E",
				lightgray_: "#6B7280",
				darkgray_: "#374151",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
