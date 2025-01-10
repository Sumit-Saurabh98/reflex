import { create } from "zustand";
import reflex from "@/lib/reflex";
import { toast } from "react-hot-toast";

interface IProduct {
  _id: string;
  images: string[];
  title: string;
  specifications: {
    processor: string;
    windows: string;
    screen: number;
    force: string;
    storage: string;
  };
  discountedPrice: number;
  mrp: number;
  color: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ProductStore {
  products: IProduct[];
  product: IProduct | null;
  loadingProduct: boolean;
  getProducts: () => Promise<void>;
  getSingleProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  product: null,
  loadingProduct: false,

  getProducts: async () => {
    set({ loadingProduct: true });
    try {
      const res = await reflex.get("/product");
      set({ products: res.data.products });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      set({ loadingProduct: false });
    }
  },

  getSingleProduct: async (id: string) => {
    console.log("function called");
    set({ loadingProduct: true });
    try {
      const res = await reflex.get(`/product/${id}`);
      console.log(res.data, "single product data from store");
      set({ product: res.data.product });
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      set({ loadingProduct: false });
    }
  },
}));
