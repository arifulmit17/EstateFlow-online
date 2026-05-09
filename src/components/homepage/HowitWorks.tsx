"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, BrainCircuit, Home } from "lucide-react";

const steps = [
  {
    title: "Search & Discover",
    description:
      "Browse thousands of verified properties with advanced filters for price, location, property type, and amenities.",
    icon: Search,
  },
  {
    title: "Get AI-Powered Insights",
    description:
      "Receive smart property recommendations, AI-generated descriptions, market insights, and personalized suggestions tailored to your needs.",
    icon: BrainCircuit,
  },
  {
    title: "Connect & Move In",
    description:
      "Contact agents, schedule appointments, and finalize your dream property with a seamless real estate experience.",
    icon: Home,
  },
];

export function HowItWorksSection() {
  return (
    <section className="w-full px-4 py-20 bg-background">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        
        {/* Heading */}
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium text-primary bg-primary/10">
            How EstateFlow Works
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Find Your Perfect Property in 3 Simple Steps
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            EstateFlow combines modern real estate discovery with AI-powered
            technology to help buyers, renters, and investors make smarter
            decisions faster.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card
                key={index}
                className="rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                  
                  {/* Step Number */}
                  <div className="text-sm font-semibold text-primary">
                    Step {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}