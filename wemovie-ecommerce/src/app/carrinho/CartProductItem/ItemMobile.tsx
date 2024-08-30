import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import type { CartProductItemProps } from ".";
import { CartProductItemRemoveButton } from "./ItemRemoveButton";
import { CartProductItemAmount } from "./ItemAmount";

export const CartProductItemMobile = ({ product }: CartProductItemProps) => {
  return (
    <div className="flex w-full items-center gap-4">
      <Image src={product.image} alt={product.title} width={64} height={83} />

      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">{product.title}</span>
          <div className="flex items-center gap-2">
            <span className="font-bold">{formatPrice(product.price)}</span>
            <CartProductItemRemoveButton product={product} />
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <CartProductItemAmount product={product} />

          <div className="flex flex-col text-center">
            <span className="text-xs font-bold text-gray-400">SUBTOTAL</span>
            <span className="font-bold">{formatPrice(product.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
