"use server";

import prisma from "../../prisma/prisma";
import { todoFormSchema } from "./validation";
import { modifiedErrors } from "./utils";
import { API_FETCH_LIMIT } from "@/constants";
import { numericParam } from "@/utils/numericParam";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getTodos(params: {
  [key: string]: string | string[] | undefined;
}) {
  const searchParam = params["search"] as string;
  const pageParam = params["page"] as string;
  const statusParam = params["status"] as string;

  const count = await prisma.todo.count({
    where: {
      title: { startsWith: searchParam },
      completed: statusParam ? statusParam === "completed" : undefined,
    },
  });

  const todos = await prisma.todo.findMany({
    where: {
      title: { startsWith: searchParam },
      completed: statusParam ? statusParam === "completed" : undefined,
    },
    skip: (numericParam(pageParam) - 1) * API_FETCH_LIMIT,
    take: API_FETCH_LIMIT,
    orderBy: {
      id: 'desc'
    }
  });

  return {
    todos,
    count,
  };
}



export async function getTodo(todoId: number) {
  const todo = await prisma.todo.findFirst({
    where: { id: todoId },
  });

  if (!todo) throw new Error("todo not found");
  return { todo };
}




export async function deleteTodo(todoId: number) {
  const todo = await prisma.todo.delete({
    where: { id: todoId },
  });

  if (!todo) throw new Error("todo not found");
  
  revalidatePath("/");
  return { todo };
}



export async function completeTodo(todoId: number) {
  const todo = await prisma.todo.findFirst({ where: { id: todoId } });

  if (!todo) throw new Error("todo not found");

  await prisma.todo.update({
    where: { id: todoId },
    data: {
      completed: !todo?.completed,
    },
  });

  revalidatePath("/");
}



export async function createTodo(prevState: any, data: FormData) {
  const validatedFields = todoFormSchema.safeParse({
    title: data.get("title"),
    body: data.get("body"),
  });

  if (!validatedFields.success) {
    return {
      errors: modifiedErrors(validatedFields.error),
    };
  }

  await prisma.todo.create({
    data: {
      title: validatedFields.data.title,
      body: validatedFields.data.body,
    },
  });

  revalidatePath("/");
  redirect('/')
}



export async function updateTodo(prevState: any, data: FormData) {
  const validatedFields = todoFormSchema.safeParse({
    title: data.get("title"),
    body: data.get("body"),
  });

  if (!validatedFields.success) {
    return {
      errors: modifiedErrors(validatedFields.error),
    };
  }

  await prisma.todo.update({
    where: {
      id: Number(data.get('id'))
    },
    data: {
      title: validatedFields.data.title,
      body: validatedFields.data.body
    },
  });

  revalidatePath("/");
  redirect('/')
}
