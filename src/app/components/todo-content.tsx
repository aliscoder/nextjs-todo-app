"use client";

import { completeTodo } from "@/api";
import { ITodo } from "@/types";
import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const TodoContent = ({ completed, id, title, body }: ITodo) => {
  return (
    <ListItemButton onClick={() => completeTodo(id)} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText
        id={id.toString()}
        primary={title}
        secondary={body}
        // 95% is because the listItem doesn't support multiple action button at the end of list
        secondaryTypographyProps={{ maxWidth: "95%" }}
      />
    </ListItemButton>
  );
};

export default TodoContent;
