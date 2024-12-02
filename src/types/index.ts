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
>
