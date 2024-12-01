"use client";
import { createTheme } from "@mui/material";
import componentsShared from "./componentsShared";
import typographyShared from "./typographyShared";

declare module "@mui/material/styles" {
  interface Palette {
    citrus: Palette["primary"];
    success: Palette["primary"];
    lavender: Palette["primary"];
    surface: Palette["primary"];
    bg: Palette["primary"];
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    citrus: PaletteOptions["primary"];
    lavender: PaletteOptions["primary"];
    surface: PaletteOptions["primary"];
    bg: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }
  interface SimplePaletteColorOptions {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
    small: true;
    medium: true;
    large: true;
    extraLarge: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    d1Bold: true;
    d1Medium: true;
    d1Regular: true;
    d2Bold: true;
    d2Medium: true;
    d2Regular: true;
    d3Bold: true;
    d3Medium: true;
    h1Bold: true;
    h1Medium: true;
    h1Regular: true;
    h2Bold: true;
    h2Medium: true;
    h3Bold: true;
    h3Medium: true;
    h3Regular: true;
    h4Bold: true;
    h4Medium: true;
    h4Regular: true;
    subH1Bold: true;
    subH1Medium: true;
    subH1Regular: true;
    subH2Bold: true;
    subH2Medium: true;
    subH2Regular: true;
    p1Bold: true;
    p1Medium: true;
    p1Regular: true;
    p2Bold: true;
    p2Medium: true;
    p2Regular: true;
    label1Bold: true;
    label1Medium: true;
    label1Regular: true;
    label2Bold: true;
    label2Medium: true;
    label2Regular: true;

    body1: false;
    body2: false;
    button: false;
    caption: false;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    inherit: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
  }
}

const mainTheme = createTheme({
  direction: "rtl",
  typography: typographyShared,
  palette: {
    primary: {
      50: "#F1F7FE",
      100: "#D0E4FB",
      200: "#BED9F8",
      300: "#7DB2F2",
      400: "#7DB2F2",
      500: "#1273E7",
      600: "#1069D2",
      700: "#0D52A4",
      800: "#0A3F7F",
      900: "#083061",
      950: "#051F42",
    },
    citrus: {
      50: "#FFF9ED",
      100: "#FFF3D4",
      200: "#FFE2A8",
      300: "#FFCD70",
      400: "#FFAB37",
      500: "#FF9314",
      600: "#F07506",
      700: "#C75807",
      800: "#9E450E",
      900: "#7F3B0F",
      950: "#451B05",
    },
    success: {
      50: "#EEFBF4",
      100: "#D6F5E3",
      200: "#B1E9CC",
      300: "#7DD8AF",
      400: "#48BF8D",
      500: "#239A6C",
      600: "#17845C",
      700: "#13694C",
      800: "#11543D",
      900: "#0F4534",
      950: "#07271D",
    },
    lavender: {
      50: "#F4F3FF",
      100: "#EBE8FF",
      200: "#DAD4FF",
      300: "#BEB2FF",
      400: "#9E87FE",
      500: "#784CFC",
      600: "#6F33F4",
      700: "#6021E0",
      800: "#511BBC",
      900: "#44189A",
      950: "#280D68",
    },
    error: {
      50: "#FFF3F1",
      100: "#FFE4E0",
      200: "#FFCEC7",
      300: "#FFAA9F",
      400: "#FF7664",
      500: "#FA442C",
      600: "#ED2F15",
      700: "#C8230D",
      800: "#A5210F",
      900: "#882214",
      950: "#490E06",
    },
    surface: {
      100: "#FFFFFF",
      200: "#F9FAFC",
      300: "#F2F5F8",
      400: "#ECEFF5",
      500: "#E5EAF1",
      600: "#DFE5EE",
    },
    bg: {
      100: "#FDFDFD",
      200: "#F8F8F8",
      300: "#F3F3F3",
      400: "#EEEEEE",
      500: "#EBEBEB",
      600: "#E6E6E6",
    },
    neutral: {
      100: "#E9E9E9",
      200: "#D2D2D2",
      300: "#A6A6A6",
      400: "#797979",
      500: "#4D4D4D",
      600: "#282828",
    },
  },

  components: componentsShared,
});

export default mainTheme;
