module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'not-found': "url('https://i.ibb.co/X2q07fj/Untitled-design-1.gif')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22c55e",
          "secondary": "#5eead4",
          "accent": "#064e3b",
          "neutral": "#1C3554",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}