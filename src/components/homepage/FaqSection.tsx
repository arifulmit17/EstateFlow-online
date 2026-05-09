import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 space-y-4">
          <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium text-primary bg-primary/10">
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything You Need to Know About EstateFlow
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn how EstateFlow helps buyers, renters, investors, and agents
            discover properties smarter with AI-powered real estate technology.
          </p>
        </div>

        {/* FAQ */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >

          <AccordionItem
            value="item-1"
            className="rounded-2xl border bg-background px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left text-base font-semibold">
              What is EstateFlow?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              EstateFlow is an AI-powered real estate platform that helps users
              discover, analyze, buy, rent, and manage properties with smart
              recommendations and verified listings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="rounded-2xl border bg-background px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left text-base font-semibold">
              How does the AI recommendation system work?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              Our AI analyzes your preferences such as location, budget,
              property type, and amenities to provide personalized property
              recommendations and market insights.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="rounded-2xl border bg-background px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left text-base font-semibold">
              Are all properties verified?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes. EstateFlow works with verified agents and property owners to
              ensure listings are authentic, accurate, and regularly updated.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="rounded-2xl border bg-background px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left text-base font-semibold">
              Can I schedule appointments with agents?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              Absolutely. Users can directly connect with agents, send
              inquiries, and schedule property visits through the platform.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="rounded-2xl border bg-background px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left text-base font-semibold">
              Is EstateFlow suitable for property investors?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes. EstateFlow provides market trends, AI-powered analytics, and
              investment-focused insights to help investors make informed
              decisions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="rounded-2xl border bg-background px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left text-base font-semibold">
              Can agents list their properties on EstateFlow?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              Verified agents can create and manage property listings, upload
              images and virtual tours, track inquiries, and manage appointments
              from their dashboard.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  )
}