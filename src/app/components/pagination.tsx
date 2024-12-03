"use client";

import React from "react";
import MuiPagination from "@mui/material/Pagination";
import { API_FETCH_LIMIT } from "@/constants";
import { useQueryString } from "@/hooks/useQueryString";
import { Box } from "@mui/material";

const Pagination = ({ count }: { count: number }) => {
  const { set } = useQueryString();

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', marginY: 4}}>
      <MuiPagination
        count={Math.ceil(count / API_FETCH_LIMIT)}
        onChange={(e, value) => set("page", value.toString())}
      />
    </Box>
  );
};

export default Pagination;
