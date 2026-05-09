"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  BrainCircuit,
  Building2,
} from "lucide-react";
import Link from "next/link";

const offers = [
  {
    title: "Discover Premium Properties",
    description:
      "Browse verified apartments, villas, commercial spaces, and investment opportunities with advanced search filters.",
    icon: Search,
    cta: "Browse Properties",
    href: "/properties",
  },
  {
    title: "Get AI-Powered Recommendations",
    description:
      "Receive personalized property suggestions, market insights, and intelligent recommendations based on your preferences.",
    icon: BrainCircuit,
    cta: "Explore AI Insights",
    href: "/properties",
  },
  {
    title: "Connect with Trusted Agents",
    description:
      "Schedule appointments, communicate with verified agents, and complete your real estate journey seamlessly.",
    icon: Building2,
    cta: "Find Agents",
    href: "/agents",
  },
];

export function OfferSection() {
  return (
    <section className="w-full px-4 py-20 bg-background">
      <div className="max-w-6xl mx-auto text-center space-y-14">

        {/* Heading */}
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium text-primary bg-primary/10">
            Why Choose EstateFlow
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything You Need for Modern Real Estate
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            EstateFlow combines AI-powered technology, verified property
            listings, and trusted real estate professionals to help you make
            smarter property decisions faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <Card
                key={index}
                className="group rounded-3xl border bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="p-8 flex flex-col items-center text-center gap-5">

                  {/* Icon */}
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {offer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {offer.description}
                  </p>

                  {/* CTA */}
                  <Button
                    asChild
                    className="mt-2 rounded-xl px-6"
                  >
                    <Link href={offer.href}>
                      {offer.cta}
                    </Link>
                  </Button>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}