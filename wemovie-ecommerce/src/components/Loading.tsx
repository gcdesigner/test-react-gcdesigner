import { LoaderCircle } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <LoaderCircle size={60} className="animate-spin text-white" />
    </div>
  );
};
