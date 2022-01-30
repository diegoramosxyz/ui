import getStyles from './userStyles'

export default function buttons(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  addBase: Helpers['addBase'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { buttons, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userButtonBaseStyles = getStyles(theme, buttons?.baseStyles)

  const presets = {
    elegant: {
      borderRadius: theme(`borderRadius[none]`),
      fontWeight: theme(`fontWeight[light]`),
      textTransform: 'uppercase',
      borderWidth: '1px',
    },
    playful: {
      borderRadius: theme(`borderRadius[full]`),
      fontWeight: theme(`fontWeight[semibold]`),
      textTransform: 'normal-case',
    },
  }

  let preset = {
    borderRadius: theme(`borderRadius[DEFAULT]`),
    fontWeight: theme(`fontWeight[medium]`),
    textTransform: 'uppercase',
  }

  if (buttons?.preset && presets[buttons?.preset]) {
    preset = presets[buttons?.preset]
  }

  // BASE BUTTON STYLES
  const buttonBaseStyles: { [x: string]: any } = {
    padding: `${theme(`spacing[2]`)} ${theme(`spacing[4]`)}`,
    userSelect: 'none',
    outline: '2px solid transparent',
    width: '100%',
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
    ...preset,
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
      borderWidth: '0px',
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
      borderWidth: '0px',
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
      borderWidth: buttonBaseStyles['borderWidth'] || theme(`borderWidth[2]`),
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
      borderWidth: buttonBaseStyles['borderWidth'] || theme(`borderWidth[2]`),
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
      borderWidth: '0px',
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
      borderWidth: '0px',
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