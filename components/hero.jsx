"use client"
import Image from "next/image";
import { useEffect, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TypingAnimation } from './typing_animation';

const i_am_postfixes = [
  "a scientist",
  "a researcher",
  "an engineer",
  "a developer",
  "Tai Nguyen",
]

const carousel_images = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
]

const ImageCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="h-full w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="p-1 h-full">
              <CardContent className="flex items-center justify-center p-6 h-full">
                
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )

}

export default function Hero() {


  return (
    <div className="relative text-center background grid grid-cols-2 h-[40vh]">
      <div className="absolute z-0 w-full h-full">
        <ImageCarousel />
      </div>
      <div className="text-left z-10">
        <TypingAnimation prefix="I am" postfixes={i_am_postfixes} />
        <p className="mt-4 text-gray-600">
          Welcome to my professional portfolio. Explore my work in AI and multimedia forensics.
        </p>
        <Button className="mt-4">Learn More</Button>
      </div>
    </div>
  );
}