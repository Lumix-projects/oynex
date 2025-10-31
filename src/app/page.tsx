import { CardDemo } from "@/components/shared/Contactus";
import Hero from "@/components/shared/Hero";
import Headings from "@/components/ui/headings";
import ProductCard from "@/components/ui/prodcutcard";
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
      <section className="bg-foreground/5 py-20">
        <Headings title="Discover Our Innovations" subtitle="Redefining beauty through precision and innovation." />
        <ProductCard />
      </section>

      {/* Our Commitment */}
      <section className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-6">
        <div className="flex flex-col items-start text-left md:w-1/2 lg:w-2/5">
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
        <div className="w-full md:w-1/2 lg:w-2/5">
          <img src="/doctor.jpg" alt="" className="w-full rounded-3xl" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-foreground/5">
        <section className="container mx-auto py-16 px-6 text-center">
          <Headings
            title="Trusted by Professionals, Loved by You"
            subtitle="Hear what our customers and dermatologists have to say about their experience with Oynex Pharma."
          />

          <div className="mt-10">
            <Carouselsection />
          </div>
        </section>
      </section>

      {/* contact us */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h6 className="text-sm text-main font-medium">Our Commitment</h6>
        <Headings title="Contact Oynex Pharma" subtitle="We're here to answer any questions you may have about our products, research, or brand. Whether you're a customer, a potential partner, or a healthcare professional, we look forward to hearing from you." />
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-center max-w-6xl gap-5 px-4 py-10">
          {/* Form Section */}
          <CardDemo />

          {/* Side Section */}
          <div className="flex-1 flex items-center justify-center">
            <div>test</div>
          </div>
        </div>      </section>
    </>
  )
}
