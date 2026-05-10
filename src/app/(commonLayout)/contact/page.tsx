"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Building2,
  MessageSquare,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-3">
            <Building2 className="w-10 h-10 text-primary" />
            Contact EstateFlow AI
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Looking to buy, rent, or list a property? Need help with AI-powered
            recommendations, appointments, or property management? Our team is
            ready to assist you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Card className="rounded-2xl shadow-sm border">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Send Us a Message
                  </h2>

                  <p className="text-sm text-muted-foreground mt-1">
                    Fill out the form and our real estate specialists will get
                    back to you shortly.
                  </p>
                </div>

                <form className="space-y-4">
                  <Input placeholder="Full Name" />

                  <Input
                    type="email"
                    placeholder="Email Address"
                  />

                  <Input
                    type="tel"
                    placeholder="Phone Number"
                  />

                  <Textarea
                    placeholder="Tell us about your property inquiry, buying preferences, rental requirements, or support request..."
                    rows={6}
                  />

                  <Button className="w-full rounded-xl">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <Card className="rounded-2xl border">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    Email Support
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    support@estateflowai.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border">
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    Customer Assistance
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Speak with our property advisors for buying, renting,
                    or listing guidance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border">
              <CardContent className="p-6 flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-primary shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    AI Property Consultation
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Get intelligent property recommendations tailored to your
                    budget, lifestyle, and preferences.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    Headquarters
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Dhaka, Bangladesh — Serving buyers, renters, agents,
                    and property investors globally.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* EXTRA NOTE */}
            <div className="rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
              Our support team usually responds within 24 hours.
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4"
        >
          <h2 className="text-2xl font-semibold">
            Discover Smart Real Estate Solutions
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse premium properties, explore AI-powered recommendations,
            and connect with verified agents through EstateFlow AI.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              className="rounded-xl"
              asChild
            >
              <Link href="/properties">
                Browse Properties
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-xl"
              asChild
            >
              <Link href="/help">
                Visit Help Center
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}