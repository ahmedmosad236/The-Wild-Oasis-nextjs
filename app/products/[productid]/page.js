import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default async function Page({ params }) {
  // Fetch product data (Replacing cabin data)
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productid}`
  );
  const product = await res.json();
  console.log(params);

  // Destructure the product properties
  const { id, title, price, description, image, category, rating } = product;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        {/* Product Image */}
        <div className="relative scale-[1.15] -translate-x-3">
          <Image width={300} height={300} src={image} alt={title} />
        </div>

        {/* Product Details */}
        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
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

          {/* Price */}
          <p className="text-4xl font-semibold">
            ${price}{" "}
            <span className="text-primary-400 text-lg">/ per item</span>
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div>
        <h2 className="text-5xl font-semibold text-center">
          Order now. Fast delivery available.
        </h2>
      </div>
    </div>
  );
}
