import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/hooks/fetchData";

async function ProductList({ filter }) {
  const products = await fetchProducts();
  let applyProducts;
  if (filter === "all") applyProducts = products;
  if (filter === "low")
    applyProducts = products.filter((product) => product.rating.rate <= 2);
  if (filter === "medium")
    applyProducts = products.filter((product) => product.rating.rate <= 4);
  if (filter === "high")
    applyProducts = products.filter((product) => product.rating.rate > 4);
  if (!products.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {applyProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
