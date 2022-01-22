export default function buttons(
  buttons: PluginOptions['buttons'],
  theme: Helpers['theme'],
  addBase: Helpers['addBase']
) {
  if (!buttons) return

  const components: { [x: string]: {} } = {}

  // BASE BUTTON STYLES
  const buttonBaseStyles: { [x: string]: any } = {
    padding: `${theme(`spacing[2]`)} ${theme(`spacing[4]`)}`,
    borderRadius: theme(`borderRadius[md]`),
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
    gap: theme(`spacing[2]`),
  }

  if (buttons.animate) {
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

  // If there are colors, append variants, eg: btn-blue, btn-red
  if (
    buttons.colors?.length > 0 &&
    buttons.styles?.length > 0 &&
    buttons.themes?.length > 0
  ) {
    buttons.colors.forEach((color) => {
      // ------------ FILL ------------
      if (buttons.styles.includes('fill')) {
        // ------------ LIGHT ------------
        if (buttons.themes.includes('light')) {
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
        }
        // ------------ DARK ------------
        if (buttons.themes.includes('dark')) {
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
        }
      }

      // ------------ OUTLINE ------------
      if (buttons.styles.includes('outline')) {
        // ------------ LIGHT ------------
        if (buttons.themes.includes('light')) {
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
        }
        // ------------ DARK ------------
        if (buttons.themes.includes('dark')) {
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
        }
      }

      // ------------ GHOST ------------
      if (buttons.styles.includes('ghost')) {
        // ------------ LIGHT ------------
        if (buttons.themes.includes('light')) {
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
        }
        // ------------ DARK ------------
        if (buttons.themes.includes('dark')) {
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
        }
      }
    })
  }

  return components
}
