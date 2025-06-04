"use client";

import React from "react";
import { getProducts } from "../../utils/dataFetcher";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function DetailPage() {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const params = useParams();
  const code = params.code;
  const [product] = products.filter((p) => p.code === code);

  // products.filter(function (p) {
  //   return p.code === code;
  // });

  const handleBack = () => {
    window.history.go(-1);
  };

  return (
    <div>
      <button
        onClick={handleBack}
        className="rounded bg-gray-100 p-3 font-bold"
      >
        back
      </button>

      <div>
        <h1 className="text-3xl text-bold text-center">{product.name}</h1>
        <div>
          <Image
            src={product?.images?.[0]?.url || "file.svg"}
            alt={product.name || "Product image"}
            width={300}
            height={200}
            className="object-cover rounded-md"
          />
        </div>
        <p className="bg-gray-100 text-center text-blue-500">
          {product.price?.formattedValue}
        </p>
        <h1>{product.description}</h1>
      </div>

      
    </div>
  );
}
