import Image from "next/image";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface EmptyStateProps {
  children?: ReactNode;
}

export const EmptyState = ({ children }: EmptyStateProps) => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-6 rounded bg-white p-16 text-center">
      <h2 className="text-xl font-bold">Parece que não há nada por aqui :(</h2>
      <Image
        src="empty-state.svg"
        alt="Parece que não há nada por aqui :("
        width={200}
        height={340}
      />
      {children ?? (
        <Link href="/">
          <Button variant="default" size="lg">
            Recarregar página
          </Button>
        </Link>
      )}
    </div>
  );
};
