export default function inputs(
  inputs: PluginOptions['inputs'],
  theme: Helpers['theme']
) {
  if (!inputs) return

  const components: { [x: string]: {} } = {}

  // BASE INPUT STYLES
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
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
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
        components[`.input-${color}-outline`] = {
          ...inputOutlineStyles,
          borderColor: theme(`colors.neutral[500]`),
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
        components[`.input-${color}-outline-dark`] = {
          ...inputOutlineStyles,
          borderColor: theme(`colors.neutral[700]`),
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
        components[`.input-${color}-underline`] = {
          ...inputUnderlineStyles,
          borderColor: theme(`colors.neutral[500]`),
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
        components[`.input-${color}-underline-dark`] = {
          ...inputUnderlineStyles,
          borderColor: theme(`colors.neutral[700]`),
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

  return components
}
