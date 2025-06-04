import Product from "../models/Products";
import React, { useState } from "react";
import { useProductStore } from "../store/productStore";

// interface SelectedListProps {
//   product: Product;
// }

const SelectedList: React.FC = () => {
  // const { selectedProducts, clearProducts } = useProductStore(
  //   (state) => ({
  //     selectedProducts: state.selectedProducts,
  //     // addProduct: state.addProduct,
  //     clearProducts: state.clearProducts,
  //   })
  // );

  const selectedProducts = useProductStore((state) => state.selectedProducts);
  const addProduct = useProductStore((state) => state.addProduct);
  const clearProducts = useProductStore((state) => state.clearProducts);

  return (
    <div>
      <h2>selectedProduct</h2>
      <button onClick={() => clearProducts()}>clearProducts</button>
      {selectedProducts.map((product) => (
        <div key={product.code}>
          <span>{product.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SelectedList;
