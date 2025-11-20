"use client";
import { Link } from "@/i18n/navigation";
import { Button } from "./button";
import { useLocalization } from "@/hooks/useLocalization";
import Image from "next/image";
import { productsAR, productsEN } from "@/lib/products";

function ProductCard() {
  const { t, isRtl, locale } = useLocalization();
  const products = locale === "ar" ? productsAR : productsEN;

  return (
    <section className="flex flex-col items-center" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container p-5 sm:p-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col items-center text-center rounded-2xl shadow-md shadow-foreground/5 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl max-w-sm first:place-self-end last:place-self-start"
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
                {t("productsPage.viewDetails")}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Button variant="main" className="mt-10" asChild>
        <Link href={"/products"}>{t("products.viewAll")}</Link>
      </Button>
    </section>
  );
}

export default ProductCard;
