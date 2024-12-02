"use client";

import React from "react";
import MuiPagination from '@mui/material/Pagination'
import { API_FETCH_LIMIT } from "@/constants";
import { useQueryString } from "@/app/hooks/useQueryString";

const Pagination = ({
  count,
}: {
  count: number;
}) => {
  
  const { set } = useQueryString();

  return <MuiPagination count={Math.floor(count / API_FETCH_LIMIT)} onChange={(e , value) => set("page", value.toString())} />
};

export default Pagination;
