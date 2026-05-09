"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Building2 } from "lucide-react";

const feedbacks = [
  {
    name: "Sarah Ahmed",
    role: "Property Buyer",
    message:
      "EstateFlow made finding my dream apartment incredibly easy. The AI recommendations matched exactly what I was looking for.",
  },
  {
    name: "Mahmud Karim",
    role: "Real Estate Investor",
    message:
      "The market insights and property analytics helped me identify high-potential investment opportunities with confidence.",
  },
  {
    name: "Nadia Islam",
    role: "First-Time Home Buyer",
    message:
      "From browsing properties to scheduling appointments with agents, the entire experience felt seamless and professional.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeedbackSection() {
  return (
    <section className="w-full px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Building2 className="text-primary" />
            What Our Clients Say
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by property buyers, renters, and investors looking for a smarter real estate experience.
          </p>
        </motion.div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col gap-4 text-left">

                  {/* Icon */}
                  <MessageCircle className="w-6 h-6 text-primary" />

                  {/* Message */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    “{item.message}”
                  </p>

                  {/* User */}
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>

                    <p className="text-xs text-muted-foreground">
                      {item.role}
                    </p>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}