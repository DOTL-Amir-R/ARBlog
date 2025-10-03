import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'


export default defineConfig({

  presets: [
    presetWind3(),
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
      'btn': 'px-8 py-2 rounded bg-brand hover:bg-brand-light',
      'card': 'p-4',
  },
})
