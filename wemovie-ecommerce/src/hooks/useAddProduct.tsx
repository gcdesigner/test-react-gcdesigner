import type { Product } from "@/@types/product";
import { useCartStore } from "@/stores/cart.store";

export const useAddProduct = () => {
  const addProduct = useCartStore((state) => state.addProduct);

  return (product: Product) => {
    addProduct(product);
  };
};
