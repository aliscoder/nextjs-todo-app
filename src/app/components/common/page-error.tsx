import React from "react";
import { Button, Typography, Stack } from "@mui/material";

const PageError = ({ onReset }: { onReset: () => void }) => {
  return (
      <Stack spacing={2} justifyContent="center">
        <Typography>Error fetching data</Typography>
        <Button  variant="outlined" color="error" onClick={onReset}>
          Try again
        </Button>
      </Stack>
  );
};

export default PageError;
