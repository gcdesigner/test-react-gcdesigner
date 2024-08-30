import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmedPaymentPage() {
  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-center gap-6 rounded bg-white p-16 text-center">
        <h2 className="text-xl font-bold">Compra realizada com sucesso</h2>

        <Image
          src="completed-payment.svg"
          width={294}
          height={250}
          alt="Pagamento realizado com sucesso"
        />

        <Link href="/">
          <Button className="w-52">VOLTAR</Button>
        </Link>
      </div>
    </Container>
  );
}
