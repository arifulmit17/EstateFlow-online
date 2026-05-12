import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import {
  CalendarDays,
  Mail,
  Phone,
  Home,
} from "lucide-react";

interface ClientCardProps {
  appointment: any;
}

export default function ClientCard({
  appointment,
}: ClientCardProps) {
  const buyer = appointment?.buyer;
  const property = appointment?.property;

  const statusVariant =
    appointment?.status === "CONFIRMED"
      ? "default"
      : appointment?.status === "PENDING"
      ? "secondary"
      : "destructive";

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 space-y-5">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Avatar className="h-12 w-12 border">
              <AvatarImage src={buyer?.avatar} />
              <AvatarFallback>
                {buyer?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-base font-semibold leading-tight">
                {buyer?.name || "Unknown User"}
              </h2>

              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Home className="h-4 w-4" />
                {property?.title || "Property"}
              </p>
            </div>

          </div>

          <Badge variant={statusVariant}>
            {appointment?.status || "PENDING"}
          </Badge>

        </div>

        {/* CONTACT SECTION */}
        <div className="space-y-2 text-sm text-muted-foreground border-t pt-4">

          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="truncate">{buyer?.email}</span>
          </div>

          {buyer?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{buyer.phone}</span>
            </div>
          )}

        </div>

        {/* APPOINTMENT SECTION */}
        <div className="border-t pt-4 space-y-2 text-sm">

          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>
              {appointment?.date
                ? new Date(appointment.date).toLocaleString()
                : "No appointment scheduled"}
            </span>
          </div>

          <div className="text-xs text-muted-foreground">
            Property ID:{" "}
            <span className="font-medium text-foreground">
              {property?.id || "N/A"}
            </span>
          </div>

        </div>

      </CardContent>
    </Card>
  );
}