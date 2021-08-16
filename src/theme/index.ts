const theme = {
  colors: {
    primary: "#27282D",
    secondary: "#E4E5A2",
    white: "#F9F9F9",
    green: "#608A49",
  },
  fonts: {
    heading: "'Lobster', cursive",
    body: "'Open Sans', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  sizes: {
    container: {
      md: "1200px",
      sm: "920px",
      lg: "1400px",
      fluid: "100vw",
    },
  },
};

export type FontSize = keyof typeof theme["fontSizes"];
export type ContainerSize = keyof typeof theme["sizes"]["container"];

export default theme;
