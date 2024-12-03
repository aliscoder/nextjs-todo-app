"use client";

import PageError from "@/app/components/common/page-error";

export default function ChannelsError({ reset }: { reset: () => void }) {
  return <PageError onReset={reset} />;
}
