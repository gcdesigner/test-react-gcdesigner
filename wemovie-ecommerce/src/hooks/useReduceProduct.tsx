import { useCartStore } from "@/stores/cart.store";

export const useReduceProduct = () => {
  const reduceProduct = useCartStore((state) => state.reduceProduct);

  return (productId: string) => {
    reduceProduct(productId);
  };
};
