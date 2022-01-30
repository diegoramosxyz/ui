import getStyles from './userStyles'

export default function buttons(
  options: PluginOptions,
  theme: Helpers['theme'],
  addBase: Helpers['addBase'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { buttons, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userButtonBaseStyles = getStyles(theme, buttons?.baseStyles)

  // BASE BUTTON STYLES
  const buttonBaseStyles: { [x: string]: any } = {
    width: '100%',
    padding: `${theme(`spacing[2]`)} ${theme(`spacing[4]`)}`,
    borderRadius: theme(`borderRadius[DEFAULT]`),
    fontWeight: theme(`fontWeight[medium]`),
    textTransform: 'uppercase',
    userSelect: 'none',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&:disabled': {
      opacity: '80%',
      cursor: 'not-allowed',
    },
    transitionProperty: theme(`transitionProperty[all]`),
    transitionDuration: theme(`transitionDuration[200]`),
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    // For button with icons
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme(`spacing[2]`),
    ...userGlobalStyles,
    ...userButtonBaseStyles,
  }

  if (buttons?.animate) {
    addBase({
      '@keyframes push': {
        from: {
          transform: 'translateY(0%)',
        },

        to: {
          transform: 'translateY(5%)',
        },
      },
    })

    buttonBaseStyles['&:active'] = {
      animation: 'push 0.09s ease-in-out',
    }
  }

  colors.forEach((color) => {
    components[`.btn-${color}-fill`] = {
      ...buttonBaseStyles,
      backgroundColor: theme(`colors.${color}[100]`),
      color: theme(`colors.${color}[900]`),
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[50]`),
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[600]`),
        backgroundColor: theme(`colors.neutral[100]`),
      },
    }

    components[`.btn-${color}-fill-dark`] = {
      ...buttonBaseStyles,
      backgroundColor: theme(`colors.${color}[900]`),
      color: theme(`colors.${color}[50]`),
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[800]`),
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[500]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[50]`),
        backgroundColor: theme(`colors.neutral[600]`),
      },
    }

    components[`.btn-${color}-outline`] = {
      ...buttonBaseStyles,
      borderWidth: theme(`borderWidth[2]`),
      borderColor: theme(`colors.${color}[200]`),
      color: theme(`colors.${color}[900]`),
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[50]`),
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[600]`),
        borderColor: theme(`colors.neutral[200]`),
      },
    }

    components[`.btn-${color}-outline-dark`] = {
      ...buttonBaseStyles,
      borderWidth: theme(`borderWidth[2]`),
      borderColor: theme(`colors.${color}[900]`),
      color: theme(`colors.${color}[50]`),
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[900]`),
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[500]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[50]`),
        borderColor: theme(`colors.neutral[600]`),
      },
    }

    components[`.btn-${color}-ghost`] = {
      ...buttonBaseStyles,
      color: theme(`colors.${color}[900]`),
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[50]`),
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[600]`),
      },
    }

    components[`.btn-${color}-ghost-dark`] = {
      ...buttonBaseStyles,
      color: theme(`colors.${color}[50]`),
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[900]`),
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[500]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[50]`),
        backgroundColor: theme(`colors.nuetral[900]`),
      },
    }
  })

  return components
}
