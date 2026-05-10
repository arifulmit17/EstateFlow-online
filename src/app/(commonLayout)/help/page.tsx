"use client";

import * as React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import {
  MessageCircle,
  Building2,
  Home,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Building2 className="w-10 h-10 text-primary" />

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              EstateFlow AI Help Center
            </h1>
          </div>

          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Get support for property discovery, AI-powered recommendations,
            appointments, listings, verified agents, and account management.
          </p>
        </div>

        {/* QUICK SUPPORT CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          <Card className="rounded-3xl border">
            <CardContent className="p-6 space-y-4">
              <Home className="w-10 h-10 text-primary" />

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Property Search
                </h3>

                <p className="text-sm text-muted-foreground">
                  Browse properties using smart filters, AI recommendations,
                  location search, and advanced property insights.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border">
            <CardContent className="p-6 space-y-4">
              <ShieldCheck className="w-10 h-10 text-primary" />

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Verified Listings
                </h3>

                <p className="text-sm text-muted-foreground">
                  Explore trusted property listings and connect with verified
                  real estate agents securely.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border">
            <CardContent className="p-6 space-y-4">
              <Sparkles className="w-10 h-10 text-primary" />

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  AI Assistance
                </h3>

                <p className="text-sm text-muted-foreground">
                  Receive intelligent property suggestions tailored to your
                  preferences, lifestyle, and budget.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* FAQ SECTION */}
        <Card className="rounded-3xl border">
          <CardHeader>
            <CardTitle className="text-2xl">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >

              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I search for properties?
                </AccordionTrigger>

                <AccordionContent>
                  Use the property search page to filter listings by
                  location, price range, property type, bedrooms,
                  amenities, and more. EstateFlow AI also provides
                  personalized recommendations based on your preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I schedule a property visit?
                </AccordionTrigger>

                <AccordionContent>
                  Yes. You can book appointments directly from a property
                  listing page and connect with agents to arrange virtual
                  or in-person visits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How does the AI recommendation system work?
                </AccordionTrigger>

                <AccordionContent>
                  Our AI analyzes your browsing activity, preferences,
                  location interests, budget, and saved properties to
                  recommend listings that best match your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Are all property listings verified?
                </AccordionTrigger>

                <AccordionContent>
                  EstateFlow AI prioritizes verified listings and trusted
                  agents to provide a safer and more reliable property
                  discovery experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can agents manage their own listings?
                </AccordionTrigger>

                <AccordionContent>
                  Yes. Agents can create, update, manage, and monitor
                  their property listings through the dedicated agent
                  dashboard.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Can I save properties for later?
                </AccordionTrigger>

                <AccordionContent>
                  Absolutely. Users can save favorite properties to their
                  profile and access them anytime from their dashboard.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Does EstateFlow AI support virtual tours?
                </AccordionTrigger>

                <AccordionContent>
                  Yes. Many listings include virtual tours, property
                  galleries, and video walkthroughs for a more immersive
                  property viewing experience.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </CardContent>
        </Card>

        {/* CONTACT SUPPORT */}
        <Card className="rounded-3xl border">
          <CardHeader>
            <CardTitle className="text-2xl">
              Need More Help?
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />

                Contact our support team for assistance with property
                listings, appointments, AI recommendations, or account
                management.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button asChild className="rounded-xl">
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="rounded-xl"
              >
                <Link href="/properties">
                  Browse Properties
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}