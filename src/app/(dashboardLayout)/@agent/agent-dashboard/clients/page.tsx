import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AgentClientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
        <p className="text-muted-foreground text-sm">
          Buyers and sellers you are working with.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Client roster</CardTitle>
          <CardDescription>
            Wire this page to your CRM or contacts service when ready.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          You can show stages, last contact, and assigned properties here.
        </CardContent>
      </Card>
    </div>
  );
}
