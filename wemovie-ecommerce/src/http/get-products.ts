"use server";

import { Product } from "@/@types/product";
import { api } from "@/lib/api";

interface Response {
  products: Product[];
}

export const getProducts = async () => {
  try {
    const data = await api<Response>("movies");
    if (data) {
      return data.products;
    }
  } catch {
    throw new Error("Erro ao listar produtos");
  }
};
