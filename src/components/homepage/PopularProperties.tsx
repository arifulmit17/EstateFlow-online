"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getUser } from "@/services/auth.service"
import { getProperties } from "@/services/property2.service"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import type { Property } from "@/types/property.types"

function PropertySkeleton() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="space-y-4 p-5">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
      </CardContent>
    </Card>
  )
}

export default function PopularProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<unknown>(null)

  useEffect(() => {
    const run = async () => {
      try {
        const result = await getProperties()
        const list = Array.isArray(result) ? result : []
        const sorted = [...list].sort(
          (a, b) => (b.views ?? 0) - (a.views ?? 0)
        )
        setProperties(sorted.slice(0, 4))
      } catch (err) {
        console.error("Failed to fetch properties:", err)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const u = await getUser()
      setUser(u)
    }
    fetchUser()
  }, [])

  return (
    <div className="mx-auto w-11/12 space-y-6 py-10">
      <div className="flex items-center justify-between">
        <Link
          href="/properties"
          className="text-sm text-primary hover:underline"
        >
          View all →
        </Link>
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <PropertySkeleton key={i} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="relative rounded-2xl transition hover:shadow-lg"
          >
            <CardContent className="space-y-3 p-5">
              {property.isFeatured && (
                <Badge className="bg-amber-500 text-white">Featured</Badge>
              )}
              <Badge variant="secondary" className="capitalize">
                {property.propertyType} · {property.listingType}
              </Badge>

              <div className="flex h-20 w-11/12 items-center justify-center overflow-hidden rounded-2xl bg-muted">
                {property.thumbnail ? (
                  <Image
                    src={property.thumbnail}
                    alt={property.title}
                    width={100}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-bold text-primary">
                    {property.title?.charAt(0) || "P"}
                  </span>
                )}
              </div>

              <div className="h-10 w-11/12">
                <h3 className="line-clamp-2 text-lg font-semibold">
                  {property.title}
                </h3>
              </div>

              <div className="h-20 w-11/12">
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {property.shortDescription || property.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-primary">
                  {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(property.price)}
                </span>
                {user ? (
                  <Link
                    href={`/properties/${property.slug}`}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    View →
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition hover:opacity-90"
                  >
                    Log in to view →
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {!loading && properties.length === 0 && (
        <p className="text-center text-muted-foreground">
          No featured listings yet.
        </p>
      )}
    </div>
  )
}
