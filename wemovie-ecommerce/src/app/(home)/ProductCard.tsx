"use client";

import type { Product } from "@/@types/product";
import Image from "next/image";
import React, { useMemo } from "react";
import { Button } from "../../components/ui/button";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/stores/cart.store";
import { useAddProduct } from "@/hooks/useAddProduct";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const cartProducts = useCartStore((s) => s.products);
  const addProductToCart = useAddProduct();

  const productAmmount = useMemo(() => {
    return cartProducts.find((item) => item.id === product.id)?.amount ?? 0;
  }, [cartProducts, product]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded bg-white p-4 text-center">
      <Image src={product.image} width={150} height={193} alt={product.title} />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold">{product.title}</span>
        <span className="font-bold">{formatPrice(product.price)}</span>
      </div>

      <Button
        variant={productAmmount ? "secondary" : "default"}
        onClick={() => addProductToCart(product)}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <ShoppingCart size={12} />
            <small className="text-xs">{productAmmount}</small>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </div>
      </Button>
    </div>
  );
};
