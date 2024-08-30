import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/stores/cart.store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CartFooter = () => {
  const resetCart = useCartStore((s) => s.resetCart);
  const cartTotal = useCartStore((s) => s.cartTotal);
  const navigation = useRouter();
  const [loading, setLoading] = useState(false);

  const onPayment = async () => {
    setLoading(true);
    return new Promise((result) => setTimeout(result, 2000))
      .then(() => {
        navigation.push("pagamento-confirmado");
        resetCart();
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 pt-2 md:flex-row-reverse">
      <div className="flex items-center justify-between gap-4 max-md:w-full">
        <span className="text-sm font-bold text-gray-400">TOTAL</span>
        <span className="text-2xl font-bold">{formatPrice(cartTotal)}</span>
      </div>

      <Button
        className="w-full transition-all md:w-fit"
        onClick={onPayment}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <LoaderCircle className="animate-spin" />
            PROCESSANDO PAGAMENTO
          </div>
        ) : (
          "FINALIZAR PEDIDO"
        )}
      </Button>
    </div>
  );
};
