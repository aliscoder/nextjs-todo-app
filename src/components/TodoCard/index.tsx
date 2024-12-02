import { deleteTodo } from "@/api";
import { ITodo } from "@/types";
import { Delete, Edit } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import DeleteButton from "../DeleteButton";
import CheckButton from "../CheckButton";

type Props = {
  todo: ITodo;
};

const TodoCard = ({ todo }: Props) => {
  return (
    <ListItem
    key={todo.id}
    secondaryAction={
      <>
      <Link href={`edit/${todo.id}`}>
      <IconButton edge="end" aria-label="edit">
      <Edit />
      </IconButton>
      </Link>
      <IconButton edge="end" aria-label="delete">
        <DeleteButton id={todo.id} />
      </IconButton>
      </>
      
    }
    disablePadding
  >
    <CheckButton todo={todo} />
  </ListItem>
  );
};

export default TodoCard;
