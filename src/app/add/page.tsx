import { createTodo } from "@/api";
import TodoForm from "@/components/TodoForm";
import React from "react";

const AddTodoPage = () => {
  
  return <TodoForm serverAction={createTodo} />;
};

export default AddTodoPage;
