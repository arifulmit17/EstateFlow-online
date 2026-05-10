import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="w-11/12 mx-auto py-12 space-y-20">

      {/* HERO SECTION */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          About EstateFlow AI
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          EstateFlow AI is an intelligent real estate platform designed to
          transform how people discover, buy, rent, and manage properties using
          AI-powered insights and modern digital experiences.
        </p>
      </section>

      {/* MISSION */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Mission
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Our mission is to simplify real estate through technology,
            empowering buyers, renters, agents, and investors with smarter
            property discovery and data-driven decision-making.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We aim to bridge the gap between users and properties by combining
            modern design, AI recommendations, virtual experiences, and trusted
            real estate services into one seamless platform.
          </p>
        </div>

        <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border">
          <Image
            src="/real-estate-mission.jpg"
            alt="EstateFlow Mission"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* VISION */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border order-2 md:order-1">
          <Image
            src="/real-estate-vision.jpg"
            alt="EstateFlow Vision"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-5 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Vision
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We envision a future where finding the perfect property becomes
            intelligent, personalized, and effortless through AI-powered real
            estate experiences.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            EstateFlow AI strives to become a trusted global ecosystem where
            users can confidently explore properties, connect with verified
            agents, and make informed investments.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What EstateFlow AI Offers
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            A modern real estate experience powered by AI, advanced search,
            smart recommendations, and seamless property management tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-8 border rounded-3xl shadow-sm bg-background space-y-3">
            <h3 className="font-semibold text-xl">
              AI Property Discovery
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Intelligent recommendations help users discover properties that
              match their preferences, budget, and lifestyle.
            </p>
          </div>

          <div className="p-8 border rounded-3xl shadow-sm bg-background space-y-3">
            <h3 className="font-semibold text-xl">
              Verified Listings
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Browse trusted property listings with detailed information,
              high-quality media, and virtual property tours.
            </p>
          </div>

          <div className="p-8 border rounded-3xl shadow-sm bg-background space-y-3">
            <h3 className="font-semibold text-xl">
              Smart Agent Experience
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Agents can manage listings, schedule appointments, and connect
              with potential buyers and renters efficiently.
            </p>
          </div>

        </div>
      </section>

      {/* PLATFORM IMPACT */}
      <section className="rounded-3xl border bg-muted/30 p-10 md:p-14 text-center space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Platform Impact
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            EstateFlow AI is designed to scale modern real estate experiences
            through technology, accessibility, and intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="space-y-2">
            <h3 className="text-4xl font-bold">
              10K+
            </h3>

            <p className="text-sm text-muted-foreground">
              Property Listings
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-bold">
              5K+
            </h3>

            <p className="text-sm text-muted-foreground">
              Active Users
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-bold">
              1K+
            </h3>

            <p className="text-sm text-muted-foreground">
              Verified Agents
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-bold">
              24/7
            </h3>

            <p className="text-sm text-muted-foreground">
              AI Assistance
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Choose EstateFlow AI
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Built with scalability, intelligence, and user experience at the
            core of the platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-3xl p-8 space-y-3">
            <h3 className="font-semibold text-xl">
              AI-Powered Insights
            </h3>

            <p className="text-sm text-muted-foreground">
              Smart property suggestions and predictive analytics improve
              decision-making for users and investors.
            </p>
          </div>

          <div className="border rounded-3xl p-8 space-y-3">
            <h3 className="font-semibold text-xl">
              Modern User Experience
            </h3>

            <p className="text-sm text-muted-foreground">
              Clean design, responsive layouts, and seamless workflows across
              desktop and mobile devices.
            </p>
          </div>

          <div className="border rounded-3xl p-8 space-y-3">
            <h3 className="font-semibold text-xl">
              Secure & Scalable
            </h3>

            <p className="text-sm text-muted-foreground">
              Built using modern technologies with secure authentication,
              optimized performance, and scalable architecture.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 py-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Start Your Real Estate Journey
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore premium properties, connect with trusted agents, and discover
          smarter ways to buy, rent, and invest with EstateFlow AI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-xl" asChild>
            <Link href="/properties">
              Explore Properties
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-xl"
            asChild
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}