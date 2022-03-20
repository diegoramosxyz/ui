import getStyles from './userStyles'
import svgToDataUri from 'mini-svg-data-uri'

export default function radio(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { radio, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userRadioBaseStyles = getStyles(theme, radio?.baseStyles)

  let spreadRadius = radio?.spreadRadius || '2px'

  const circleIcon = `url("${svgToDataUri(
    `<svg viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10"/></svg>`
  )}")`

  const radioBaseStyles = {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: '9999px',
    borderWidth: '2px',
    cursor: 'pointer',
    display: 'flex',
    height: '20px',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    padding: '0px',
    transitionDuration: '200ms',
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, transform, fill, stroke, opacity, box-shadow, filter, backdrop-filter',
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    userSelect: 'none',
    width: '20px',
    ...userGlobalStyles,
    ...userRadioBaseStyles,
  }

  colors.forEach((color) => {
    components[`.radio-${color}`] = {
      ...radioBaseStyles,
      borderColor: theme(`colors.neutral[400]`),
      '&:checked': {
        borderColor: 'transparent',
        backgroundColor: theme(`colors.${color}[800]`),
        backgroundImage: circleIcon,
        backgroundSize: '60% 60%',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
      },
      '&:focus': {
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        opacity: '75%',
        cursor: 'not-allowed',
        backgroundColor: theme(`colors.neutral[400]`),
      },
      '&:not(:checked):disabled': {
        backgroundColor: 'transparent',
      },
    }
  })

  return components
}
