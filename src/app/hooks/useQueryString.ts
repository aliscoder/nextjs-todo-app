"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryString = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  function isActive(key: string, value: string) {
    return params.getAll(key).includes(value);
  }

  function getValue(key: string) {
    return params.get(key);
  }

  function append(key: string, value: string) {
    if (params.getAll(key).includes(value)) {
      params.delete(key, value);
    } else {
      params.append(key, value);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function set(key: string, value: string) {
    if (params.has(key) && !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function remove(key: string) {
    params.delete(key);
    replace(`${pathname}?${params.toString()}`);
  }

  function reset(args?: {except: string}) {
    const allKeys = params.keys().filter(key => key !== args?.except);
    allKeys.forEach((key) => params.delete(key));
    replace(`${pathname}?${params.toString()}`);
  }

  return { set, append, remove, reset, searchParams, isActive, getValue };
};
