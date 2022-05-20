module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F63E7B",

          secondary: "#E5E5E5",

          accent: "#111430",

          neutral: "#474747",

          "base-100": "#FFFFFF",
          info: "#FFF8F5",
        },
      },
      {
        dark: {
          primary: "#6419E6",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#ffffff",

          "base-100": "#00092C",
          info:"#16003B"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
