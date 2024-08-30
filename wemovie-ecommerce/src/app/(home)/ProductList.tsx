import type { Product } from "@/@types/product";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-col justify-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
