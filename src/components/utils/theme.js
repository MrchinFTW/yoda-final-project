import { createTheme } from '@mui/material/styles';

export const colorsToken = () => ({
  gray: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414"
  },
  primary: {
    100: "#d3ccda",
    200: "#a799b5",
    300: "#7c6690",
    400: "#50336b",
    500: "#240046",
    600: "#1d0038",
    700: "#16002a",
    800: "#0e001c",
    900: "#07000e"
  },
  green: {
    100: "#dbf5ee",
    200: "#b7ebde",
    300: "#94e2cd",
    400: "#70d8bd",
    500: "#4cceac",
    600: "#3da58a",
    700: "#2e7c67",
    800: "#1e5245",
    900: "#0f2922"
  },
  red: {
    100: "#fad2d7",
    200: "#f5a5af",
    300: "#f17786",
    400: "#ec4a5e",
    500: "#e71d36",
    600: "#b9172b",
    700: "#8b1120",
    800: "#5c0c16",
    900: "#2e060b"
  },
  purple: {
    100: "#e5d5f2",
    200: "#caabe5",
    300: "#b080d9",
    400: "#9556cc",
    500: "#7b2cbf",
    600: "#622399",
    700: "#4a1a73",
    800: "#31124c",
    900: "#190926"
  },
});

export const themeSettings = () => {
  const colors = colorsToken();
  return {
    palette: {
      primary: {
        main: colors.primary[900],
      },
      secondary: {
        main: colors.green[500],
      },
      neutral: {
        dark: colors.gray[700],
        main: colors.gray[500],
        light: colors.gray[100],
      },
      background: {
        default: '#FAFAFA',
      },
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const theme = createTheme(themeSettings());

