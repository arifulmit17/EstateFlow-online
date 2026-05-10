"use client"

import PropertyCardAdmin from "@/components/cards/PropertyCardAdmin"
import { getProperties } from "@/services/property2.service"
import type { Property } from "@/types/property.types"
import React, { useEffect, useState } from "react"

export default function AllPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const data = await getProperties()
        setProperties(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  if (loading) {
    return <p className="py-10 text-center text-muted-foreground">Loading…</p>
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="mx-auto grid w-11/12 grid-cols-1 gap-5 lg:grid-cols-2">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCardAdmin key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-muted-foreground">
            <p className="text-lg font-medium">No properties found</p>
          </div>
        )}
      </div>
    </div>
  )
}
