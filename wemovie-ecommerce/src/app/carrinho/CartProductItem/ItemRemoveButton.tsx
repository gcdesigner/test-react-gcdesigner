import { Button } from "@/components/ui/button";
import { useRemoveProduct } from "@/hooks/useRemoveProduct";
import { Trash2 } from "lucide-react";
import type { CartProductItemProps } from ".";

export const CartProductItemRemoveButton = ({
  product,
}: CartProductItemProps) => {
  const removeProduct = useRemoveProduct();

  return (
    <Button
      size="icon"
      variant="icon"
      className="w-fit"
      aria-label="Remover produto"
      onClick={() => removeProduct(product.id)}
    >
      <Trash2 size={16} />
    </Button>
  );
};
