import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <header className="flex flex-col justify-center items-center text-center gap-3 mt-24 mb-5">
        <h3 className="text-4xl font-bold">Our Dermatological Solutions</h3>
        <p className="max-w-lg text-main">
          Discover Oynex Pharma&apos;s commitment to science-backed skincare and
          product quality, designed to deliver exceptional results for your skin
          health.
        </p>
      </header>

      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src="/product.png"
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="px-4 py-6">
              {/* Product Info */}
              <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
              <p className="text-sm text-main mb-4">{product.description}</p>

              <Link
                href={`/products/${product.id}`}
                className="text-white bg-main px-4 py-2 rounded-full hover:opacity-90 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
