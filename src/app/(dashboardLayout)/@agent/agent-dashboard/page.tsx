export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";

export default function AgentDashboardIndex() {
  redirect("/agent-dashboard/overview");
}
