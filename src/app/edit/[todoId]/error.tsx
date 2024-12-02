"use client";

import CommonError from "@/components/Error/CommonError";



export default function ChannelsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <CommonError onReset={reset} />;
}
