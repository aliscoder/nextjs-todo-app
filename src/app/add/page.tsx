import { createTodo } from "@/api";
import TodoForm from "@/components/TodoForm";
import React from "react";

const TodoField = () => {
  
  return <TodoForm serverAction={createTodo} />;
};

export default TodoField;
