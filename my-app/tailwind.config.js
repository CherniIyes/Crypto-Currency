/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      // added
      primaryy: 'var(--color-bg-primaryy)',
      // added
      secondary: 'var(--color-bg-secondary)',
      button: 'var(--color-bg-button)',
    },
    textColor: {
      accent: 'var(--color-text-accent)',
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      btnText: 'var(--color-bg-secondary)',
    },
    borderColor: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      input: 'var(--color-bg-input)',
      accent: 'var(--color-text-accent)',
    },
  },
};
export const plugins = [];
