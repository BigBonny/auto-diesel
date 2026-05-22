"use client";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary:    { main: "#274554", dark: "#1a3240", light: "#3a6070" },
    secondary:  { main: "#ff5700", dark: "#c43d1e", light: "#f06040" },
    background: { default: "#ffffff" },
    text:       { primary: "#274554", secondary: "#444444" },
  },
  typography: {
    fontFamily: "'Open Sans', Arial, sans-serif",
    fontWeightBold: 700,
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root:            { textTransform: "none", fontWeight: 700, borderRadius: 4 },
        contained:{ backgroundColor: "#274554", "&:hover": { backgroundColor: "#444444" } },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
