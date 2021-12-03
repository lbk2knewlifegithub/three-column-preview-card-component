const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (variableName.split(",").length === 4)
      return `hsla(var(${variableName}))`;

    if (opacityValue !== undefined)
      return `hsla(var(${variableName}), ${opacityValue})`;

    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        heading: "'Big Shoulders Display', 'serif'",
        mono: ["'Lexend Deca'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
        sedans: withOpacity("--text-sedans"),
        suvs: withOpacity("--text-suvs"),
        luxury: withOpacity("--text-luxury"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        sedans: withOpacity("--bg-sedans"),
        suvs: withOpacity("--bg-suvs"),
        luxury: withOpacity("--bg-luxury"),
        "button-primary": withOpacity("--bg-button-primary"),
      },
      borderColor: {
        primary: withOpacity("--border-primary"),
      },
      // create custom gradient color here
    },
  },
  // custom variants
  variants: {
    extend: {},
  },
  plugins: [],
};
