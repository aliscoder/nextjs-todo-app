import { PlaylistRemove } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Stack spacing={1} direction="column" alignItems="center" mt={15}>
      <PlaylistRemove color="error" fontSize="large" />
      <Typography color="error">No Todos Found</Typography>
    </Stack>
  );
};

export default NotFound;
