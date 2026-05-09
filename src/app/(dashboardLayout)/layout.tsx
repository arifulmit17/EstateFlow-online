export const dynamic = "force-dynamic"
import { AppSidebar } from "@/components/app-sidebar";
import ProfileDropdown from "@/components/shared/DropdownButton";
import { ModeToggle } from "@/components/shared/ModeToggle";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getUser } from "@/services/auth.service";

function dashboardRoleLabel(role: string | undefined) {
  if (!role) return "Guest";
  return role.charAt(0) + role.slice(1).toLowerCase();
}

const auth = {
    profile: { title: "Profile", url: "/profile" },
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
  }

export default async function DashboardLayout({
  buyer,
  admin,
  agent,
}: {
  buyer: React.ReactNode;
  admin: React.ReactNode;
  agent: React.ReactNode;
}) {
  const data = await getUser();
  const userInfo = {
    role: data?.role,
  };

  const role = userInfo.role;
  const dashboardBody =
    role === "ADMIN"
      ? admin
      : role === "AGENT"
        ? agent
        : role === "BUYER"
          ? buyer
          : null;

  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{dashboardRoleLabel(userInfo.role)}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="w-full flex justify-end gap-5">
            <ModeToggle></ModeToggle>
            <ProfileDropdown session={data} auth={auth}></ProfileDropdown>
          </div>
          
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {dashboardBody ?? (
            <p className="text-muted-foreground text-sm">
              Sign in with a supported role (admin, buyer, or agent) to view this
              dashboard.
            </p>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}