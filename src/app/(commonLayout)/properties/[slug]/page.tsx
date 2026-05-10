"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { fetchPropertyBySlug } from "@/services/property2.service"
import type { Property } from "@/types/property.types"

export default function PropertyDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      if (!slug) return
      const data = await fetchPropertyBySlug(slug)
      setProperty(data)
      setLoading(false)
    }
    run()
  }, [slug])

  if (loading) {
    return <p className="py-20 text-center">Loading...</p>
  }

  if (!property) {
    return <p className="py-20 text-center">Property not found</p>
  }

  const img = property.thumbnail

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold md:text-4xl">{property.title}</h1>
        <p className="mt-2 text-muted-foreground">
          {property.address}, {property.city}
          {property.state ? `, ${property.state}` : ""}, {property.country}{" "}
          {property.zipCode}
        </p>
        <p className="mt-2 text-2xl font-semibold text-primary">
          {new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(property.price)}
        </p>
      </div>

      {img && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt={property.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-muted-foreground">
          {property.propertyType} · {property.listingType} · Status:{" "}
          {property.status}
        </p>
        <p>
          {property.bedrooms} bed · {property.bathrooms} bath ·{" "}
          {property.area} m²
          {property.parking != null ? ` · ${property.parking} parking` : ""}
        </p>
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="whitespace-pre-wrap">{property.description}</p>
        {property.aiDescription && (
          <>
            <h3 className="text-lg font-semibold">AI summary</h3>
            <p className="whitespace-pre-wrap text-muted-foreground">
              {property.aiDescription}
            </p>
          </>
        )}
      </div>

      <div className="mt-10">
        <Link href="/properties">
          <span className="text-primary hover:underline">← Back to properties</span>
        </Link>
      </div>
    </div>
  )
}
