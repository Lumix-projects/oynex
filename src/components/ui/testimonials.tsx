import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Carouselsection() {
  const testimonials = [
    {
      title: "Exceptional Results!",
      text: "I've struggled with oily skin for years, but Oynex's facial cleanser made a huge difference. My skin feels fresh and balanced all day — highly recommend!",
      name: "Sara Mahmoud",
      role: "Customer",
    },
    {
      title: "Trusted by Dermatologists",
      text: "As a dermatologist, I appreciate how Oynex focuses on clean, clinically tested ingredients.",
      name: "Dr. Omar El-Sayed",
      role: "Dermatologist",
    },
    {
      title: "Visible Improvement!",
      text: "After just a few weeks using Oynex Serum, my skin texture and tone look much more even. I finally feel confident going out without makeup.",
      name: "Lina Youssef",
      role: "Customer",
    },
  ];

  return (
    <section className="container mx-auto text-center px-4 sm:px-6 lg:px-8 ">
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
