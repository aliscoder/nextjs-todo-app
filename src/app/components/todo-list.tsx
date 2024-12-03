import { getTodos } from "@/api";
import React, { Suspense } from "react";
import { SearchParams } from "@/types";
import { Box, Divider, List, Stack } from "@mui/material";
import { API_FETCH_LIMIT } from "@/constants";
import TodoCard from "./todo-card";
import Pagination from "./pagination";
import NotFound from "./common/list-empty";
import TodoSkeleton from "./todos-skeleton";

const TodoList = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { todos, count } = await getTodos(searchParams);

  if (todos.length === 0) return <NotFound />;

  return (
    <Suspense fallback={<TodoSkeleton />}>
      <Stack display='flex' flex={1} spacing={2} pb={4} divider={<Divider flexItem />}>
        <List>
          {todos.map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </List>
        {count > API_FETCH_LIMIT && <Pagination count={count} />}
      </Stack>
    </Suspense>
  );
};

export default TodoList;
