import { Button } from "./button";

const products = [
  {
    img: "/product1.jpg",
    brand: "Kelden Laboratory",
    name: "Facial Cleanser",
    desc: "Sebum Control",
  },
  {
    img: "/product2.jpg",
    brand: "Kelden Laboratory",
    name: "Skin Serum",
    desc: "Moisturize & Rejuvenate",
  },
  {
    img: "/product1.jpg",
    brand: "Kelden Laboratory",
    name: "Facial Cleanser",
    desc: "Sebum Control",
  },

];

function ProductCard() {
  return (
    <section className="flex flex-col items-center">
      <div className="container p-5 sm:p-0 mx-auto flex flex-wrap justify-center gap-8 justify-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative max-w-md h-full sm:h-96  rounded-2xl overflow-hidden shadow-md bg-background cursor-pointer"
          >
            {/* product */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* tap to see details */}
            <div className="absolute bottom-4 inset-x-0 flex items-center justify-center opacity-80 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-white text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                Tap to see details
              </span>
            </div>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-2 text-white">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mb-2 opacity-90 transition-transform duration-500 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>

              {/* details */}
              <h2 className="text-2xl font-semibold">{product.brand}</h2>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <h6 className="text-sm text-white/80">{product.desc}</h6>
            </div>
          </div>
        ))}
      </div>
      <Button variant="main" className="mt-10">View All Products</Button>
    </section>
  );
}

export default ProductCard;
