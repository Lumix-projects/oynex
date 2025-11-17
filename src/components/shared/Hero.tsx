"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface HeroProps {
  img: string;
  title: string;
  subtitle: string;
  button?: boolean;
}

export default function HeroSection({ img, title, subtitle, button }: HeroProps) {
  const { i18n, t } = useTranslation("common");
  const isRtl = i18n.language === "ar";

  return (
    <section className="relative w-full h-screen overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      {/* Background Image */}
      <div className="absolute inset-0 scale-105 animate-zoom-smooth">
        <Image
          src={img}
          alt={t("hero.alt") || "Hero Image"}
          fill
          className="object-cover"
        />
      </div>

      {/* Heading */}
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-center bg-black/40 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-6xl text-white leading-tight drop-shadow-lg">
          {t(title)}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl drop-shadow">
          {t(subtitle)}
        </p>

        {/* Button */}
        {button && (
          <Button variant="main">{t("hero.button")}</Button>
        )}
      </div>
    </section>
  );
}
