import { CartProduct } from "@/stores/cart.store";
import { CartProductItemMobile } from "./ItemMobile";
import { CartProductItemWeb } from "./ItemWeb";

export interface CartProductItemProps {
  product: CartProduct;
}

export const CartProductItem = ({ product }: CartProductItemProps) => {
  return (
    <>
      <div className="hidden md:block">
        <CartProductItemWeb product={product} />
      </div>

      <div className="block md:hidden">
        <CartProductItemMobile product={product} />
      </div>
    </>
  );
};
