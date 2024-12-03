import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "@/app/components/navbar";
import AppProvider from "@/providers";

import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Container maxWidth='md'>
            <Navbar />
            <Box mt={11}>{children}</Box>
          </Container>
        </AppProvider>
      </body>
    </html>
  );
}
