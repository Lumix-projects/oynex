"use client";

import HeroSection from "@/components/shared/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t, i18n } = useTranslation("common");
  const isRtl = i18n.language === "ar";

  return (
    <>
      <HeroSection
        img="/about.jpg"
        subtitle={t("about.hero.subtitle")}
        title={t("about.hero.title")}
      />
      <main
        className="container mx-auto my-20  gap-8 px-4 md:px-8 xl:px-0"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Main Content */}
        <div className="space-y-10 xl:space-y-14 col-span-1 xl:col-span-3">
          <AboutSection
            title={t("about.ourStory.title")}
            subtitle={t("about.ourStory.subtitle")}
          >
            <p>{t("about.ourStory.paragraph1")}</p>
            <p>{t("about.ourStory.paragraph2")}</p>
          </AboutSection>

          <AboutSection
            title={t("about.researchPhilosophy.title")}
            subtitle={t("about.researchPhilosophy.subtitle")}
          >
            <p>{t("about.researchPhilosophy.paragraph1")}</p>
            <p>{t("about.researchPhilosophy.paragraph2")}</p>
          </AboutSection>

          <AboutSection
            title={t("about.ourCommitment.title")}
            subtitle={t("about.ourCommitment.subtitle")}
          >
            <p>{t("about.ourCommitment.paragraph1")}</p>
          </AboutSection>
        </div>

        {/* Certification Box */}

        {/* Call to action */}
        <div className="xl:col-span-4 flex flex-col items-center justify-center gap-5 md:gap-7 p-10 mt-20 rounded-xl shadow bg-main text-white text-center">
          <h2 className="text-xl md:text-3xl font-bold">{t("about.cta.title")}</h2>
          <p className="text-sm md:text-base max-w-md text-center">{t("about.cta.subtitle")}</p>

          <Button className="rounded-full" size={"lg"} asChild>
            <Link href={"/products"}>{t("about.cta.button")}</Link>
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
      <header className="space-y-1 mb-3">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-main">{subtitle}</p>
      </header>
      <main className="space-y-3 font-light">{children}</main>
    </section>
  );
}

