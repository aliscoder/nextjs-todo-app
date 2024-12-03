"use client";

import React, { ChangeEvent } from "react";
import { useQueryString } from "@/hooks/useQueryString";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { FILTERS } from "@/constants";

const SearchBar = () => {
  const { set, remove, getValue } = useQueryString();

  const handleChangeFilter = (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    remove("page");
    FILTERS.map(({ value }) => value).includes(event.target.value)
      ? event.target.value === "all"
        ? remove("status")
        : set("status", event.target.value)
      : set("search", event.target.value);
  };

  return (
    <Box display="flex" gap={1}>
      <TextField
        sx={{ flex: 4 }}
        size="small"
        onChange={handleChangeFilter}
        type="text"
        placeholder="Todo to search"
      />
      <Select
        sx={{ flex: 1 }}
        size="small"
        value={getValue("status") || "all"}
        label="Todo Status"
        onChange={handleChangeFilter}
      >
        {FILTERS.map(({ value, title }) => (
          <MenuItem key={value} value={value}>{title}</MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SearchBar;
