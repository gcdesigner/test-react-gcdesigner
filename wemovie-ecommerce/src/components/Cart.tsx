"use client";

import { useCartStore } from "@/stores/cart.store";
import Image from "next/image";
import Link from "next/link";

export const Cart = () => {
  const productsLength = useCartStore((s) => s.productsLength);

  return (
    <Link href="carrinho">
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className="hidden text-sm font-semibold text-white md:block">
            Meu Carrinho
          </span>
          <small className="block text-xs text-gray-400">
            {productsLength} item
          </small>
        </div>
        <Image
          src="icon-cart.svg"
          alt="Carrinho"
          width={24}
          height={24}
          className="h-auto"
        />
      </div>
    </Link>
  );
};
