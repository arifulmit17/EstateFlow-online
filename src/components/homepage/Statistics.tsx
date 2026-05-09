"use client";

import CountUp from "react-countup";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Properties Listed",
    value: 1200,
    icon: Building2,
  },
  {
    title: "Verified Agents",
    value: 350,
    icon: BadgeCheck,
  },
  {
    title: "Happy Clients",
    value: 5400,
    icon: Users,
  },
  {
    title: "Successful Transactions",
    value: 2300,
    icon: TrendingUp,
  },
];

export function StatsSection() {
  return (
    <section className="w-full px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Thousands Across the Real Estate Market
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            EstateFlow connects buyers, renters, investors, and agents through
            a modern AI-powered real estate platform built for smarter decisions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Card
                key={index}
                className="rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center gap-4">

                  {/* Icon */}
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Number */}
                  <h3 className="text-2xl md:text-3xl font-bold">
                    <CountUp end={stat.value} duration={2} />+
                  </h3>

                  {/* Label */}
                  <p className="text-sm text-muted-foreground">
                    {stat.title}
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