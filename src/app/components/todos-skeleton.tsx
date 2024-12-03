import { Skeleton, Stack } from "@mui/material";
import React from "react";

const TodoSkeleton = () => {
  return (
    <Stack sx={{width: '100%'}} spacing={1}>
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
      <Skeleton variant="rounded" height={50} animation="wave" />
    </Stack>
  );
};

export default TodoSkeleton;
