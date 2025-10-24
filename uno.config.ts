import { defineConfig, presetAttributify, presetIcons, presetWind3, presetTagify } from "unocss";
export default defineConfig({
	  content: {
    pipeline: {
      include: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    },
  },
  presets: [
		presetTagify(),
    presetWind3(),
    presetAttributify(), // optional: enables attribute-based styling
    presetIcons(),       // optional: adds icon support
  ],
   theme: {
    colors: {
 		 brand: {
   			base: "#FFFFFF",
    		secondry: "#98FAEC",
  			primary: "#12F7D6",
   		 	surface: "#43454D",
   		 	canvas: "#1A1E23",
   		 	canvasMuted: "#292F36",
  		},
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
  },
 shortcuts: {
    "btn": "m-5 px-6 py-2 rounded bg-brand-primary hover:bg-brand-surface hover:text-brand-primary transition transition-1000 transition-all",
    "card": "p-4",
  },
});
