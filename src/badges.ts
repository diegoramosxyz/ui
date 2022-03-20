import getStyles from './userStyles'

export default function badges(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { badges, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userBadgesBaseStyles = getStyles(theme, badges?.baseStyles)

  let preset = {
    borderRadius: '4px',
    fontWeight: 500,
  }

  const badgeBaseStyles = {
    padding: '2px 10px',
    borderWidth: '2px',
    borderColor: 'transparent',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    ...preset,
    ...userGlobalStyles,
    ...userBadgesBaseStyles,
  }

  colors.forEach((color) => {
    components[`.badge-${color}-fill`] = {
      ...badgeBaseStyles,
      backgroundColor: theme(`colors.${color}[100]`),
      color: theme(`colors.${color}[900]`),
    }

    components[`.badge-${color}-fill-dark`] = {
      ...badgeBaseStyles,
      backgroundColor: theme(`colors.${color}[900]`),
      color: theme(`colors.${color}[50]`),
    }

    components[`.badge-${color}-outline`] = {
      ...badgeBaseStyles,
      borderColor: theme(`colors.${color}[200]`),
      color: 'inherit',
    }

    components[`.badge-${color}-outline-dark`] = {
      ...badgeBaseStyles,
      borderColor: theme(`colors.${color}[900]`),
      color: 'inherit',
    }
  })

  return components
}
