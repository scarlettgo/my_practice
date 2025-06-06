import Product from "../models/Products";
import Image from "next/image";
import React, { useState, useContext, createContext } from "react";
import Link from "next/link";
import { useProductStore } from "../store/productStore";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [preview, setPreview] = useState(false);
  const handlePreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPreview((prev) => !prev);
    e.stopPropagation();
  };
  const addProduct = useProductStore((state) => state.addProduct);

  const exist = useProductStore((state) =>
    state.selectedProducts.some((p) => p.code === product.code)
  );

  return (
    <div
      className={`shadow p-4 rounded-2xl  border border-gray-100 hover:shadow-blue-300 
      ${exist ? "bg-blue-50" : "bg-white-100"}`}
      onClick={() => addProduct(product)}
    >
      <div>
        <Image
          src={product?.images?.[0]?.url || "file.svg"}
          alt={product.name || "Product image"}
          width={300}
          height={200}
          className="object-cover rounded-md"
        />
      </div>

      <h1 className="text-bold">{product.name}</h1>
      <div className="flex space-x-22 ">
        <button
          onClick={handlePreview}
          className="shadow bg-blue-100 rounded-lg font-bold p-2 cursor-pointer hover:bg-blue-200"
        >
          {preview ? "Hide" : "Preview"}
        </button>
        <Link
          href={`/product/${product.code}`}
          className="shadow rounded-lg bg-gray-100 p-3 font-bold hover:bg-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          Detail
        </Link>
      </div>

      {preview && ( //when Preview is true, show the price
        <div className="">
          <p className="bg-gray-50 break-words">{product.code}</p>
          <span className="bg-gray-100 text-center text-blue-600 text-xl">
            {product.price?.formattedValue}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
