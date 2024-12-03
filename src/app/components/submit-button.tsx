"use client";

import { Button } from "@mui/material";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button fullWidth variant="contained" color="success" disabled={pending} type="submit">
      {title}
    </Button>
  );
};

export default SubmitButton;
