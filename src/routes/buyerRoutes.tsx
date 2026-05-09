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
        title: "Create Ideas",
        url: "/dashboard/createidea",
      },
      {
        title: "My Ideas",
        url: "/dashboard/myidea",
      },
    ],
  },
];
