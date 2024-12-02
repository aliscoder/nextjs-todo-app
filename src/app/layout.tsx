import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Container } from "@mui/material";

import "./globals.css";


export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Container sx={{display: 'flex' , flexDirection: 'column' , width: '100%' , gap: '12px 0'}}>
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
