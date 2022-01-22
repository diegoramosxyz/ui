export default function badges(
  badges: PluginOptions['badges'],
  theme: Helpers['theme']
) {
  if (!badges) return

  const components: { [x: string]: {} } = {}

  const badgeBaseStyles = {
    padding: `${theme(`spacing[1]`)} ${theme(`spacing[2]`)}`,
    borderRadius: theme(`borderRadius[md]`),
    // For badges with icons
    display: 'flex',
    alignItems: 'center',
    gap: theme(`spacing[2]`),
  }

  // ------------ FILL ------------
  if (badges.styles.includes('fill')) {
    // ------------ LIGHT ------------
    if (badges.themes.includes('light')) {
      badges.colors.forEach((color) => {
        components[`.badge-${color}-fill`] = {
          ...badgeBaseStyles,
          backgroundColor: theme(`colors.${color}[100]`),
          color: theme(`colors.${color}[900]`),
        }
      })
    }
    // ------------ DARK ------------
    if (badges.themes.includes('dark')) {
      badges.colors.forEach((color) => {
        components[`.badge-${color}-fill-dark`] = {
          ...badgeBaseStyles,
          backgroundColor: theme(`colors.${color}[900]`),
          color: theme(`colors.${color}[50]`),
        }
      })
    }
  }

  // ------------ OUTLINE ------------
  if (badges.styles.includes('outline')) {
    // ------------ LIGHT ------------
    if (badges.themes.includes('light')) {
      badges.colors.forEach((color) => {
        components[`.badge-${color}-outline`] = {
          ...badgeBaseStyles,
          borderWidth: theme(`borderWidth[2]`),
          borderColor: theme(`colors.${color}[200]`),
          color: theme(`colors.${color}[900]`),
        }
      })
    }
    // ------------ DARK ------------
    if (badges.themes.includes('dark')) {
      badges.colors.forEach((color) => {
        components[`.badge-${color}-outline-dark`] = {
          ...badgeBaseStyles,
          borderWidth: theme(`borderWidth[2]`),
          borderColor: theme(`colors.${color}[900]`),
          color: theme(`colors.${color}[50]`),
        }
      })
    }
  }

  return components
}
