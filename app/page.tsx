"use client";

import React from "react";
import { getProducts } from "./utils/dataFetcher";
import ProductCard from "./components/ProductCard";
import Product from "./models/Products";
import { useQuery } from "@tanstack/react-query";


export default function Home() {

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });



  return (
    <div className="container mx-auto">
      <header className="p-4">
        <h1 className="text-black font-bold text-center text-3xl bg-gray-200 py-8 px-6 rounded-md">
          Header
        </h1>
      </header>

      <div className="flex">
        <aside className="rounded-md p-4">
          <h2 className="text-black bg-gray-200 py-100 px-10 rounded-md">
            Left
          </h2>
        </aside>

        <main className="flex-auto p-4 rounded-md bg-gray-200">
    

          <div className="flex-auto p-4 rounded-md grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
          </div>

          
        </main>

        <aside className="rounded-md p-4">
          <h2 className="text-black bg-gray-200 py-100 px-10 rounded-md">
            Right
          </h2>
        </aside>
      </div>
    </div>
  );
}
