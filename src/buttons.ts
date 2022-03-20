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
      borderRadius: '0px',
      fontWeight: 300,
      textTransform: 'uppercase',
    },
    playful: {
      borderRadius: '9999px',
      fontWeight: 600,
      textTransform: 'normal-case',
    },
  }

  let preset = {
    borderRadius: '4px',
    fontWeight: 500,
    textTransform: 'none',
  }

  if (buttons?.preset && presets[buttons?.preset]) {
    preset = presets[buttons?.preset]
  }

  let spreadRadius = buttons?.spreadRadius || '2px'

  // BASE BUTTON STYLES
  const buttonBaseStyles: { [x: string]: any } = {
    alignItems: 'center',
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    padding: '12px 24px',
    transitionDuration: theme(`transitionDuration[200]`),
    transitionProperty: theme(`transitionProperty[all]`),
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    userSelect: 'none',
    '&:disabled': {
      opacity: '75%',
      cursor: 'not-allowed',
    },
    ...preset,
    ...userGlobalStyles,
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
        backgroundColor: theme(`colors.${color}[50]`),
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[600]`),
        backgroundColor: theme(`colors.neutral[100]`),
      },
      ...userButtonBaseStyles,
    }

    components[`.btn-${color}-fill-dark`] = {
      ...buttonBaseStyles,
      backgroundColor: theme(`colors.${color}[900]`),
      color: theme(`colors.${color}[50]`),
      '&:not(:disabled):hover': {
        color: theme(`colors.white`),
        backgroundColor: theme(`colors.${color}[800]`),
      },
      '&:focus': {
        color: theme(`colors.white`),
        backgroundColor: theme(`colors.${color}[800]`),
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[500]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[50]`),
        backgroundColor: theme(`colors.neutral[600]`),
      },
      ...userButtonBaseStyles,
    }

    components[`.btn-${color}-outline`] = {
      ...buttonBaseStyles,
      boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[200]`)}`,
      color: 'inherit',
      '&:not(:disabled):hover': {
        color: theme(`colors.${color}[900]`),
        backgroundColor: theme(`colors.${color}[50]`),
      },
      '&:focus': {
        color: theme(`colors.${color}[900]`),
        backgroundColor: theme(`colors.${color}[50]`),
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.neutral[200]`)}`,
      },
      ...userButtonBaseStyles,
    }

    components[`.btn-${color}-outline-dark`] = {
      ...buttonBaseStyles,
      boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[800]`)}`,
      color: 'inherit',
      '&:not(:disabled):hover': {
        color: theme(`colors.white`),
        backgroundColor: theme(`colors.${color}[800]`),
      },
      '&:focus': {
        color: theme(`colors.white`),
        backgroundColor: theme(`colors.${color}[800]`),
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[500]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.neutral[600]`)}`,
      },
      ...userButtonBaseStyles,
    }

    components[`.btn-${color}-ghost`] = {
      ...buttonBaseStyles,
      color: 'inherit',
      '&:not(:disabled):hover': {
        color: theme(`colors.${color}[900]`),
        backgroundColor: theme(`colors.${color}[50]`),
      },
      '&:focus': {
        color: theme(`colors.${color}[900]`),
        backgroundColor: theme(`colors.${color}[50]`),
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
      },
      ...userButtonBaseStyles,
    }

    components[`.btn-${color}-ghost-dark`] = {
      ...buttonBaseStyles,
      color: 'inherit',
      '&:not(:disabled):hover': {
        color: theme(`colors.white`),
        backgroundColor: theme(`colors.${color}[800]`),
      },
      '&:focus': {
        color: theme(`colors.white`),
        backgroundColor: theme(`colors.${color}[800]`),
        boxShadow: `0 0 0 ${spreadRadius} ${theme(`colors.${color}[500]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        backgroundColor: theme(`colors.nuetral[900]`),
      },
      ...userButtonBaseStyles,
    }
  })

  return components
}
