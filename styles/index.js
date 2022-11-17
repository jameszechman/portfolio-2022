import { extendTheme, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Heading = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    // textTransform: "uppercase",
  },
  // Two sizes: sm and md
  sizes: {},
  // Two variants: outline and solid
  variants: {},
  // The default size and variant values
  defaultProps: {},
});

const theme = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "gray.900")(props),
      },
    }),
  },
  colors: {
    primary: "#d0542a",
    brand: {
      50: "#FBEEEA",
      100: "#F3D0C4",
      200: "#EBB19D",
      300: "#E49377",
      400: "#DC7451",
      500: "#D4562B",
      600: "#AA4522",
      700: "#7F331A",
      800: "#552211",
      900: "#2A1109",
    },
    red: {
      50: "#FDEBE7",
      100: "#FAC8BD",
      200: "#F7A592",
      300: "#F38168",
      400: "#F05E3D",
      500: "#ED3A12",
      600: "#BD2F0F",
      700: "#8E230B",
      800: "#5F1707",
      900: "#2F0C04",
    },
    gray: {
      50: "#EEF4F6",
      100: "#D0E1E6",
      200: "#B2CED7",
      300: "#94BBC7",
      400: "#76A8B7",
      500: "#5894A7",
      600: "#467786",
      700: "#355964",
      800: "#233B43",
      900: "#121E21",
    },
    orange: {
      50: "#FFF5E5",
      100: "#FFE3B8",
      200: "#FFD18A",
      300: "#FFBF5C",
      400: "#FFAD2E",
      500: "#FF9B00",
      600: "#CC7C00",
      700: "#995D00",
      800: "#663E00",
      900: "#331F00",
    },
  },
  fonts: {
    body: "-system-ui, system-ui, sans-serif",
    heading: "effra, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  components: {
    Heading,
  },
};

export default extendTheme(theme);
