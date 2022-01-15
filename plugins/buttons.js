const plugin = require('tailwindcss/plugin')

const buttonStyles = {
  '.btn': {
    padding: '.5rem 1rem',
    borderRadius: '.25rem',
    fontWeight: '600',
  },
}

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addComponents, theme }) {
      const { colors } = options

      // If there are colors, add variants, eg: btn-blue, btn-red
      if (colors) {
        colors.forEach(
          (color) =>
            (buttonStyles[`.btn-${color}`] = {
              backgroundColor: theme(`colors.${color}[100]`),
              color: theme(`colors.${color}[900]`),
              '&:hover': {
                backgroundColor: theme(`colors.${color}[300]`),
              },
            })
        )
      }

      addComponents(buttonStyles)
    }
  },
  function (options) {
    return {
      theme: {
        buttons: buttonStyles,
      },
    }
  }
)
