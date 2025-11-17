"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocalization } from "@/hooks/useLocalization";

export default function Carouselsection() {
  const { t } = useLocalization();

  const testimonials = [
    {
      title: t("testimonials.resultTitle"),
      text: t("testimonials.resultText"),
      name: t("testimonials.resultName"),
      role: t("testimonials.resultRole"),
    },
    {
      title: t("testimonials.dermatologistTitle"),
      text: t("testimonials.dermatologistText"),
      name: t("testimonials.dermatologistName"),
      role: t("testimonials.dermatologistRole"),
    },
    {
      title: t("testimonials.improvementTitle"),
      text: t("testimonials.improvementText"),
      name: t("testimonials.improvementName"),
      role: t("testimonials.improvementRole"),
    },
  ];

  return (
    <section className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
      <div className="mt-10 flex justify-center">
        <Carousel
          className="w-full max-w-sm sm:max-w-lg lg:max-w-6xl"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[85%] sm:basis-[75%] md:basis-[55%] lg:basis-[45%]"
              >
                <div className="p-6 sm:p-8 border rounded-2xl bg-background shadow-md h-full">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-main">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 italic mb-4 text-sm sm:text-base">
                    {item.text}
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-foreground text-sm sm:text-base">
                      {item.name}
                    </span>
                    <span className="text-xs sm:text-sm text-foreground/60">
                      {item.role}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
