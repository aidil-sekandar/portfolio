/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				SourceCodePro: ["SourceCodePro", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
			},
			colors: {
				bodyColor: "#0A192F",
				cardColor: "#112240",
				textContent: "#8892B0",
				themePrimary: "#64FFDA"
			},
		},
	},
	plugins: [],
};