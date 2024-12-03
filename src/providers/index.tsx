import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React, { ReactNode } from "react";
import AppThemeProvider from "./AppThemeProvider";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

type Props = {
  children: ReactNode;
};
const AppProvider = ({ children }: Props) => {

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false }}>
      <AppThemeProvider>
        <InitColorSchemeScript attribute="class" />
        {children}
      </AppThemeProvider>
    </AppRouterCacheProvider>
  );
  
};

export default AppProvider;
