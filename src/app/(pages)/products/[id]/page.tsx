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
    <div className="container mx-auto my-20 px-4">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/product.png"
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-main mb-6 text-lg">{product.description}</p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Experience Oynex Pharma&apos;s advanced dermatological innovation —
            a perfect blend of science and skincare excellence.
          </p>

          {/* Key Benefits */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Clinically tested and dermatologist approved</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Suitable for all skin types</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Free from parabens and harmful chemicals</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Visible results in 4-6 weeks</span>
              </li>
            </ul>
          </div>

          {/* Product Info */}
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Size</p>
                <p className="font-semibold">50ml / 1.7 fl oz</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Type</p>
                <p className="font-semibold">Topical Treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-main text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Cleanse</h3>
            <p className="text-gray-600 text-sm">
              Start with clean, dry skin. Wash your face with a gentle cleanser
              and pat dry.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-main text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Apply</h3>
            <p className="text-gray-600 text-sm">
              Apply a small amount to the affected area. Massage gently until
              fully absorbed.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-main text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Repeat</h3>
            <p className="text-gray-600 text-sm">
              Use twice daily, morning and evening, for optimal results.
            </p>
          </div>
        </div>
      </div>

      {/* Key Ingredients Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Ingredients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Hyaluronic Acid</h3>
            <p className="text-gray-600 text-sm">
              A powerful hydrating agent that retains moisture and plumps the
              skin, reducing the appearance of fine lines.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Vitamin C</h3>
            <p className="text-gray-600 text-sm">
              A potent antioxidant that brightens skin tone, boosts collagen
              production, and protects against environmental damage.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Peptide Complex</h3>
            <p className="text-gray-600 text-sm">
              Advanced peptides that support skin&apos;s natural regeneration
              process and improve elasticity.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Niacinamide</h3>
            <p className="text-gray-600 text-sm">
              Helps minimize pores, even out skin tone, and strengthen the
              skin&apos;s protective barrier.
            </p>
          </div>
        </div>
      </div>

      {/* Clinical Results Section */}
      <div className="bg-linear-to-r from-main to-blue-600 text-white rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">Clinical Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">94%</p>
            <p className="text-sm opacity-90">
              of users saw visible improvement
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">87%</p>
            <p className="text-sm opacity-90">reported smoother skin texture</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">91%</p>
            <p className="text-sm opacity-90">would recommend to others</p>
          </div>
        </div>
        <p className="text-sm mt-6 opacity-75">
          *Based on a 8-week clinical study with 150 participants
        </p>
      </div>

      {/* Safety Information */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Safety Information</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• For external use only</li>
          <li>
            • Avoid contact with eyes. If contact occurs, rinse thoroughly with
            water
          </li>
          <li>• Discontinue use if irritation or rash occurs</li>
          <li>• Keep out of reach of children</li>
          <li>• Store in a cool, dry place away from direct sunlight</li>
          <li>
            • Consult a healthcare professional if you are pregnant or nursing
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold mb-2">
              How long does it take to see results?
            </h3>
            <p className="text-gray-600 text-sm">
              Most users notice visible improvements within 4-6 weeks of
              consistent use. For optimal results, continue using the product
              for at least 8-12 weeks.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold mb-2">
              Can I use this with other skincare products?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes, this product is designed to integrate seamlessly into your
              existing skincare routine. Apply it after cleansing and before
              moisturizing.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold mb-2">
              Is this product suitable for sensitive skin?
            </h3>
            <p className="text-gray-600 text-sm">
              Our formula is dermatologist-tested and suitable for most skin
              types, including sensitive skin. However, we recommend doing a
              patch test before full application.
            </p>
          </div>
        </div>
      </div>

      {/* Certification Badges */}
      <div className="text-center py-8">
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🧪</span>
            </div>
            <p className="text-xs text-gray-600">
              Clinically
              <br />
              Tested
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🌿</span>
            </div>
            <p className="text-xs text-gray-600">
              Natural
              <br />
              Ingredients
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🐰</span>
            </div>
            <p className="text-xs text-gray-600">
              Cruelty
              <br />
              Free
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">✓</span>
            </div>
            <p className="text-xs text-gray-600">
              Dermatologist
              <br />
              Approved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
