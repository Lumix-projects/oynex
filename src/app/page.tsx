import Hero from "@/components/shared/Hero";
import Headings from "@/components/ui/headings";
import ProductCard from "@/components/ui/prodcutcard";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <Hero
        title="Revolutionizing Skincare Through Dermatological Science"
        subtitle="Experience the pinnacle of dermatological innovation with our scienfically-formulated skincare products, designed to deliver visible results and promote lasting skincare"
        img="/Hero1.jpg"
        button={true}
      />

      {/* innovations */}
      <section className="bg-foreground/10 py-20">
      <Headings title="Discover Our Innovations" subtitle="Redefining beauty through precision and innovation." />
      <ProductCard />
      </section>
    </>
  )
}
