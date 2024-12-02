"use client";

import { IServerAction, ITodo } from "@/types";
import { TextField } from "@mui/material";
import React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton/SubmitButton";

interface Props {
  todo?: ITodo;
  serverAction: IServerAction;
}
const TodoForm = ({ todo, serverAction }: Props) => {
  const [state, formAction] = useFormState(serverAction, null);
  return (
    <form action={formAction}>
      <TextField
        error={!!state?.errors.title}
        helperText={state?.errors.title}
        placeholder="Title"
        defaultValue={todo?.title || ""}
        type="text"
        name="title"
      />

      <TextField
        multiline
        rows={6}
        error={!!state?.errors.body}
        helperText={state?.errors.body}
        placeholder="Description"
        defaultValue={todo?.body || ""}
        type="text"
        name="body"
      />

      {todo && <TextField sx={{display: 'none'}} name='id' value={todo.id} />}

      <SubmitButton title={todo ? 'Edit Todo' : 'Add Todo'} />
    </form>
  );
};

export default TodoForm;
