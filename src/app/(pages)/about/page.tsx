import HeroSection from "@/components/shared/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        img="/about.jpg"
        subtitle="Discover our cutting-edge research philosophy and unwavering commitment to advancing dermatology and skincare for a healthier future."
        title="Pioneering Dermatological Innovation"
      />
      <main className="container mx-auto my-20 grid grid-cols-1 xl:grid-cols-4 gap-8 px-4 md:px-8 xl:px-0">
        {/* Main Content */}
        <div className="space-y-10 xl:space-y-14 col-span-1 xl:col-span-3">
          {/* Our Story */}
          <AboutSection
            title="Our Story"
            subtitle="Delve into the founding vision, rich history, and the core mission
              that drives Oynex Pharma forward."
          >
            <p>
              Oynex Pharma was founded with a singular vision: to bridge the gap
              between scientific innovation and everyday skincare. Our journey
              began over a decade ago, driven by a team of passionate
              dermatologists and researchers dedicated to creating solutions
              that are not only effective but also safe and accessible
            </p>
            <p>
              We believe in a science-first approach, ensuring every product is
              backed by rigorous research and clinical evidence to deliver
              tangible results and foster healthy, resilient skin for life.
            </p>
          </AboutSection>

          {/* Research Philosophy */}
          <AboutSection
            title="Research Philosophy"
            subtitle="Our dedication to science is the cornerstone of our product development, from ingredient sourcing to final formulation"
          >
            <p>
              At Oynex, our research is guided by three core principles: safety,
              efficacy, and sustainability. We meticulously source our
              ingredients from trusted global partners, ensuring purity and
              potency. Our state-of-the-art laboratories are equipped with
              advanced technology that allows our scientists to explore novel
              compounds and delivery systems, pushing the boundaries of
              what&apos;s possible in skincare.
            </p>
            <p>
              Every formula undergoes extensive clinical testing to validate its
              performance and safety profile. We are transparent about our
              research, publishing our findings and collaborating with the
              broader scientific community to advance dermatological knowledge
              for everyone.
            </p>
          </AboutSection>

          {/* Our Commitment */}
          <AboutSection
            title="Our Commitment"
            subtitle="We are committed to quality, safety, and empowering individuals with the knowledge to achieve their best skin health."
          >
            <p>
              Our commitment extends beyond creating exceptional products. We
              are dedicated to educating consumers about skin health, providing
              them with the tools and information needed to make informed
              decisions. We adhere to the highest manufacturing standards,
              ensuring that every product that leaves our facility is of the
              utmost quality. At Oynex Pharma, we&apos;re not just creating
              skincare; we&apos;re building a community founded on trust,
              science, and a shared passion for healthy skin.
            </p>
          </AboutSection>
        </div>

        {/* Certification Box */}
        <CertificationBox />

        {/* Call to action */}
        <div className="xl:col-span-4 flex flex-col items-center justify-center gap-5 md:gap-7 p-10 rounded-xl shadow bg-main text-white text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Ready to Explore Our Innovations?
          </h2>
          <p className="text-sm md:text-base max-w-md text-center">
            Discover the science behind our products or delve deeper into our
            latest research breakthroughs.
          </p>

          <Button className="rounded-full" size={"lg"} asChild>
            <Link href={"/products"}>Explore Our Products</Link>
          </Button>
        </div>
      </main>
    </>
  );
}

function AboutSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b-4 border-main/50 pb-5">
      {/* Section Heading */}
      <header className="space-y-1 mb-3">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-main">{subtitle}</p>
      </header>

      <main className="space-y-3 font-light">{children}</main>
    </section>
  );
}

function CertificationBox() {
  return (
    <div className="col-span-1">
      <div className="sticky top-20 border border-border rounded-lg p-5">
        <h3 className="mb-3 font-bold text-xl">Certification & Accolades</h3>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>GMP Certified Facility</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our manufacturing processes adhere to Good Manufacturing
                Practices, ensuring the highest quality апа safety standards.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>IS0 9001:2015</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our manufacturing processes adhere to Good Manufacturing
                Practices, ensuring the highest quality апа safety standards.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Dermatology Innovation Award</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our manufacturing processes adhere to Good Manufacturing
                Practices, ensuring the highest quality апа safety standards.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ethical Sourcing Endorsement</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our manufacturing processes adhere to Good Manufacturing
                Practices, ensuring the highest quality апа safety standards.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
