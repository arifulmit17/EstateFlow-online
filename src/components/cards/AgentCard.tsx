"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  BadgeCheck,
  Mail,
  Phone,
  Star,
} from "lucide-react";

interface Agent {
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

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AgentCard({
  agent,
  index = 0,
}: AgentCardProps) {
  return (
    <motion.div
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
            className="object-cover group-hover:scale-105 transition duration-300"
          />

          {agent.isVerified && (
            <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full flex items-center gap-1 text-xs backdrop-blur">
              <BadgeCheck className="w-4 h-4 text-primary" />
              Verified
            </div>
          )}
        </div>

        {/* CONTENT */}
        <CardContent className="p-6 space-y-4">
          
          {/* HEADER */}
          <div>
            <h2 className="text-2xl font-semibold">
              {agent.name}
            </h2>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {agent.bio || "Professional Real Estate Agent"}
            </p>
          </div>

          {/* STATS */}
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-semibold text-lg">
                {agent.properties?.length || 0}
              </p>

              <p className="text-muted-foreground">
                Properties
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />

              <span className="font-semibold">
                4.5
              </span>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-4 h-4 shrink-0" />
              <span className="truncate">
                {agent.email}
              </span>
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

            <Button
              variant="outline"
              className="flex-1 rounded-xl"
              asChild
            >
              <Link href="/contact">
                Contact
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}