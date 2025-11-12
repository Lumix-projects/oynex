import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
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

  const details = product.details;

  return (
    <div className="min-h-screen pt-10 bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Link
          href="/products"
          className="group inline-block text-main my-5 transition-all duration-300"
        >
          ← <span className="group-hover:ps-2 transition-all duration-300"> Back To Products</span>
        </Link>
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative w-full h-[500px] md:h-[900px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src={product.img}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
                {product.title}
              </h1>
              <p className="text-main text-xl font-medium mb-4">
                {product.description}
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {details.longDescription}
              </p>
            </div>

            {/* Product Specs */}
            <div className="flex gap-4">
              <div className="flex-1 bg-foreground/20 border-2 border-foreground/20 rounded-xl p-4 text-center hover:border-main transition-colors">
                <p className="text-main font-bold text-md mb-1">Size</p>
                <p className="font-bold text-lg text-foreground">{details.productInfo.size}</p>
              </div>
              <div className="flex-1 bg-foreground/20 border-2 border-foreground/20 rounded-xl p-4 text-center hover:border-main transition-colors">
                <p className="text-main font-bold text-md mb-1">Type</p>
                <p className="font-bold text-lg text-foreground">{details.productInfo.type}</p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-main/70 rounded-2xl p-6 border border-main/20">
              <h3 className="text-xl font-bold mb-4 text-white">Key Benefits</h3>
              <ul className="space-y-3">
                {details.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-main mr-3 text-xl font-bold">✓</span>
                    <span className="text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-foreground/10 rounded-3xl shadow-xl p-10 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Who Should Use This?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {details.howToUse.map((step) => (
              <div key={step.step} className="flex gap-4 p-5 rounded-2xl bg-background border border-background hover:border-main/30 hover:shadow-md transition-all">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-linear-to-br from-main to-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2 text-base text-foreground">{step.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Ingredients */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Key Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.keyIngredients.map((group, i) => (
              <div key={i} className="bg-foreground/10 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-foreground/20">
                <h3 className="font-bold text-xl mb-5 text-foreground">{group.category}</h3>
                <ul className="space-y-3">
                  {group.ingredients.map((ing, j) => (
                    <li key={j} className="text-foreground/70">
                      <span className="font-semibold text-main">{ing.name}:</span> {ing.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Information */}
        <div className="bg-linear-to-r from-main to-blue-600 border-2 border-foreground/20 rounded-2xl p-8 mb-20 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <span className="text-3xl mr-3">⚠️</span>
            Safety Information
          </h2>
          <ul className="space-y-3">
            {details.safetyInfo.map((info, i) => (
              <li key={i} className="flex items-start text-white/70">
                <span className="text-yellow-600 mr-3 font-bold">•</span>
                <span>{info}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {details.faq.map((item, i) => (
              <div key={i} className="bg-foreground/10 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border border-foreground/20">
                <h3 className="font-bold text-lg mb-3 text-foreground">{item.question}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-foreground/10 rounded-3xl p-12">
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {details.badges.map((badge, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 bg-background/80 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all">
                  <span className="text-3xl">{badge.icon}</span>
                </div>
                <p className="text-sm text-foreground/70 font-medium whitespace-pre-line">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}