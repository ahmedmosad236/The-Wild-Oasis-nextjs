import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";

async function ProductList() {
  const res = await axios.get("https://fakestoreapi.com/products");
  console.log(res.data);

  const products = res.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
