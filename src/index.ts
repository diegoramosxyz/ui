import plugin from 'tailwindcss/plugin'
import buttons from './buttons'
import inputs from './inputs'
import badges from './badges'
import checkbox from './checkbox'
// import toggle from './toggle'
import getColors from './colors'

module.exports = plugin.withOptions(
  (options) =>
    ({ addBase, addComponents, theme, config }) => {
      const colors = getColors(config)
      if (typeof options !== 'object') options = {}
      addComponents({
        ...buttons(options, theme, addBase, colors),
        ...inputs(options, theme, colors),
        // ...toggle(options, theme, colors),
        ...checkbox(options, theme, colors),
        ...badges(options, theme, colors),
      })
    }
)
