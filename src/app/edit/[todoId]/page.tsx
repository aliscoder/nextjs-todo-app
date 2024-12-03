import React from "react";
import { getTodo, updateTodo } from "@/api";
import NotFound from "@/app/components/common/list-empty";
import TodoForm from "@/app/components/todo-form";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Edit Todo',
  description: 'You can edit todos here'
}

const EditTodoPage = async ({ params: { todoId } }: { params: { todoId: string } }) => {
  
  const { todo } = await getTodo(+todoId);

  if (!todo) return <NotFound />;

  return <TodoForm todo={todo} serverAction={updateTodo} />;
};

export default EditTodoPage;
