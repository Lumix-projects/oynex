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

      <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col items-center text-center rounded-2xl shadow-md shadow-foreground/5 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Product Image */}
            <div className="relative w-full h-96 overflow-hidden rounded-t-2xl">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* subtle overlay for contrast */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
            </div>

            {/* Product Content */}
            <div className="px-5 py-6 bg-foreground/5 flex flex-col items-center justify-between flex-1">
              <div className="transition-all duration-500 group-hover:-translate-y-1">
                <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                <p className="text-sm text-main mb-4">{product.description}</p>
              </div>

              <Link
                href={`/products/${product.id}`}
                className="text-white bg-main px-5 py-2 rounded-full hover:opacity-90 transition-all duration-300 group-hover:scale-105"
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
