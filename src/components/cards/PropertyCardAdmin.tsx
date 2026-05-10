"use client"

import Link from "next/link"
import Image from "next/image"
import PropertyStatusActions from "@/components/shared/ChangePropertyStatus"
import type { Property } from "@/types/property.types"

export default function PropertyCardAdmin({ property }: { property: Property }) {
  const img = property.thumbnail

  return (
    <div className="group relative min-h-[280px] rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-card">
          {img ? (
            <Image
              src={img}
              alt={property.title}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-primary">
              {property.agent?.name?.charAt(0) || "A"}
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="h-10 w-11/12">
            <h3 className="text-lg font-semibold capitalize leading-tight">
              {property.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {property.agent?.name ?? "Agent"} · {property.city} ·{" "}
            {property.propertyType}
          </p>
        </div>
      </div>

      <div className="my-4 h-px bg-muted" />

      <div className="h-1/5 w-11/12">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {property.description}
        </p>
      </div>

      <div className="my-4 h-px bg-muted" />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Views
          </p>
          <p className="text-2xl font-bold text-primary">
            {property.views ?? 0}
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            property.status === "ACTIVE"
              ? "bg-green-100 text-green-700"
              : property.status === "PENDING"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-600"
          }`}
        >
          {String(property.status).replaceAll("_", " ")}
        </span>
        <span className="text-sm text-muted-foreground">
          {new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(property.price)}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-5">
        <PropertyStatusActions
          propertyId={property.id}
          currentStatus={property.status}
        />
        <Link
          href={`/properties/${property.slug}`}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          View →
        </Link>
      </div>
    </div>
  )
}
