import badges from './badges'
import buttons from './buttons'
import checkbox from './checkbox'
import getColors from './colors'
import inputs from './inputs'
import plugin from 'tailwindcss/plugin'
import radio from './radio'
import toggleSwitch from './toggleSwitch'

module.exports = plugin.withOptions(
  (options) =>
    ({ addBase, addComponents, theme, config }) => {
      const colors = getColors(config)
      if (typeof options !== 'object') options = {}
      addComponents({
        ...badges(options, theme, colors),
        ...buttons(options, theme, addBase, colors),
        ...checkbox(options, theme, colors),
        ...inputs(options, theme, colors),
        ...radio(options, theme, colors),
        ...toggleSwitch(options, theme, colors),
      })
    }
)
