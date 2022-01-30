import plugin from 'tailwindcss/plugin'
import buttons from './buttons'
import inputs from './inputs'
import badges from './badges'
import getColors from './colors'

module.exports = plugin.withOptions(
  (options) =>
    ({ addBase, addComponents, theme, config }) => {
      const colors = getColors(config)
      addComponents({
        ...buttons(options.buttons, theme, addBase, colors),
        ...inputs(options.inputs, theme, colors),
        ...badges(options.badges, theme, colors),
      })
    }
)
