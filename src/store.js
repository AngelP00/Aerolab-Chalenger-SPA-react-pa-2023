/*
import { create } from "zustand";

const useStore = create((set) => ({
	reservations: [],
	addReservation: (product, dates) =>
		set((state) => ({
			reservations: [...state.reservations, { product, dates }],
		})),
}));

export default useStore;
*/
import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  addProduct: (product, dates) =>
    set((state) => {
      const newProducts = [...state.products, {product,dates}];
      console.log("New products:", newProducts);
      return { products: newProducts };
    }),
}));

export default useStore;

