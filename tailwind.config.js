/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        "perla-black": "#1E1E1E",
        "perla-primary": "#305BF3",
        "perla-white": "#D9D9D9",
        "perla-fullBlack": "#000"
      },
      fonts: {
        'mts-thin': 'made-tommy-thin',
        'mts-light': 'made-tommy-light',
        'mts-regular': 'made-tommy-regular',
        'mts-medium': 'made-tommy-medium',
        'mts-bold': 'made-tommy-bold',
        'mts-extrabold': 'made-tommy-extrabold',
        'mts-black': 'made-tommy-black' 
      }
    },
  },
  plugins: [],
}
