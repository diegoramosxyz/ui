import getStyles from './userStyles'
import svgToDataUri from 'mini-svg-data-uri'

export default function checkbox(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { checkbox, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userCheckboxBaseStyles = getStyles(theme, checkbox?.baseStyles)

  const blackCheckIcon = `url("${svgToDataUri(
    `<svg viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
  )}")`

  const whiteCheckIcon = `url("${svgToDataUri(
    `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
  )}")`

  let spreadRadius = checkbox?.spreadRadius || '2px'

  const checkboxBaseStyles = {
    appearance: 'none',
    backgroundColor: 'transparent',
    backgroundOrigin: 'border-box',
    borderRadius: '4px',
    borderWidth: '2px',
    display: 'inline-block',
    flexShrink: '0',
    height: '1.2rem',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    padding: '0',
    transitionDuration: theme(`transitionDuration[200]`),
    transitionProperty: theme(`transitionProperty[all]`),
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    userSelect: 'none',
    verticalAlign: 'middle',
    width: '1.2rem',
    '&:disabled': {
      opacity: '75%',
      cursor: 'not-allowed',
    },
    '&:checked': {
      backgroundImage: `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
      )}")`,
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    ...userGlobalStyles,
    ...userCheckboxBaseStyles,
  }

  colors.forEach((color) => {
    components[`.checkbox-${color}`] = {
      ...checkboxBaseStyles,
      borderColor: theme(`colors.neutral[500]`),
      color: theme(`colors.${color}[100]`),
      '&:focus': {
        borderColor: 'transparent',
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...checkboxBaseStyles['&:disabled'],
        color: theme(`colors.neutral[300]`),
      },
      '&:checked': {
        ...checkboxBaseStyles['&:checked'],
        backgroundImage: blackCheckIcon,
      },
      '&:indeterminate': {
        ...checkboxBaseStyles['&:checked'],
        backgroundImage: blackCheckIcon,
      },
    }

    components[`.checkbox-${color}-dark`] = {
      ...checkboxBaseStyles,
      borderColor: theme(`colors.neutral[400]`),
      color: theme(`colors.${color}[800]`),
      '&:focus': {
        borderColor: 'transparent',
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[500]`)}`,
      },
      '&:disabled': {
        ...checkboxBaseStyles['&:disabled'],
        color: theme(`colors.neutral[700]`),
      },
      '&:checked': {
        ...checkboxBaseStyles['&:checked'],
        backgroundImage: whiteCheckIcon,
      },
      '&:indeterminate': {
        ...checkboxBaseStyles['&:checked'],
        backgroundImage: whiteCheckIcon,
      },
    }
  })

  return components
}
