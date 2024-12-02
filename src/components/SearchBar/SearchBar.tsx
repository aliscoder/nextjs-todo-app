'use client'

import React from "react";
import { useQueryString } from "@/app/hooks/useQueryString";
import { TextField } from "@mui/material";

type Props = {
  query: string;
  placeholder?: string;
};

const SearchBar = ({ query, placeholder }: Props) => {
  const { set,remove } = useQueryString();

  return (
    <TextField
      onChange={(e) => {
        remove('page')
        set(query, e.target.value);
      }}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
