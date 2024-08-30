import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddProduct } from "@/hooks/useAddProduct";
import { useReduceProduct } from "@/hooks/useReduceProduct";
import { MinusCircle, PlusCircle } from "lucide-react";
import type { CartProductItemProps } from ".";

export const CartProductItemAmount = ({ product }: CartProductItemProps) => {
  const addProduct = useAddProduct();
  const reduceProduct = useReduceProduct();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="icon"
        size="icon"
        className="size-fit"
        onClick={() => reduceProduct(product.id)}
        aria-label="Diminuir quantidade"
        disabled={product.amount <= 1}
      >
        <MinusCircle size={18} />
      </Button>

      <Input
        className="hide-appearance h-8 max-w-12 text-center [appearance:textfield]"
        value={product.amount}
        readOnly
      />

      <Button
        variant="icon"
        size="icon"
        className="size-fit"
        aria-label="Aumentar quantidade"
        onClick={() => addProduct(product)}
      >
        <PlusCircle size={18} />
      </Button>
    </div>
  );
};
