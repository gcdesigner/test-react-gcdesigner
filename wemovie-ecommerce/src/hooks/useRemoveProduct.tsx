import { useCartStore } from "@/stores/cart.store";

export const useRemoveProduct = () => {
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (productId: string) => {
    removeProduct(productId);
  };
};
