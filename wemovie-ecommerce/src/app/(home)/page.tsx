import { Await } from "@/components/Await";
import { EmptyState } from "@/components/EmptyState";
import { Loading } from "@/components/Loading";
import { Container } from "@/components/ui/container";
import { getProducts } from "@/http/get-products";
import { Suspense } from "react";
import { ProductList } from "./ProductList";

export default async function Home() {
  const products = await getProducts();

  if (!products) {
    return (
      <Container>
        <EmptyState />
      </Container>
    );
  }

  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Await promise={getProducts()}>
          {(products) => products && <ProductList products={products} />}
        </Await>
      </Suspense>
    </Container>
  );
}
