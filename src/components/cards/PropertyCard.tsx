"use client";

import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/types/property.types";
import { cn } from "@/lib/utils";
import UpdatePropertyButton from "@/components/shared/UpdatePropertyButton";


type Props = {
  property: Property;
  className?: string;
  user:{
    id: string;
    role: string;
    name: string;
    email: string;
  }
};

export default function PropertyCard({
  property,
  className,
  user,
}: Props) {
  const img = property.thumbnail;

  return (
    <div
      className={cn(
        "group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
    >
      {/* FEATURED BADGE */}
      {property.isFeatured && (
        <div className="absolute -top-3 -right-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow">
          Featured
        </div>
      )}

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted">
          {img ? (
            <Image
              src={img}
              alt={property.title}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-primary">
              {property.title?.charAt(0) || "P"}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold capitalize leading-tight">
            {property.title}
          </h3>

          <p className="text-sm text-muted-foreground">
            {property.city}, {property.country} ·{" "}
            {property.propertyType} ·{" "}
            {property.listingType}
          </p>
        </div>
      </div>

      <div className="my-4 h-px bg-muted" />

      {/* DESCRIPTION */}
      <p className="line-clamp-3 text-sm text-muted-foreground">
        {property.shortDescription ||
          property.description}
      </p>

      <div className="my-4 h-px bg-muted" />

      {/* PRICE */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Price
          </p>

          <p className="text-xl font-bold text-primary">
            {new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(property.price)}
          </p>
        </div>

        <div className="text-right text-sm text-muted-foreground">
          <p>
            {property.bedrooms} bd ·{" "}
            {property.bathrooms} ba
          </p>

          <p>{property.area} m²</p>
        </div>
      </div>

      {/* STATUS + ACTIONS */}
      <div className="mt-5 flex items-center justify-between">
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            property.status === "ACTIVE"
              ? "bg-green-100 text-green-700"
              : property.status === "PENDING"
              ? "bg-amber-100 text-amber-800"
              : "bg-muted text-muted-foreground"
          )}
        >
          {String(property.status).replaceAll(
            "_",
            " "
          )}
        </span>

        <div className="flex items-center gap-2">
        {user.role=="AGENT" && <UpdatePropertyButton
            propertyId={property.id}
          />
}  
          <Link
            href={`/properties/${property.slug}`}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}