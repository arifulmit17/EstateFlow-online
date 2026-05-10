import { Route } from "@/types/routes.type";

export const buyerRoutes: Route[] = [
  {
    title: "Buyer dashboard",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Profile",
        url: "/dashboard/profile",
      },
      {
        title: "Create listing",
        url: "/dashboard/create-listing",
      },
      {
        title: "My listings",
        url: "/dashboard/my-listings",
      },
    ],
  },
];
