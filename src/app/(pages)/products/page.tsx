import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Anti-Hair Loss Treatment",
    description:
      "A powerful, science-backed formula to combat hair loss and promote healthy growth.",
  },
  {
    id: 2,
    title: "Brightening Skin Cream",
    description:
      "Formulated to reduce dark spots and enhance your natural glow for radiant, even-toned skin.",
  },
  {
    id: 3,
    title: "Hydrating Face Serum",
    description:
      "Deeply hydrates and revitalizes your skin, leaving it soft, plump, and youthful-looking.",
  },
  {
    id: 4,
    title: "Purifying Facial Cleanser",
    description:
      "Gently removes impurities while maintaining your skin’s natural balance for a fresh, clean feel.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <header className="flex flex-col justify-center items-center text-center gap-5 mt-24 mb-5">
        <h3 className="text-4xl font-bold">Our Dermatological Solutions</h3>
        <p className="max-w-md">
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
