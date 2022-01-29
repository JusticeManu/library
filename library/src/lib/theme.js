// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  fonts: {
    body: "Gilroy, sans-serif",
  },
  styles: {
    global: {
      body: {
        fontSize: "16px",
      },
    },
  },
});
