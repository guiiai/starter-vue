import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      scale: 1.2, // size: 1.2 rem
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'min-width': '1.2rem',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        title: {
          name: 'system-ui',
          provider: 'none',
        },
        stylish: 'Caveat',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),

  shortcuts: {
    'bg-dot-grid': 'bg-dot-grid-light dark:bg-dot-grid-dark',
    'bg-radius-gradient': 'bg-radius-gradient-light dark:bg-radius-gradient-dark',
  },

  rules: [
    ['bg-dot-grid-light', {
      'background': 'transparent',
      'background-image': 'radial-gradient(rgb(166, 166, 166) 1px, transparent 0)',
      'background-size': '30px 30px',
      'background-position': '22px 22px',
    }],
    ['bg-dot-grid-dark', {
      'background': 'transparent',
      'background-image': 'radial-gradient(rgb(86, 86, 86) 1px, transparent 0)',
      'background-size': '30px 30px',
      'background-position': '22px 22px',
    }],
    ['bg-radius-gradient-light', {
      background: 'radial-gradient(circle, #ffffff00 30%, #ffffffe7)',
    }],
    ['bg-radius-gradient-dark', {
      background: 'radial-gradient(circle, #00000000 30%, #222222)',
    }],
  ],

  theme: {
    colors: {
      brand: '#00DC82',
      primary: '#099e61',
    },
  },
})
