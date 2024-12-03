import SearchBar from "@/components/SearchBar/SearchBar";
import TodoList from "@/app/components/todo-list";
import { SearchParams } from "@/types";
import { Box } from "@mui/material";

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {

  return (
    <Box>
      <SearchBar />
      <TodoList searchParams={searchParams} />
    </Box>
  );
}
