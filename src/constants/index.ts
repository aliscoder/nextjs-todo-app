import { IFilter } from "@/types";

export const API_FETCH_LIMIT = 5

export const THEME_VARIABLE = {
    cssVariables: {
      colorSchemeSelector: "class",
      disableCssColorScheme: true,
    },
    palette: {
      mode: 'light'
    },
    colorSchemes: {
      light: {
        palette: {
          mode: 'light'
        },
      },
      dark: {
        palette: {
          mode: 'dark'
        },
      },
    },
  } as const

  export const FILTERS: IFilter[] = [
    { title: "All", value: "all" },
    { title: "Completed", value: "completed" },
    { title: "Pending", value: "pending" },
  ];