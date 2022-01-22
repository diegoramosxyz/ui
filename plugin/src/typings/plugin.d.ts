declare module 'tailwindcss'

interface Helpers {
  addUtilities(...args: any[]): any
  addComponents(...args: any[]): any
  addBase(...args: any[]): any
  addVariant(name: string, callback: (...args: any[]) => void): any
  e(...args: any[]): any
  prefix(...args: any[]): any
  theme(...args: any[]): any
  variants(...args: any[]): any
  config(...args: any[]): any
  postcss: any
}

interface PluginOptions {
  buttons?: {
    colors: string[]
    themes: ('light' | 'dark')[]
    styles: ('fill' | 'outline' | 'ghost')[]
    animate?: boolean
  }
  inputs?: {
    colors: string[]
    themes: ('light' | 'dark')[]
    styles: ('underline' | 'outline')[]
  }
  badges?: {
    colors: string[]
    themes: ('light' | 'dark')[]
    styles: ('fill' | 'outline')[]
  }
}

declare module 'tailwindcss/plugin' {
  const withOptions: (
    plugin: (options: PluginOptions) => (helpers: Helpers) => void
  ) => {
    handler: (helpers: Helpers) => void
  }
}
