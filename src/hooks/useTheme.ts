import { useColorScheme } from "@mui/material";
import { useCallback } from "react";

export const useTheme = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  const toggleDarkTheme = useCallback(() => {
    if (mode) {
      const currMode = mode === "dark" ? "light" : "dark";
      setMode(currMode);
    }
  }, [mode, systemMode]);

  return { toggleDarkTheme , mode };
};
