import { defineConfig, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    // presetUno(),
    presetAttributify(), // optional: enables attribute-based styling
    presetIcons(),       // optional: adds icon support
  ],
  theme: {
    colors: {
      brand: {
        DEFAULT: '#8b5cf6',
        dark: '#5b21b6',
        light: '#b91c1c',
        // red: '#b91c1c',
      },
      accent: '#ff6b6b',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded bg-brand text-white hover:bg-brand-dark',
    'card': 'p-6 shadow-lg rounded bg-white',
  },
})
