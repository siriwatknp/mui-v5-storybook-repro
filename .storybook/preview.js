import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

const defaultTheme = createTheme();

const withThemeProvider = (Story, context) => {
  return (
    <EmotionThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
