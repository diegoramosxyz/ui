import plugin from 'tailwindcss/plugin'
import buttons from './buttons'
import inputs from './inputs'
import badges from './badges'

module.exports = plugin.withOptions(
  (options) =>
    ({ addBase, addComponents, theme }) => {
      addComponents({
        ...buttons(options.buttons, theme, addBase),
        ...inputs(options.inputs, theme),
        ...badges(options.badges, theme),
      })
    }
)
