import TodoList from "@/app/components/todo-list";
import { SearchParams } from "@/types";
import { Box } from "@mui/material";
import SearchBar from "./components/search-bar";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Home',
  description: 'Manage Todos'
}

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {

  return (
    <Box>
      <SearchBar />
      <TodoList searchParams={searchParams} />
    </Box>
  );
}
