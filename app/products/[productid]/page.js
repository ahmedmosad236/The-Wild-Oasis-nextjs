import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

async function fetchProduct(productId) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (!res.ok) throw new Error("Failed to fetch product data");
    return await res.json();
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.productid);
  return { title: product ? `Product: ${product.title}` : "Product Not Found" };
}
// export async function generateStaticParams() {
//   const products = await fetchProduct();
//   console.log(products);

//   const ids = products.map((product) => ({
//     productid: String(product.id),
//   }));
//   console.log(ids);

//   return ids;
// }
export async function generateStaticParams() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const products = await res.json();

    console.log("Products:", products);

    const ids = products.map((product) => ({
      productid: String(product.id),
    }));

    console.log("Generated IDs:", ids);

    return ids;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}
export default async function Page({ params }) {
  const product = await fetchProduct(params.productid);

  if (!product) return null;

  const { title, price, description, image, category, rating } = product;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image width={300} height={300} src={image} alt={title} />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 bg-primary-950 p-6 pb-1 w-[150%] -translate-x-[254px]">
            {title}
          </h3>
          <p className="text-lg text-primary-300 mb-10">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Rated <span className="font-bold">{rating?.rate}</span> by{" "}
                <span className="font-bold">{rating?.count}</span> users
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Category: <span className="font-bold">{category}</span>
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                High demand! Limited stock available.
              </span>
            </li>
          </ul>

          <p className="text-4xl font-semibold">
            ${price}{" "}
            <span className="text-primary-400 text-lg">/ per item</span>
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Order now. Fast delivery available.
        </h2>
      </div>
    </div>
  );
}
