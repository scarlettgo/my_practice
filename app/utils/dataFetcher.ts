import axios from "axios";
import type Product from "../models/Products";


interface ApiResponse {
  products: Product[];
}

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get<ApiResponse>("/data.json");
  return response.data.products;
}


