"use client";

import React from "react";
import { FILTERS } from "./FilterBar.constants";
import { useQueryString } from "@/app/hooks/useQueryString";
import { Chip } from "@mui/material";

const FilterBar = () => {
  const { append, remove, isActive } = useQueryString();

  return FILTERS.map((filter) => (
    <Chip
      key={filter.value}
      onClick={() => {
        remove("page");
        append(filter.key, filter.value);
      }}
      label={filter.title}
      color={isActive(filter.key, filter.value) ? "success" : "info"}
    />
  ));
};

export default FilterBar;
