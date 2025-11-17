"use client";

import { useTranslation } from "react-i18next";
import { CardDemo } from "@/components/shared/Contactus";
import Hero from "@/components/shared/Hero";
import Headings from "@/components/ui/headings";
import Info from "@/components/ui/info";
import ProductCard from "@/components/ui/prodcutcard";
import Carouselsection from "@/components/ui/testimonials";

export default function Home() {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      {/* hero section */}
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        img="/Hero1.jpg"
        button={true}
      />

      {/* innovations */}
      <section className="bg-foreground/5 py-20">
        <Headings
          title={t("innovations.title")}
          subtitle={t("innovations.subtitle")}
        />
        <ProductCard />
      </section>

      {/* Our Commitment */}
      <section className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-6">
        <div
          className={`flex flex-col items-start md:w-1/2 lg:w-2/5 ${
            i18n.language === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h6 className="text-sm text-main font-medium">
            {t("commitment.subtitle")}
          </h6>
          <h2 className="text-2xl sm:text-3xl font-semibold py-2">
            {t("commitment.title")}
          </h2>
          <p className="text-sm text-foreground/40 max-w-xl">
            {t("commitment.description")}
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
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
          />
          <div className="mt-10">
            <Carouselsection />
          </div>
        </section>
      </section>

      {/* Contact us */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h6 className="text-sm text-main font-medium">
          {t("contact.subtitle")}
        </h6>
        <Headings
          title={t("contact.title")}
          subtitle={t("contact.description")}
        />

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
