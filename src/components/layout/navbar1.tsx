"use client";

import { Menu, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Accordion,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getUser } from "@/services/auth.service";

import { ModeToggle } from "../shared/ModeToggle";
import ProfileDropdown from "../shared/DropdownButton";

interface MenuItem {
  title: string;
  url: string;
}

interface Navbar1Props {
  className?: string;

  logo?: {
    alt: string;
    title: string;
    className?: string;
  };

  menu?: MenuItem[];

  auth?: {
    profile: {
      title: string;
      url: string;
    };

    login: {
      title: string;
      url: string;
    };

    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    alt: "EstateFlow",
    title: "EstateFlow",
  },

  menu = [
    { title: "Home", url: "/" },
    { title: "Properties", url: "/properties" },
    { title: "Agents", url: "/agents" },
    { title: "Blog", url: "/blog" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ],

  auth = {
    profile: {
      title: "Profile",
      url: "/profile",
    },

    login: {
      title: "Login",
      url: "/login",
    },

    signup: {
      title: "Get Started",
      url: "/signup",
    },
  },

  className,
}: Navbar1Props) => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const data = await getUser();
      setSession(data);
    };

    fetchSession();
  }, []);

  const role = session?.role;

  let dashboardItem: MenuItem | null = null;

  if (role === "BUYER") {
    dashboardItem = {
      title: "Dashboard",
      url: "/dashboard",
    };
  } else if (role === "ADMIN") {
    dashboardItem = {
      title: "Dashboard",
      url: "/admin-dashboard",
    };
  } else if (role === "AGENT") {
    dashboardItem = {
      title: "Dashboard",
      url: "/agent-dashboard",
    };
  }

  const finalMenu = dashboardItem
    ? [...menu, dashboardItem]
    : menu;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
            <Building2 className="h-5 w-5" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">
              {logo.title}
            </span>

            <span className="text-xs text-muted-foreground">
              AI Real Estate Platform
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          <NavigationMenu>
            <NavigationMenuList className="gap-2">

              {finalMenu.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.url}
                      className="
                        group relative rounded-xl px-4 py-2 text-sm font-medium
                        text-muted-foreground transition-all duration-300
                        hover:bg-muted hover:text-foreground
                      "
                    >
                      <span>{item.title}</span>

                      <span className="absolute inset-x-3 -bottom-0.5 h-[2px] scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

            </NavigationMenuList>
          </NavigationMenu>

        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">

          <ModeToggle />

          {session ? (
            <ProfileDropdown
              session={session}
              auth={auth}
            />
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
                className="rounded-xl"
              >
                <Link href={auth.login.url}>
                  {auth.login.title}
                </Link>
              </Button>

              <Button
                asChild
                className="rounded-xl px-5 shadow-md"
              >
                <Link href={auth.signup.url}>
                  {auth.signup.title}
                </Link>
              </Button>
            </>
          )}

        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">

          <ModeToggle />

          <Sheet>

            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[320px] border-l bg-background/95 backdrop-blur-xl">

              <SheetHeader className="border-b pb-5">
                <SheetTitle className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-lg font-bold">
                      EstateFlow
                    </span>

                    <span className="text-xs text-muted-foreground">
                      AI Real Estate Platform
                    </span>
                  </div>

                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-8 py-8">

                {/* Mobile Nav */}
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-2"
                >
                  {finalMenu.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="
                        rounded-xl px-4 py-3 text-sm font-medium
                        text-muted-foreground transition-all
                        hover:bg-muted hover:text-foreground
                      "
                    >
                      {item.title}
                    </Link>
                  ))}
                </Accordion>

                {/* Mobile Actions */}
                <div className="flex flex-col gap-3">

                  {session ? (
                    <ProfileDropdown
                      session={session}
                      auth={auth}
                    />
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-xl"
                      >
                        <Link href={auth.login.url}>
                          {auth.login.title}
                        </Link>
                      </Button>

                      <Button
                        asChild
                        className="rounded-xl"
                      >
                        <Link href={auth.signup.url}>
                          {auth.signup.title}
                        </Link>
                      </Button>
                    </>
                  )}

                </div>

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>
    </header>
  );
};

export { Navbar1 };