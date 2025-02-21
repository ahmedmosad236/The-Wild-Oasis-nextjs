import React, { Suspense } from "react";
import CabinCard from "../_components/ProductCard";
import axios from "axios";
import ProductCard from "../_components/ProductCard";
import ProductList from "../_components/ProductList";
import Spinner from "../_components/Spinner";
export const metadata = {
  title: "Products",
};

export default async function Page() {
  // CHANGE
  // const res = await axios.get("https://fakestoreapi.com/products");
  // console.log(res.data);

  // const products = res.data;

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Products
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
