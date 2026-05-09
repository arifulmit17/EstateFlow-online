import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AgentListingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Listings</h1>
        <p className="text-muted-foreground text-sm">
          Properties you represent and their status.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>No listings yet</CardTitle>
          <CardDescription>
            This area is ready for your listings API or CMS integration.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Add table or cards here when data is available.
        </CardContent>
      </Card>
    </div>
  );
}
