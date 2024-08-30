import Link from "next/link";
import { Cart } from "../Cart";
import { Container } from "../ui/container";

export const Header = () => {
  return (
    <header className="w-full">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-white">WeMovies</h1>
        </Link>

        <Cart />
      </Container>
    </header>
  );
};
