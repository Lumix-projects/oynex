import { products } from "@/lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductDetailsProps {
  params: {
    id: string;
  };
}
export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/product.png"
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-main mb-6 text-lg">{product.description}</p>
          <p className="text-gray-700 mb-6">
            Experience Oynex Pharma’s advanced dermatological innovation — a
            perfect blend of science and skincare excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
