import React from "react";
import Product from "../models/Products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);

  return (
    <div className="border p-4 rounded">
      <div className=" ">
        <Image
          src={product?.images?.[0]?.url || "file.svg" }
          alt={product.name || "Product image"}
          width={300}
          height={200}
          className="object-cover rounded-md"
        />
      </div>

      <h3 className=" ">{product.name}</h3>
      {product.price?.formattedValue && <p>{product.price.formattedValue}</p>}
    </div>
  );
};

export default ProductCard;
