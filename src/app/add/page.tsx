import { createTodo } from "@/api";
import React from "react";
import TodoForm from "../components/todo-form";
import { Metadata } from "next";


export const metadata : Metadata = {
  title: 'Add New Todo',
  description: 'You can add new todos here'
}

const AddTodoPage = () => {
  
  return <TodoForm serverAction={createTodo} />;
};

export default AddTodoPage;
