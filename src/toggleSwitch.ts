import getStyles from './userStyles'
import svgToDataUri from 'mini-svg-data-uri'

export default function toggleSwitch(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { toggleSwitch, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userToggleSwitchBaseStyles = getStyles(theme, toggleSwitch?.baseStyles)

  let spreadRadius = toggleSwitch?.spreadRadius || '2px'

  const circleIcon = `url("${svgToDataUri(
    `<svg viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10"/></svg>`
  )}")`

  const toggleSwitchBaseStyles = {
    appearance: 'none',
    backgroundImage: circleIcon,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80% 80%',
    borderRadius: '9999px',
    cursor: 'pointer',
    display: 'inline-block',
    height: '24px',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    padding: '0px',
    transitionDuration: theme(`transitionDuration[200]`),
    transitionProperty: theme(`transitionProperty[all]`),
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    userSelect: 'none',
    width: '40px',
    ...userGlobalStyles,
    ...userToggleSwitchBaseStyles,
  }

  colors.forEach((color) => {
    components[`.toggle-switch-${color}`] = {
      ...toggleSwitchBaseStyles,
      '&[data-state="checked"]': {
        backgroundColor: theme(`colors.${color}[800]`),
        backgroundPosition: '150% 60%',
      },
      '&[data-state="unchecked"]': {
        backgroundColor: theme(`colors.neutral[400]`),
        backgroundPosition: '-50% 60%',
      },
      '&:focus': {
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        opacity: '75%',
        cursor: 'not-allowed',
        backgroundColor: theme(`colors.neutral[400]`),
      },
    }
  })

  return components
}
