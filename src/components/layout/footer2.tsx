import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Globe,
  Send,
  Camera,
  Briefcase,
} from "lucide-react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
}

const Footer2 = ({
  className,

  tagline = "AI-powered real estate platform for smarter property discovery.",

  menuItems = [
    {
      title: "Platform",
      links: [
        { text: "Properties", url: "/properties" },
        { text: "Agents", url: "/agents" },
        { text: "Pricing", url: "/pricing" },
        { text: "Blogs", url: "/blog" },
      ],
    },

    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Contact", url: "/contact" },
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms & Conditions", url: "/terms" },
      ],
    },
  ],

  copyright = "© 2026 EstateFlow. All rights reserved.",
}: Footer2Props) => {
  return (
    <footer
      className={cn(
        "border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className
      )}
    >
      <div className="container mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-5">

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                <Building2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  EstateFlow
                </h2>

                <p className="text-xs text-muted-foreground">
                  Smart Real Estate Platform
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {tagline}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">

              <Link
                href="https://facebook.com"
                className="rounded-xl border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <Globe className="h-4 w-4" />
              </Link>

              <Link
                href="https://twitter.com"
                className="rounded-xl border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <Send className="h-4 w-4" />
              </Link>

              <Link
                href="https://instagram.com"
                className="rounded-xl border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <Camera className="h-4 w-4" />
              </Link>

              <Link
                href="https://linkedin.com"
                className="rounded-xl border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <Briefcase className="h-4 w-4" />
              </Link>

            </div>
          </div>

          {/* Footer Menus */}
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.url}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>

            <ul className="space-y-5 text-sm text-muted-foreground">

              <li className="flex items-start gap-3">
                <div className="rounded-xl border p-2">
                  <Mail className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Email
                  </p>

                  <p>support@estateflow.com</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="rounded-xl border p-2">
                  <Phone className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Phone
                  </p>

                  <p>+880 1234-567890</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="rounded-xl border p-2">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    Location
                  </p>

                  <p>Dhaka, Bangladesh</p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">

          <p>{copyright}</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-foreground"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-foreground"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-foreground"
            >
              Cookies
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export { Footer2 };