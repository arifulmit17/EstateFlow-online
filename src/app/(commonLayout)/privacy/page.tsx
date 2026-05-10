"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-10 h-10 text-primary" />

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            EstateFlow AI values your privacy and is committed to protecting
            your personal information. This policy explains how we collect,
            use, store, and safeguard your data while you use our AI-powered
            real estate platform.
          </p>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Card className="rounded-3xl border shadow-sm">
            <CardContent className="p-8 md:p-10 space-y-10 text-sm md:text-base leading-relaxed text-muted-foreground">

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  1. Information We Collect
                </h2>

                <p>
                  We collect information when you create an account,
                  browse properties, save listings, contact agents,
                  schedule appointments, or interact with EstateFlow AI
                  features.
                </p>

                <p>
                  This information may include your name, email address,
                  phone number, property preferences, location data,
                  account credentials, and activity on the platform.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  2. How We Use Your Information
                </h2>

                <p>
                  Your information helps us provide personalized property
                  recommendations, improve search experiences, manage
                  appointments, connect you with verified agents, and
                  enhance platform performance.
                </p>

                <p>
                  EstateFlow AI may also use aggregated analytics to
                  optimize AI-powered recommendations and improve user
                  experiences across the platform.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  3. AI Recommendations & Personalization
                </h2>

                <p>
                  Our AI systems analyze browsing behavior, saved
                  properties, preferences, and interaction history to
                  deliver intelligent property suggestions tailored to
                  your interests and budget.
                </p>

                <p>
                  These recommendations are designed to improve property
                  discovery and simplify decision-making.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  4. Property Listings & Agent Communication
                </h2>

                <p>
                  When contacting agents or booking property visits,
                  certain information may be shared with verified agents
                  or property owners to facilitate communication and
                  appointment management.
                </p>

                <p>
                  EstateFlow AI works to ensure all interactions remain
                  secure and professional.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  5. Data Security
                </h2>

                <p>
                  We implement modern security measures, authentication
                  systems, encrypted communication, and secure storage
                  practices to protect your information from unauthorized
                  access or misuse.
                </p>

                <p>
                  While no platform can guarantee complete security,
                  EstateFlow AI continuously improves its infrastructure
                  and monitoring systems.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  6. Cookies & Usage Analytics
                </h2>

                <p>
                  We use cookies and analytics technologies to remember
                  preferences, maintain sessions, understand platform
                  usage patterns, and improve performance.
                </p>

                <p>
                  Cookies also help personalize your real estate browsing
                  experience and AI recommendations.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  7. Your Rights & Account Control
                </h2>

                <p>
                  Users can manage account information, update profile
                  details, save or remove properties, and request account
                  deletion through account settings.
                </p>

                <p>
                  You may also contact our support team regarding data
                  access, corrections, or privacy-related concerns.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  8. Third-Party Services
                </h2>

                <p>
                  EstateFlow AI may integrate with third-party services
                  such as payment gateways, analytics tools, mapping
                  services, authentication providers, and communication
                  systems.
                </p>

                <p>
                  These providers operate under their own privacy policies
                  and security practices.
                </p>
              </section>

              {/* SECTION */}
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  9. Updates to This Privacy Policy
                </h2>

                <p>
                  EstateFlow AI may update this Privacy Policy as the
                  platform evolves, introduces new AI capabilities, or
                  changes its services and infrastructure.
                </p>

                <p>
                  Any updates will be reflected on this page with a revised
                  update date.
                </p>
              </section>

              {/* FOOTER */}
              <div className="pt-6 border-t text-xs md:text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </div>

            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}