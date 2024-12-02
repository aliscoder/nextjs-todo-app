import { getTodos } from "@/api";
import NotFound from "@/components/Error/NotFound";
import FilterBar from "@/components/FilterBar/FilterBar";
import Pagination from "@/components/Pagination/Pagination";
import SearchBar from "@/components/SearchBar/SearchBar";
import TodoCard from "@/components/TodoCard";
import TodoField from "@/components/TodoField";
import { API_FETCH_LIMIT } from "@/constants";
import { Box, Divider, List } from "@mui/material";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { todos, count } = await getTodos(searchParams);

  return (
    <>
      <Box display="flex">
        <SearchBar query="search" placeholder="Todo Title" />
        <FilterBar />
      </Box>

      {todos.length === 0 ? (
        <NotFound />
      ) : (
        <List>
          {todos.map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </List>
      )}

      {count > API_FETCH_LIMIT && <Pagination count={count} />}
    </>
  );
}
