import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

// color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    body: {
      color: mode('hsl(200, 15%, 8%)', 'hsl(0, 0%, 100%)')(props),
      bg: mode('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults..
    baseStyle: props => ({
      dialog: {
        bg: mode('hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)')(props),
      },
    }),
  },
};

const customTheme = extendTheme({
  components,
  styles,
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  }
});


export { config, customTheme }