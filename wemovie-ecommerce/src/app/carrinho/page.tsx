"use client";

import { EmptyState } from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useCartStore } from "@/stores/cart.store";
import Link from "next/link";
import { CartFooter } from "./CartFooter";
import { CartProductList } from "./CartProductList";

export default function CartPage() {
  const products = useCartStore((s) => s.products);
  const productsLength = useCartStore((s) => s.productsLength);

  if (!productsLength) {
    return (
      <Container>
        <EmptyState>
          <Link href="/">
            <Button>
              <div className="flex items-center">
                <span>VOLTAR</span>
              </div>
            </Button>
          </Link>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-col gap-4 rounded bg-white p-4 md:p-6">
        <CartProductList products={products} />
        <hr />
        <CartFooter />
      </div>
    </Container>
  );
}
