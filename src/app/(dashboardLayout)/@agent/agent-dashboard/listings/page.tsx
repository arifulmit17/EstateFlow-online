import PropertyCard from "@/components/cards/PropertyCard";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getUser } from "@/services/auth.service";
import { getProperties } from "@/services/property2.service";
import { Property } from "@/types/property.types";

export default async function AgentListingsPage() {
  // Get current logged-in user
  const user = await getUser();

  // Guard for non-agent users
  if (!user || user.role !== "AGENT") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Listings
          </h1>

          <p className="text-muted-foreground text-sm">
            Properties you represent and their status.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Access denied</CardTitle>

            <CardDescription>
              Only agents can view listings.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Fetch agent properties
  const properties = await getProperties()
  console.log(properties);
  const filteredProperties: Property[] =
  properties.filter(
    (property: Property) =>
      property.agentId === user.id
  );

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          My Listings
        </h1>

        <p className="text-muted-foreground text-sm">
          Properties you represent and manage.
        </p>
      </div>

      {/* EMPTY STATE */}
      {properties.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No listings yet</CardTitle>

            <CardDescription>
              You have not added any properties yet.
            </CardDescription>
          </CardHeader>

          <CardContent className="text-muted-foreground text-sm">
            Add your first property listing to get started.
          </CardContent>
        </Card>
      )}

      {/* PROPERTY GRID */}
      {filteredProperties.length > 0 && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProperties.map((property: Property) => (
            <PropertyCard
              key={property.id}
              property={property}
              user={user}
            />
          ))}
        </div>
      )}
    </div>
  );
}