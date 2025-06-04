import Product from "../models/Products";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    setPreview((prev) => !prev);
  };

  return (
    <div className="border p-4 rounded">
      <div>
        <Image
          src={product?.images?.[0]?.url || "file.svg"}
          alt={product.name || "Product image"}
          width={300}
          height={200}
          className="object-cover rounded-md"
        />
      </div>

      <h1 className=" ">{product.name}</h1>

      <button
        onClick={handlePreview}
        className="bg-blue-200 rounded-md font-bold p-2 cursor-pointer"
      >
        {preview ? "Hide" : "Preview"}
      </button>

      {preview && ( //when Preview is true, show the price
        <div>
          <p className="bg-gray-100 text-center text-blue-500">
            {product.price?.formattedValue}
          </p>
        </div>
      )}

      <Link
        href={`/product/${product.code}`}
        className="rounded bg-gray-100 p-3 font-bold"
      >
        Detail
      </Link>
    </div>
  );
};

export default ProductCard;
