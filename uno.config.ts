import { unoShortCuts, unoTheme } from '@/app/styles'
import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'


export default defineConfig({

  presets: [
    presetWind3(),
    presetAttributify(), // optional: enables attribute-based styling
    presetIcons(),       // optional: adds icon support
  ],
  ...unoTheme,
  ...unoShortCuts

})
