"use client";

import { createContext, useContext, useMemo } from "react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

import { THEME_VARIABLE } from "@/constants";

const AppThemeContext = createContext(null);

const AppThemeProvider = (props: any) => {

  const theme = useMemo(() => {
    return responsiveFontSizes(createTheme(THEME_VARIABLE));
  }, []);

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
