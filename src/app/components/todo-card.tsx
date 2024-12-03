import { ITodo } from "@/types";
import { Edit } from "@mui/icons-material";
import {  IconButton, ListItem, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import DeleteButton from "./delete-button";
import TodoContent from "./todo-content";

type Props = {
  todo: ITodo;
};

const ActionSection = ({ todoId }: { todoId: number }) => {
  return (
    <Stack spacing={1} direction='row'>
      <Link href={`edit/${todoId}`}>
        <IconButton edge="end" aria-label="edit">
          <Edit />
        </IconButton>
      </Link>
      <IconButton edge="end" aria-label="delete">
        <DeleteButton id={todoId} />
      </IconButton>
    </Stack>
  );
};

const TodoCard = ({ todo }: Props) => {
  return (
    <ListItem
      key={todo.id}
      secondaryAction={<ActionSection todoId={todo.id} />}
      disablePadding
    >
      <TodoContent {...todo} />
    </ListItem>
  );
};

export default TodoCard;
