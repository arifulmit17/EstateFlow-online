"use client"

import PropertyCard from "@/components/cards/PropertyCard"
import { getProperties } from "@/services/property2.service"
import type { Property } from "@/types/property.types"
import React, { useEffect, useState } from "react"

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4)
  const [sortOrder, setSortOrder] = useState<"HIGH" | "LOW">("HIGH")

  const sorted = [...properties].sort((a, b) => {
    const va = a.views ?? 0
    const vb = b.views ?? 0
    return sortOrder === "HIGH" ? vb - va : va - vb
  })

  useEffect(() => {
    const run = async () => {
      try {
        const res = await getProperties()
        setProperties(res)
      } catch (e) {
        console.error(e)
      }
    }
    run()
  }, [])

  const totalPages = Math.ceil(sorted.length / itemsPerPage) || 1
  const paginated = sorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex flex-col gap-10">
      <div className="mx-auto flex w-11/12 items-center justify-between">
        <h2 className="text-xl font-semibold">Properties</h2>
        <select
          className="rounded border bg-background px-3 py-1"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value as "HIGH" | "LOW")
            setCurrentPage(1)
          }}
        >
          <option value="HIGH">Most viewed</option>
          <option value="LOW">Least viewed</option>
        </select>
      </div>

      <div className="mx-auto grid w-11/12 grid-cols-1 gap-5 lg:grid-cols-2">
        {paginated.length > 0 ? (
          paginated.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-muted-foreground">
            <p className="text-lg font-medium">No properties found</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-4 py-6">
        <button
          type="button"
          className="rounded border px-3 py-1 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          className="rounded border px-3 py-1 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
