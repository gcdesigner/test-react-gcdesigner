import { Button } from "@/components/ui/button";
import { postPayment } from "@/http/post-payment";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/stores/cart.store";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export const CartFooter = () => {
  const cartTotal = useCartStore((s) => s.cartTotal);
  const [loading, setLoading] = useState(false);

  const onPayment = async () => {
    setLoading(true);
    await postPayment();
    setLoading(false);
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
