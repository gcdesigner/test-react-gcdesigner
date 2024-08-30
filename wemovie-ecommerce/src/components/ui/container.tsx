import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto h-full w-full max-w-screen-lg px-4", className)}
    >
      {children}
    </div>
  );
};
