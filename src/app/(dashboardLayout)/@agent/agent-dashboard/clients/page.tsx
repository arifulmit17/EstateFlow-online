import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getUser } from "@/services/auth.service";

import { getAppointmentsByAgentId } from "@/services/appointment.service";

import ClientCard from "@/components/cards/ClientCard";

export default async function AgentClientsPage() {
  // Current logged-in user
  const user = await getUser();

  // Guard
  if (!user || user.role !== "AGENT") {
    return (
      <div className="space-y-6">

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Clients
          </h1>

          <p className="text-muted-foreground text-sm">
            Buyers and sellers you are working with.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              Access denied
            </CardTitle>

            <CardDescription>
              Only agents can access clients.
            </CardDescription>
          </CardHeader>
        </Card>

      </div>
    );
  }

  // Fetch appointments
  const appointments =
    await getAppointmentsByAgentId(
      user.id
    );

  // Empty state
  if (
    !appointments ||
    appointments.length === 0
  ) {
    return (
      <div className="space-y-6">

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Clients
          </h1>

          <p className="text-muted-foreground text-sm">
            Buyers and sellers you are working with.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              No clients yet
            </CardTitle>

            <CardDescription>
              Appointments will appear here once
              buyers book properties with you.
            </CardDescription>
          </CardHeader>
        </Card>

      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Clients
        </h1>

        <p className="text-muted-foreground text-sm">
          Buyers currently connected through
          appointments.
        </p>
      </div>

      {/* CLIENT LIST */}
      <div className="grid gap-6">

        {appointments.map(
          (appointment: any) => (
            <ClientCard
              key={appointment.id}
              appointment={appointment}
            />
          )
        )}

      </div>

    </div>
  );
}