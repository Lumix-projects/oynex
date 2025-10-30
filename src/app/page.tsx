import Hero from "@/components/shared/Hero";
import Headings from "@/components/ui/headings";
import ProductCard from "@/components/ui/prodcutcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Carouselsection from "@/components/ui/testimonials";

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

      {/* Our Commitment */}
      <section className="container mx-auto flex flex-wrap justify-center items-center gap-10 py-20 px-6">
        <div className="flex w-full md:w-1/2 flex-col items-start text-left">
          <h6 className="text-sm text-main font-medium">Our Commitment</h6>
          <h2 className="text-2xl sm:text-3xl font-semibold py-2">
            The Science Behind Oynex
          </h2>
          <p className="text-sm text-foreground/40 max-w-xl">
            Our commitment to dermatological research is at the heart of everything
            we do. We leverage cutting-edge science and clinically-proven ingredients
            to create formulations that are both safe and exceptionally effective.
            Our state-of-the-art laboratories are dedicated to pioneering the next
            generation of skincare, where every ingredient is meticulously selected
            for its purity, potency, and proven benefits for skin health.
          </p>
        </div>
        <div>
          <img src="/doctor.jpg" alt="" className="w-100 rounded-3xl" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-16 px-6 text-center">
        <Headings
          title="Trusted by Professionals, Loved by You"
          subtitle="Hear what our customers and dermatologists have to say about their experience with Oynex Pharma."
        />

        <div className="mt-10">
          <Carouselsection />
        </div>
      </section>

    </>
  )
}
