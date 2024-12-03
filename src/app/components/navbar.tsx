"use client";

import { useTheme } from "@/hooks/useTheme";
import { Add, DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import RowBetween from "./common/row-between";

const Navbar = () => {
  const { mode, toggleDarkTheme } = useTheme();

  const themeIcon = mode === "dark" ? <DarkMode /> : <LightMode />

  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth='md'>
          <RowBetween>
            <Typography>Todo App</Typography>
            <Box gap={2}>
              <Link href="/add">
                <IconButton>
                  <Add color="action" />
                </IconButton>
              </Link>
              <IconButton onClick={toggleDarkTheme}>
                {themeIcon}
              </IconButton>
            </Box>
          </RowBetween>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
