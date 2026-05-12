import { Route } from "@/types/routes.type";

export const agentRoutes: Route[] = [
  {
    title: "Agent workspace",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Overview",
        url: "/agent-dashboard/overview",
      },
      {
        title: "Create Listing",
        url: "/agent-dashboard/create-listing",
      },
      {
        title: "Listings",
        url: "/agent-dashboard/listings",
      },
      {
        title: "Clients",
        url: "/agent-dashboard/clients",
      },
    ],
  },
];
