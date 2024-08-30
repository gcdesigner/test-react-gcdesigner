import type { Product } from "@/@types/product";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartProduct extends Product {
  amount: number;
  total: number;
}

type State = {
  products: CartProduct[];
  productsLength: number;
  cartTotal: number;
};

type Actions = {
  addProduct: (product: Product) => void;
  reduceProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  resetCart: () => void;
};

export const useCartStore = create(
  persist<State & Actions>(
    (set) => ({
      products: [],
      productsLength: 0,
      cartTotal: 0,

      addProduct: (product: Product) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.id === product.id,
          );

          if (productIndex > -1) {
            const updatedProducts = state.products.map((p, index) =>
              index === productIndex
                ? { ...p, amount: p.amount + 1, total: p.total + product.price }
                : p,
            );

            return {
              products: updatedProducts,
              productsLength: state.productsLength + 1,
              cartTotal: state.cartTotal + product.price,
            };
          } else {
            const newProduct: CartProduct = {
              ...product,
              amount: 1,
              total: product.price,
            };

            return {
              products: [...state.products, newProduct],
              productsLength: state.productsLength + 1,
              cartTotal: state.cartTotal + product.price,
            };
          }
        });
      },

      reduceProduct: (productId: string) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.id === productId,
          );
          if (productIndex > -1) {
            const product = state.products[productIndex];
            if (product.amount > 1) {
              const updatedProducts = state.products.map((p, index) =>
                index === productIndex
                  ? { ...p, amount: p.amount - 1, total: p.total - p.price }
                  : p,
              );

              return {
                products: updatedProducts,
                productsLength: state.productsLength - 1,
                cartTotal: state.cartTotal - product.price,
              };
            } else {
              const updatedProducts = state.products.filter(
                (p) => p.id !== productId,
              );

              return {
                products: updatedProducts,
                productsLength: state.productsLength - 1,
                cartTotal: state.cartTotal - product.price,
              };
            }
          }
          return state;
        });
      },

      removeProduct: (productId: string) => {
        set((state) => {
          const product = state.products.find((p) => p.id === productId);
          if (product) {
            const updatedProducts = state.products.filter(
              (p) => p.id !== productId,
            );

            return {
              products: updatedProducts,
              productsLength: state.productsLength - product.amount,
              cartTotal: state.cartTotal - product.total,
            };
          }
          return state;
        });
      },

      resetCart: () => {
        set({ products: [], productsLength: 0, cartTotal: 0 });
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
