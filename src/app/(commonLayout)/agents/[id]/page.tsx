"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";

import { getUserById } from "@/services/user.service";
import { getProperties } from "@/services/property2.service";
import BookAppointmentButton from "@/components/shared/BookAppointmentButton";
import { getUser } from "@/services/auth.service";

interface Agent {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  bio?: string;
  role?: string;
  isVerified?: boolean;
  properties?: any[];
  createdAt?: string;
}

export default function AgentDetailsPage() {
  const params = useParams();

  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);

  const [properties, setProperties] = useState<any[]>([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");

  // Fetch agent
  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const result = await getUserById(params.id as string);
        setAgent(result || null);
      } catch (error) {
        console.error("Failed to fetch agent:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [params.id]);

  // Fetch current user (buyer)
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await getUser();
        setUser(res || null);
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      } finally {
        setLoading(false);
      }   
    };

    fetchCurrentUser();
  }, []);

  // Fetch all properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const result = await getProperties();
        setProperties(result || []);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading agent details...</p>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Agent not found</p>
      </div>
    );
  }

  // Filter properties by agent id
  const agentProperties = properties.filter(
    (p: any) => p.agentId === agent.id
  );

  return (
    <div className="min-h-screen bg-background py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden rounded-3xl border shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative min-h-[450px] bg-muted">
              <Image
                src={agent.avatar || "/placeholder-agent.jpg"}
                alt={agent.name}
                fill
                className="object-cover"
              />

              {agent.isVerified && (
                <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium shadow">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  Verified Agent
                </div>
              )}
            </div>

            {/* CONTENT */}
            <CardContent className="p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-8">
                {/* HEADER */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium">
                    <Building2 className="w-4 h-4 text-primary" />
                    EstateFlow Agent
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight">
                    {agent.name}
                  </h1>

                  <p className="text-primary font-medium">
                    {agent.role || "Real Estate Agent"}
                  </p>

                  <div className="flex items-center gap-2 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      5.0 Client Rating
                    </span>
                  </div>
                </div>

                <Separator />

                {/* BIO */}
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">About Agent</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {agent.bio ||
                      "Experienced real estate professional helping buyers and investors find the perfect property."}
                  </p>
                </div>

                <Separator />

                {/* INFO */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>{agent.email}</span>
                  </div>

                  {agent.phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>{agent.phone}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Dhaka, Bangladesh</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <span>
                      Joined{" "}
                      {agent.createdAt
                        ? new Date(agent.createdAt).toLocaleDateString()
                        : "Recently"}
                    </span>
                  </div>
                </div>

                <Separator />

                {/* STATS */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border p-5 text-center">
                    <p className="text-3xl font-bold">
                      {agentProperties.length}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Listed Properties
                    </p>
                  </div>

                  <div className="rounded-2xl border p-5 text-center">
                    <p className="text-3xl font-bold">98%</p>
                    <p className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </p>
                  </div>
                </div>

                <Separator />

                {/* PROPERTY SELECT */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Select Property
                  </label>

                  <select
                    className="w-full border rounded-lg px-3 py-2 bg-background"
                    value={selectedPropertyId}
                    onChange={(e) =>
                      setSelectedPropertyId(e.target.value)
                    }
                  >
                    <option value="">Select a property</option>

                    {agentProperties.map((prop: any) => (
                      <option key={prop.id} value={prop.id}>
                        {prop.title || "Untitled Property"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <BookAppointmentButton
                  propertyId={selectedPropertyId}
                  agentId={agent.id}
                  buyerId={user?.id}
                />
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}