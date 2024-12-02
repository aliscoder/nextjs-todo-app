import { numericParam } from "@/utils/numericParam";
import { useEffect, useRef, useState } from "react";
import { useQueryString } from "./useQueryString";
import { API_FETCH_LIMIT } from "@/constants";

export const usePaginationObserver = (count: number) => {
  const ref = useRef<any>(null);
  const { set, getValue } = useQueryString();
  const currentPage = getValue("page");
  const needMore =
    Math.ceil(count / API_FETCH_LIMIT) > numericParam(currentPage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          set("page", (numericParam(currentPage) + 1).toString());
        } 
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [currentPage, needMore]);

  

  return { ref, needMore };
};
