"use client";

import { IServerAction, ITodo } from "@/types";
import { Grid2, TextField } from "@mui/material";
import React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";

interface Props {
  todo?: ITodo;
  serverAction: IServerAction;
}
const TodoForm = ({ todo, serverAction }: Props) => {
  const [state, formAction] = useFormState(serverAction, null);
  return (
    <form action={formAction}>
      <Grid2 direction="column" container spacing={2}>
        <TextField
          fullWidth
          size="small"
          error={!!state?.errors.title}
          helperText={state?.errors.title}
          placeholder="Title"
          defaultValue={todo?.title || ""}
          type="text"
          name="title"
        />

        <TextField
          fullWidth
          size="small"
          multiline
          rows={6}
          error={!!state?.errors.body}
          helperText={state?.errors.body}
          placeholder="Description"
          defaultValue={todo?.body || ""}
          type="text"
          name="body"
        />

        {todo && <TextField sx={{ display: "none" }} name="id" value={todo.id} />}

        <SubmitButton title={todo ? "Edit Todo" : "Add Todo"} />
      </Grid2>
    </form>
  );
};

export default TodoForm;
