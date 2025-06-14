//zustand的狀態管理
//自定義的hook
//需要添加或移除商品的時候，可以調用該hook，component會在狀態改變時進行render

/* 
  set:function，set and grab the value of the state currently， manipulate it，then return a new one
  state：是zustand傳給set的當前整個store的狀態
*/
import { create } from "zustand";
import Product from "../models/Products";

// type of state
type ProductStoreType = {
  selectedProducts: Product[];
  addProduct: (product: Product) => void;
  clearProducts: () => void;
};

export const useProductStore = create<ProductStoreType>((set) => ({
  selectedProducts: [],
  addProduct: (product) => {
    set((state) => {
      // check if item exists in the current selectedProducts
      const exist = state.selectedProducts.some((p) => p.code === product.code);
      // if it exists, remove it
      if (exist) {
        return {
          selectedProducts: state.selectedProducts.filter(
            (p) => p.code !== product.code
          ),
        };
      }
      // if it doesn't exist, add it
      return {
        selectedProducts: [...state.selectedProducts, product],
      };
    });
  },
  clearProducts: () => set({ selectedProducts: [] }),
}));
