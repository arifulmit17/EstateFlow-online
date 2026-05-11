"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  BadgeCheck,
  Building2,
  Mail,
  Phone,
  Star,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getAllUsers } from "@/services/user.service";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  bio?: string;
  role: string;
  isVerified: boolean;
  properties?: any[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AgentsPage() {
  const [agents, setAgents] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await getAllUsers();
        console.log("Fetched agents:", res);
        const agents = Array.isArray(res)
  ? res.filter((user) => user.role === "AGENT")
  : [];

        setAgents(agents);
      } catch (error) {
        console.error("Failed to fetch agents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <Building2 className="w-4 h-4 text-primary" />
            Verified EstateFlow AI Agents
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Meet Our Real Estate Experts
          </h1>

          <p className="max-w-3xl mx-auto text-muted-foreground text-base md:text-lg">
            Connect with trusted real estate professionals.
          </p>
        </motion.div>

        {/* LOADING */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="rounded-3xl animate-pulse">
                <div className="h-[320px] bg-muted" />
                <CardContent className="p-6 space-y-3">
                  <div className="h-6 bg-muted rounded w-2/3" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-10 bg-muted rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* EMPTY */}
        {!loading && agents.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">No Agents Found</h2>
          </div>
        )}

        {/* GRID */}
        {!loading && agents.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-3xl overflow-hidden group hover:shadow-xl transition">
                  
                  {/* IMAGE */}
                  <div className="relative h-[320px] bg-muted overflow-hidden">
                    <Image
                      src={agent.avatar || "/placeholder-agent.jpg"}
                      alt={agent.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />

                    {agent.isVerified && (
                      <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full flex items-center gap-1 text-xs">
                        <BadgeCheck className="w-4 h-4 text-primary" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {agent.name}
                      </h2>

                      <p className="text-sm text-muted-foreground">
                        {agent.bio || "Real Estate Agent"}
                      </p>
                    </div>

                    {/* SIMPLE STATS (based on real schema only) */}
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-semibold text-lg">
                          {agent.properties?.length || 0}
                        </p>
                        <p className="text-muted-foreground">Properties</p>
                      </div>

                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">4.5</span>
                      </div>
                    </div>

                    {/* CONTACT */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {agent.email}
                      </div>

                      {agent.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {agent.phone}
                        </div>
                      )}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex gap-3 pt-2">
                      <Button className="flex-1 rounded-xl" asChild>
                        <Link href={`/agents/${agent.id}`}>
                          View Profile
                        </Link>
                      </Button>

                      <Button variant="outline" className="flex-1 rounded-xl" asChild>
                        <Link href="/contact">
                          Contact
                        </Link>
                      </Button>
                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}