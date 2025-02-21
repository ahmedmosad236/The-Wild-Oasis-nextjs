import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="flex border border-primary-800 rounded-lg overflow-hidden shadow-lg bg-primary-950">
      {/* Product Image */}
      <Image
        src={image}
        width={300}
        height={200}
        alt={title}
        className="w-1/3 object-cover border-r border-primary-800"
      />

      {/* Product Details */}
      <div className="flex-grow p-5">
        <h3 className="text-accent-500 font-semibold text-xl mb-2">{title}</h3>
        <p className="text-primary-200 text-sm mb-3">
          {description.slice(0, 80)}...
        </p>

        {/* Category & Rating */}
        <div className="flex justify-between items-center mb-3">
          <span className="bg-accent-600 text-primary-900 text-xs px-2 py-1 rounded">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <UsersIcon className="h-4 w-4 text-yellow-400" />
            <span className="text-primary-200 text-sm">
              {rating.rate} ({rating.count})
            </span>
          </div>
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold text-primary-100">${price}</p>

        {/* Button */}
        <div className="mt-4 text-right">
          <Link
            href={`/products/${id}`}
            className="border border-primary-800 py-2 px-4 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
