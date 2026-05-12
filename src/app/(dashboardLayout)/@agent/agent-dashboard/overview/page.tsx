import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getUser } from "@/services/auth.service";
import { fetchPropertiesByAgentId } from "@/services/property2.service";
import { getAppointmentsByAgentId } from "@/services/appointment.service";

export default async function AgentOverviewPage() {
  const user = await getUser();

  if (!user || user.role !== "AGENT") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Overview
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Access denied</CardTitle>

            <CardDescription>
              Only agents can access this page.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Fetch real data
  const properties =
    await fetchPropertiesByAgentId(user.id);

  const appointments =
    await getAppointmentsByAgentId(user.id);

  // Unique buyers = leads
  const uniqueBuyers = new Set(
    appointments
      ?.map((a: any) => a.buyer?.id)
      .filter(Boolean)
  );

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Overview
        </h1>

        <p className="text-muted-foreground text-sm">
          Your pipeline and activity at a glance.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-4 md:grid-cols-3">

        {/* ACTIVE LISTINGS */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>
              Active listings
            </CardDescription>

            <CardTitle className="text-3xl tabular-nums">
              {properties?.length || 0}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-sm">
            Properties currently represented
            by you.
          </CardContent>
        </Card>

        {/* APPOINTMENTS */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>
              Scheduled showings
            </CardDescription>

            <CardTitle className="text-3xl tabular-nums">
              {appointments?.length || 0}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-sm">
            Upcoming property tours and
            meetings.
          </CardContent>
        </Card>

        {/* BUYER LEADS */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>
              Buyer leads
            </CardDescription>

            <CardTitle className="text-3xl tabular-nums">
              {uniqueBuyers.size}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-sm">
            Unique buyers interested in your
            listings.
          </CardContent>
        </Card>

      </div>
    </div>
  );
}