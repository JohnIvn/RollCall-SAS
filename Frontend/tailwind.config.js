export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			screens: {
				'sm': '1360px',  // Change sm to 500px
				'md': '1200px',  // Change md to 750px
				'lg': '1900px', // Change lg to 1100px
			  },
		}
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