const plugin = require('tailwindcss/plugin')

const buttonStyles = {}
const inputStyles = {}

module.exports = plugin.withOptions(function (options) {
  return function ({ addBase, addComponents, theme }) {
    const { buttons, inputs } = options

    // BASE INPUT STYLES
    if (inputs) {
      const inputBaseStyles = {
        padding: `${theme(`spacing[1]`)} ${theme(`spacing[2]`)}`,
        backgroundColor: 'transparent',
        '&:autofill': {
          backgroundColor: 'transparent',
        },
        outline: '2px solid transparent',
        outlineOffset: '2px',
        '&:disabled': {
          opacity: '80%',
          cursor: 'not-allowed',
        },
        transitionProperty: theme(`transitionProperty[all]`),
        transitionDuration: theme(`transitionDuration[200]`),
        transitionTimingFunction: theme(
          `transitionTimingFunction['ease-in-out']`
        ),
      }

      // ------------ OUTLINE ------------
      if (inputs.styles.includes('outline')) {
        const inputOutlineStyles = {
          ...inputBaseStyles,
          borderWidth: theme(`borderWidth[2]`),
          borderRadius: theme(`borderRadius[md]`),
        }

        // ------------ LIGHT ------------
        if (inputs.themes.includes('light')) {
          inputs.colors.forEach((color) => {
            inputStyles[`.input-${color}-outline`] = {
              ...inputOutlineStyles,
              borderColor: theme(`colors.${color}[500]`),
              caretColor: theme(`colors.${color}[600]`),
              '&:disabled': {
                ...inputOutlineStyles['&:disabled'],
                borderColor: theme(`colors.neutral[200]`),
              },
              '&:focus': {
                borderColor: theme(`colors.${color}[700]`),
                boxShadow: `0 0 0 2px ${theme(`colors.${color}[300]`)}`,
              },
            }
          })
        }

        // ------------ DARK ------------
        if (inputs.themes.includes('dark')) {
          inputs.colors.forEach((color) => {
            inputStyles[`.input-${color}-outline-dark`] = {
              ...inputOutlineStyles,
              borderColor: theme(`colors.${color}[700]`),
              caretColor: theme(`colors.${color}[300]`),
              '&:disabled': {
                ...inputOutlineStyles['&:disabled'],
                borderColor: theme(`colors.neutral[600]`),
              },
              '&:focus': {
                borderColor: theme(`colors.${color}[500]`),
                boxShadow: `0 0 0 2px ${theme(`colors.${color}[700]`)}`,
              },
              '&::-webkit-calendar-picker-indicator': {
                filter: 'invert(1)',
              },
            }
          })
        }
      }

      // ------------ UNDERLINE ------------
      if (inputs.styles.includes('underline')) {
        const inputUnderlineStyles = {
          ...inputBaseStyles,
          borderBottomWidth: theme(`borderWidth[2]`),
        }

        // ------------ LIGHT ------------
        if (inputs.themes.includes('light')) {
          inputs.colors.forEach((color) => {
            inputStyles[`.input-${color}-underline`] = {
              ...inputUnderlineStyles,
              borderColor: theme(`colors.${color}[500]`),
              caretColor: theme(`colors.${color}[600]`),
              '&:disabled': {
                ...inputUnderlineStyles['&:disabled'],
                borderColor: theme(`colors.neutral[200]`),
              },
              '&:focus': {
                borderColor: theme(`colors.${color}[700]`),
              },
            }
          })
        }

        // ------------ DARK ------------
        if (inputs.themes.includes('dark')) {
          inputs.colors.forEach((color) => {
            inputStyles[`.input-${color}-underline-dark`] = {
              ...inputUnderlineStyles,
              borderColor: theme(`colors.${color}[700]`),
              caretColor: theme(`colors.${color}[300]`),
              '&:disabled': {
                ...inputUnderlineStyles['&:disabled'],
                borderColor: theme(`colors.neutral[600]`),
              },
              '&:focus': {
                borderColor: theme(`colors.${color}[500]`),
              },
              '&::-webkit-calendar-picker-indicator': {
                filter: 'invert(1)',
              },
            }
          })
        }
      }
    }

    if (buttons) {
      // BASE BUTTON STYLES
      const buttonBaseStyles = {
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
        transitionTimingFunction: theme(
          `transitionTimingFunction['ease-in-out']`
        ),
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
              buttonStyles[`.btn-${color}-fill`] = {
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
              buttonStyles[`.btn-${color}-fill-dark`] = {
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
              buttonStyles[`.btn-${color}-outline`] = {
                ...buttonBaseStyles,
                borderWidth: theme(`borderWidth[2]`),
                borderColor: theme(`colors.${color}[200]`),
                borderRadius: theme(`borderRadius[md]`),
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
              buttonStyles[`.btn-${color}-outline-dark`] = {
                ...buttonBaseStyles,
                borderWidth: theme(`borderWidth[2]`),
                borderColor: theme(`colors.${color}[900]`),
                borderRadius: theme(`borderRadius[md]`),
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
              buttonStyles[`.btn-${color}-ghost`] = {
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
              buttonStyles[`.btn-${color}-ghost-dark`] = {
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
    } else {
      console.log(
        "You must include `colors`, `styles` and `themes` in the plugin's configuration object."
      )
    }

    addComponents({ ...buttonStyles, ...inputStyles })
  }
})
