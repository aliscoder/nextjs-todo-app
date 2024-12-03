"use client";

import PageError from "./components/common/page-error";


export default function TodosError({ reset }: { reset: () => void }) {
  return <PageError onReset={reset} />;
}
