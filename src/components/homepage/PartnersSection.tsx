"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Prime Realty Group",
    logo: "/partners/prime-realty.png",
  },
  {
    name: "UrbanNest Properties",
    logo: "/partners/urban-nest.png",
  },
  {
    name: "Skyline Developments",
    logo: "/partners/skyline.png",
  },
  {
    name: "SmartHome Investments",
    logo: "/partners/smarthome.png",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function PartnersSection() {
  return (
    <section className="w-full px-4 py-20 bg-background">
      <div className="max-w-7xl mx-auto text-center space-y-14">

        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
            Trusted Industry Partners
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Collaborating With Leading Real Estate Brands
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            EstateFlow AI partners with trusted agencies, property developers,
            investment firms, and technology providers to deliver a smarter,
            more secure, and modern real estate experience.
          </p>
        </motion.div>

        {/* PARTNERS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 h-[180px] bg-background/50 backdrop-blur">
                <CardContent className="h-full flex flex-col items-center justify-center gap-4 p-6">

                  <div className="relative w-[120px] h-[60px]">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-sm font-medium text-muted-foreground">
                    {partner.name}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>

        {/* EXTRA TRUST SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 pt-6"
        >

          <Card className="rounded-3xl border">
            <CardContent className="p-8 space-y-3 text-center">
              <h3 className="text-3xl font-bold">
                1K+
              </h3>

              <p className="text-sm text-muted-foreground">
                Verified Real Estate Agents
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border">
            <CardContent className="p-8 space-y-3 text-center">
              <h3 className="text-3xl font-bold">
                10K+
              </h3>

              <p className="text-sm text-muted-foreground">
                Active Property Listings
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border">
            <CardContent className="p-8 space-y-3 text-center">
              <h3 className="text-3xl font-bold">
                24/7
              </h3>

              <p className="text-sm text-muted-foreground">
                AI-Powered Assistance
              </p>
            </CardContent>
          </Card>

        </motion.div>

      </div>
    </section>
  );
}