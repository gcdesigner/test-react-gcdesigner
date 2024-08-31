"use server";

import { redirect } from "next/navigation";

export const postPayment = () => {
  try {
    return new Promise((result) => setTimeout(result, 2000)).then(() => {
      redirect("pagamento-confirmado");
    });
  } catch {
    throw new Error("Erro ao realizar pagamento");
  }
};
