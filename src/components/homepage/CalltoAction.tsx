import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-11/12 mx-auto rounded-3xl border bg-card py-20 px-6 md:px-10 shadow-sm">
      <div className="max-w-6xl mx-auto text-center space-y-6">

        {/* Badge */}
        <div>
          <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium text-primary bg-primary/10">
            Start Your Real Estate Journey
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
          Discover Your Dream Property with AI-Powered Real Estate
        </h2>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Explore verified properties, connect with trusted agents, and get
          intelligent recommendations tailored to your lifestyle, budget,
          and investment goals — all in one seamless platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">

          {/* Primary CTA */}
          <Button
            asChild
            size="lg"
            className="rounded-xl px-8"
          >
            <Link href="/properties">
              Explore Properties
            </Link>
          </Button>

          {/* Secondary CTA */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl px-8"
          >
            <Link href="/agents">
              Find an Agent
            </Link>
          </Button>

        </div>

      </div>
    </section>
  );
}