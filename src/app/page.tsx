import { CardDemo } from "@/components/shared/Contactus";
import Hero from "@/components/shared/Hero";
import Headings from "@/components/ui/headings";
import Info from "@/components/ui/info";
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
        <Headings
          title="Discover Our Innovations"
          subtitle="Redefining beauty through precision and innovation."
        />
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
            Our commitment to dermatological research is at the heart of
            everything we do. We leverage cutting-edge science and
            clinically-proven ingredients to create formulations that are both
            safe and exceptionally effective. Our state-of-the-art laboratories
            are dedicated to pioneering the next generation of skincare, where
            every ingredient is meticulously selected for its purity, potency,
            and proven benefits for skin health.
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
        <Headings
          title="Contact Oynex Pharma"
          subtitle="We're here to answer any questions you may have about our products, research, or brand. Whether you're a customer, a potential partner, or a healthcare professional, we look forward to hearing from you."
        />

        {/* contact form */}
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-5 px-4 py-10">
          {/* form section */}
          <CardDemo />

          {/* information section */}
          <div>
            <div className="flex flex-col gap-2">
              <Info />
              {/* Map Section */}
              <div className="flex-1">
                <div className="w-full border rounded-md overflow-hidden">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1242112084715!2d31.342410776358655!3d30.06197387491485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e7228cb188b%3A0x703d99e90c6fd3f9!2sMakram%20Ebeid%2C%20Al%20Mintaqah%20as%20S%C4%81disah%2C%20Nasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1761916432095!5m2!1sen!2seg"
                    width="100%"
                    height="50%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
