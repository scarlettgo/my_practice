"use client";

import React, { useCallback, useState } from "react";
import { getProducts } from "../../utils/dataFetcher";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function DetailPage() {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const params = useParams();
  const code = params.code;
  const router = useRouter();
  const [product] = products.filter((p) => p.code === code);

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  return (
    <div className="p-8">
      <button
        onClick={handleBack}
        className="rounded bg-gray-100 p-3 font-bold "
      >
        back
      </button>

      <div className="border-gray-10 shadow-sm p-8">
        <h1 className="text-2xl text-bold text-center">{product.name}</h1>
        <p className="text-2xl text-blue-500 p-5">
          {product.price?.formattedValue}
        </p>
        <p className="text-green-400 text-2xl p-5">
          {product.stock?.stockLevelStatus?.code}
        </p>
        <p>{product.description}</p>
        <div>
          <Image
            src={product?.images?.[0]?.url || "file.svg"}
            alt={product.name}
            width={300}
            height={200}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
