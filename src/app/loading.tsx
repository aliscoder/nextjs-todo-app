import { Skeleton, Stack } from "@mui/material";

const TodoLoading = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      <Stack direction='row' alignItems='center' spacing={1}>
        <Skeleton variant="rounded" height={50} animation="wave" />
        <Skeleton variant="rounded" height={50} animation="wave" />
      </Stack>
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={150} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
    </Stack>
  );
};

export default TodoLoading;
