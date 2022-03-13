module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern:
        /btn-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(fill|outline|ghost)/,
    },
    {
      pattern:
        /btn-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(fill|outline|ghost)-dark/,
    },
    {
      pattern:
        /input-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(outline|underline)/,
    },
    {
      pattern:
        /input-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(outline|underline)-dark/,
    },
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
    },
  },
  plugins: [
    require('@ramosdiego/ui')({
      // Add custom global base styles using theme
      // globalStyles: ({ theme }) => ({
      //   fontWeight: theme('fontWeight[bold]'),
      //   fontSize: theme('fontSize[xl]'),
      // }),

      // Add custom global base styles
      // globalStyles: {
      //   textTransform: 'normal-case',
      //   fontWeight: 800,
      //   borderRadius: '10px',
      // },

      buttons: {
        animate: false,
        // // spreadRadius: '6px',
        // preset: 'playful',
        // Add custom button base styles using theme
        // baseStyles: ({ theme }) => ({
        //   fontWeight: theme('fontWeight[light]'),
        //   fontSize: theme('fontSize[sm]'),
        // }),

        // Add custom button base styles
        // baseStyles: {
        //   textTransform: 'normal-case',
        //   fontWeight: 800,
        //   borderRadius: '10px',
        // },
      },
    }),

    // require('../dist/index.js')({
    //   buttons: {
    //     animate: true,
    //     // spreadRadius: '6px',
    //     preset: 'playful',
    //     // Add custom button base styles
    //     baseStyles: {
    //       // textTransform: 'capitalize',
    //       // padding: '20px 60px',
    //       // fontWeight: 800,
    //       // borderRadius: '10px',
    //     },
    //   },
    //   inputs: {
    //     // Add custom button base styles
    //     // baseStyles: {
    //     //   textTransform: 'capitalize',
    //     //   padding: '15px 30px',
    //     //   fontWeight: 500,
    //     //   borderRadius: '0px',
    //     // },
    //   },
    // }),
  ],
}
