import Product from "../models/Products";
import React, { useState } from "react";
import { useProductStore } from "../store/productStore";
import { useShallow } from "zustand/shallow";

const SelectedList: React.FC = () => {
  const { selectedProducts, clearProducts } = useProductStore(
    useShallow((state) => ({
      selectedProducts: state.selectedProducts,
      clearProducts: state.clearProducts,
    }))
  );

  return (
    <div>
      <div className=" bg-gray-100 px-6 py-4 ">
        <h2 className="text-xl font-semibold text-gray-300 text-center">
          Selected Products
        </h2>

        <div className="flex flex-wrap gap-2">
          {selectedProducts.map((product) => (
            <span
              key={product.code}
              className="text-s text-blue-400 whitespace-nowrap border px-2 py-1 rounded"
            >
              {product.name}
            </span>
          ))}
        </div>

        <button
          className="absolute top-4 right-10 border border-blue-400 text-blue-400 px-3 py-1 rounded-lg hover:bg-blue-100 cursor-pointer"
          onClick={() => clearProducts()}
        >
          clearProducts
        </button>
      </div>
    </div>
  );
};

export default SelectedList;
