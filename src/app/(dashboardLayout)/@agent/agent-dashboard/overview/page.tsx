import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AgentOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-muted-foreground text-sm">
          Your pipeline and activity at a glance.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active listings</CardDescription>
            <CardTitle className="text-3xl tabular-nums">—</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Connect your backend to show live counts.
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Scheduled showings</CardDescription>
            <CardTitle className="text-3xl tabular-nums">—</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Upcoming tours and open houses.
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Buyer leads</CardDescription>
            <CardTitle className="text-3xl tabular-nums">—</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            New inquiries this week.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
