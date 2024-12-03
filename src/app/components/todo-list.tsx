import { getTodos } from "@/api";
import React from "react";
import NotFound from "../../components/Error/NotFound";
import { SearchParams } from "@/types";
import { Box, List } from "@mui/material";
import TodoCard from "./TodoCard";
import Pagination from "./Pagination/Pagination";
import { API_FETCH_LIMIT } from "@/constants";

const TodoList = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { todos, count } = await getTodos(searchParams);
  
  if (todos.length === 0) return <NotFound />;

  return (
    <>
      <List>
        {todos.map((todo) => (
          <TodoCard todo={todo} />
        ))}
      </List>
      {count > API_FETCH_LIMIT && <Pagination count={count} />}
    </>
  );
};

export default TodoList;
