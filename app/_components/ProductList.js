import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/hooks/fetchData";

async function ProductList() {
  const products = await fetchProducts();

  if (!products.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
