import { ReactNode } from "react";

export type Children = { children: ReactNode };

export interface ITodo {
  id: number;
  title: string;
  body: string;
  completed: boolean;
}

export type IServerAction = (
  prevState: any,
  data: FormData
) => Promise<
  | {
      errors: {
        [key: string]: string;
      };
    }
  | undefined
>;

export interface IFilter {
  title: string;
  value: string;
}

export type SearchParams = { [key: string]: string | string[] | undefined };
