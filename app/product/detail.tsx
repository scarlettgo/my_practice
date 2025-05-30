import React from "react";
import { getProducts } from "../utils/dataFetcher";
import { useQuery } from "@tanstack/react-query";

export default function ProductDetail() {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div>
      <h1>Product Detail Page</h1>
    </div>
  );
}
