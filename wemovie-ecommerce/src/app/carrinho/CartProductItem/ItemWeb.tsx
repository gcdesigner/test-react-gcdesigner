import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { CartProductItemProps } from ".";
import { CartProductItemRemoveButton } from "./ItemRemoveButton";
import { CartProductItemAmount } from "./ItemAmount";

export const CartProductItemWeb = ({ product }: CartProductItemProps) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr_1fr_1fr_20px] items-center gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={product.image}
            alt={product.title}
            width={64}
            height={83}
          />
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm font-bold">{product.title}</span>
            <span className="font-bold">{formatPrice(product.price)}</span>
          </div>
        </div>

        <CartProductItemAmount product={product} />

        <span className="font-bold">{formatPrice(product.total)}</span>
        <CartProductItemRemoveButton product={product} />
      </div>
    </>
  );
};
