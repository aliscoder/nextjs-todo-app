'use client'

import { createTodo } from "@/api";
import { TextField } from "@mui/material";
import React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton/SubmitButton";

const TodoField = () => {
  const [state, formAction] = useFormState(createTodo, null);

  return (

    <form action={formAction}>
      <TextField
        error={!!state?.errors.title}
        helperText={state?.errors.title}
        placeholder="Title"
        type="text"
        name="title"
      />
      <SubmitButton title="Add Todo" />
    </form>

  );
};

export default TodoField;
