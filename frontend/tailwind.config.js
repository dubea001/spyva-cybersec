/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1536px',
    },
    colors: {
      primary: "#0d3fcc",
      "primary-content": "#dbe4fd",
      "primary-dark": "#0a309c",
      "primary-light": "#1b53f0",

      secondary: "#cc0d0f",
      "secondary-content": "#fddbdc",
      "secondary-dark": "#9c0a0b",
      "secondary-light": "#f01b1e",

      background: "#efeff1",
      foreground: "#fbfbfb",
      border: "#dddee2",

      copy: "#232529",
      "copy-light": "#5e626e",
      "copy-lighter": "#848895",

      "darkmode-background": "#18191b",
      "darkmode-foreground": "#232529",
      "darkmode-border": "#3b3d45",

      "darkmode-copy": "#fbfbfb",
      "darkmode-copy-light": "#d6d7dc",
      "darkmode-copy-lighter": "#9fa3ac",

      success: "#0dcc0d",
      warning: "#cccc0d",
      error: "#cc0d0d",

      "success-content": "#dbfddb",
      "warning-content": "#000000",
      "error-content": "#fddbdb"
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem', // 2px
      default: '0.25rem', // 4px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      '2xl': '1rem', // 16px
      '3xl': '1.5rem', // 24px
      full: '9999px',
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '4rem',     // 64px
      '7xl': '5rem',     // 80px
      '8xl': '6rem',     // 96px
      '9xl': '7rem',     // 112px
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontFamily: {
      DM: '"DM Mono", monospace',
      Lato: '"Lato", sans-serif',
      Raleway: '"Raleway", sans-serif'
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
