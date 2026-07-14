import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0B2D60',
          darker: '#001F3F',
          accent: '#007BFF',
          light: '#4FC3F7',
        },
        white: '#FFFFFF',
        text: {
          dark: '#333333',
          medium: '#666666',
          light: '#e0e0e0',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
