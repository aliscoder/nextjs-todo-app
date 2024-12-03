import React from "react";
import { getTodo, updateTodo } from "@/api";
import NotFound from "@/components/Error/NotFound";
import TodoForm from "@/components/TodoForm";

const EditTodoPage = async ({ params: { todoId } }: { params: { todoId: string } }) => {
  
  const { todo } = await getTodo(+todoId);

  if (!todo) return <NotFound />;

  return <TodoForm todo={todo} serverAction={updateTodo} />;
};

export default EditTodoPage;
