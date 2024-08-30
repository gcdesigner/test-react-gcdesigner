"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Internal server error: ", error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh_-_135px)] flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold text-white">
        OPS! Alguma coisa deu errado!
      </h2>
      <Button onClick={() => reset()}>Tente acessar novamente</Button>
    </div>
  );
}
