"use client";

import { useTheme } from "@/hooks/useTheme";
import { Add, DarkMode, LightMode, Note } from "@mui/icons-material";
import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import RowBetween from "./common/row-between";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { mode, toggleDarkTheme } = useTheme();
  const pathname = usePathname();

  const themeIcon = mode === "dark" ? <DarkMode /> : <LightMode />;

  return (
    <AppBar color="default">
      <Toolbar>
        <Container maxWidth="md">
          <RowBetween>
            <Link href="/">
              <Button
                variant="text"
                color="primary"
                startIcon={<Note color="primary" />}
              >
                <Typography>Todo App</Typography>
              </Button>
            </Link>
            <Stack direction='row' spacing={1} alignItems='center'>
              <IconButton onClick={toggleDarkTheme}>{themeIcon}</IconButton>
              {pathname !== "/add" && (
                <Link href="/add">
                  <Button
                    variant="outlined"
                    size="small"
                    color="success"
                    startIcon={<Add color="success" />}
                  >
                    Add Todo
                  </Button>
                </Link>
              )}
            </Stack>
          </RowBetween>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
