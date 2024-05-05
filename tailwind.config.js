import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
	darkMode: "selector",

	theme: {
		screens: {
			sm: "200px",
			md: "300px",
		},

		extend: {
			colors: {
				primary: {
					solid: colors.indigo[700],
					light: colors.indigo[500],
				},

				accent: colors.blue,
				error: colors.rose,
				success: colors.teal,
				warning: colors.amber,

				surface: colors.zinc,
			},

			borderRadius: {
				button: "5px",
			},

			spacing: {
				tile: "calc(clamp(0.5rem, calc(100vw/5), 4rem) - 9px)",
			},
		},
	},

	// plugins: [require("daisyui")],
};
