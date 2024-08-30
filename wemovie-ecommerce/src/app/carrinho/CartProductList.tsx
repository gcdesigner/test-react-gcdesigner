import type { CartProduct } from "@/stores/cart.store";
import { CartProductItem } from "./CartProductItem";

interface CartProductListProps {
  products: CartProduct[];
}

export const CartProductList = ({ products }: CartProductListProps) => {
  return (
    <>
      <div className="mb-6 hidden grid-cols-[1fr_1fr_1fr_20px] text-sm font-bold text-gray-400 md:grid">
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
        <span></span>
      </div>
      {products.map((product) => (
        <CartProductItem key={product.id} product={product} />
      ))}
    </>
  );
};
