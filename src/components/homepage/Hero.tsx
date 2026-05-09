"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"

import {
  ArrowRight,
  Building2,
  Sparkles,
} from "lucide-react"

import hero1 from "../../../public/estate1.jpg"
import hero2 from "../../../public/real-estate.webp"
import hero3 from "../../../public/house.jpg"

export function Hero() {
  const slides = [
    {
      image: hero1,
      title: "Find Your Dream Property with AI",
      subtitle:
        "Discover premium apartments, villas, and commercial spaces tailored to your lifestyle and budget.",
    },
    {
      image: hero2,
      title: "Smart Real Estate for Modern Living",
      subtitle:
        "Explore verified listings, connect with trusted agents, and make confident property decisions.",
    },
    {
      image: hero3,
      title: "Invest Smarter with EstateFlow",
      subtitle:
        "Get AI-powered market insights, property analytics, and personalized recommendations instantly.",
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-background py-6 md:py-10">
      <div className="container mx-auto px-4">

        <Carousel className="relative w-full">

          <CarouselContent>

            {slides.map((slide, index) => (
              <CarouselItem key={index}>

                <div className="relative overflow-hidden rounded-[2rem] border shadow-2xl">

                  {/* Background Image */}
                  <div className="relative h-[75vh] min-h-[600px] w-full">

                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">

                      <div className="max-w-3xl px-8 md:px-16">

                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                          <Sparkles className="h-4 w-4 text-primary" />
                          AI-Powered Real Estate Platform
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                          {slide.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                          {slide.subtitle}
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                          <Button
                            asChild
                            size="lg"
                            className="h-12 rounded-xl px-6 text-sm font-medium shadow-lg"
                          >
                            <Link href="/properties">
                              Explore Properties
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>

                          <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-12 rounded-xl border-white/20 bg-white/10 px-6 text-white backdrop-blur-md hover:bg-white/20"
                          >
                            <Link href="/agents">
                              <Building2 className="mr-2 h-4 w-4" />
                              Find Agents
                            </Link>
                          </Button>

                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">

                          <div>
                            <h3 className="text-3xl font-bold text-white">
                              12K+
                            </h3>

                            <p className="text-sm text-white/70">
                              Properties Listed
                            </p>
                          </div>

                          <div>
                            <h3 className="text-3xl font-bold text-white">
                              5K+
                            </h3>

                            <p className="text-sm text-white/70">
                              Happy Clients
                            </p>
                          </div>

                          <div>
                            <h3 className="text-3xl font-bold text-white">
                              350+
                            </h3>

                            <p className="text-sm text-white/70">
                              Verified Agents
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </CarouselItem>
            ))}

          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious
            className="
              left-6 border-white/20 bg-white/10 text-white
              backdrop-blur-md hover:bg-white/20
            "
          />

          <CarouselNext
            className="
              right-6 border-white/20 bg-white/10 text-white
              backdrop-blur-md hover:bg-white/20
            "
          />

        </Carousel>

      </div>
    </section>
  )
}