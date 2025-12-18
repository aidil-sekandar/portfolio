/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				SourceCodePro: ["SourceCodePro", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
			},
			colors: {
				bodyColor: "#0D0E11",
				cardColor: "#232429",
				textContent: "#9496A1",
				themePrimary: "#64FFDA"
			},
		},
	},
	plugins: [],
};