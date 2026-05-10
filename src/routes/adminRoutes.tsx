import { Route } from "@/types/routes.type";



export const adminRoutes: Route[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "User Data",
        url: "/admin-dashboard/userstats",
      },
      {
        title: "All properties",
        url: "/admin-dashboard/all-properties",
      },
      {
        title: "All Members",
        url: "/admin-dashboard/allmembers",
      },
      {
        title: "Categories",
        url: "/admin-dashboard/categories",
      },
    ],
  },
  
];