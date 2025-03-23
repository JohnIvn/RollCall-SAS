export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {}
	  },
	corePlugins: {
	  preflight: false,
	},
	variants: {
	  extend: {
		scrollBehavior: ["responsive"],
	  },
	},
  };