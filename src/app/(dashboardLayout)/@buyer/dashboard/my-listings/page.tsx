"use client"

import { useEffect, useState } from "react"
import PropertyCard from "@/components/cards/PropertyCard"
import { getUser } from "@/services/auth.service"
import { fetchPropertiesByAgentId } from "@/services/property2.service"
import type { Property } from "@/types/property.types"

export default function MyListingsPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<{ id: string; role: string } | null>(null)

  useEffect(() => {
    const getUserData = async () => {
      const result = await getUser()
      setUser(result)
    }
    getUserData()
  }, [])

  useEffect(() => {
    const load = async () => {
      if (!user?.id) return
      if (user.role !== "AGENT") {
        setProperties([])
        setLoading(false)
        return
      }
      const data = await fetchPropertiesByAgentId(user.id)
      setProperties(data)
      setLoading(false)
    }
    load()
  }, [user])

  return (
    <div className="mx-auto w-11/12 space-y-8 py-10" suppressHydrationWarning>
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <h1 className="text-3xl font-bold">My listings</h1>
      </div>

      {loading && (
        <div className="py-10 text-center text-muted-foreground">
          Loading your listings...
        </div>
      )}

      {!loading && user?.role !== "AGENT" && (
        <div className="py-10 text-center text-muted-foreground">
          <p className="text-lg font-medium">Agent access only</p>
          <p className="text-sm">
            Only agents can manage property listings here.
          </p>
        </div>
      )}

      {!loading && user?.role === "AGENT" && properties.length === 0 && (
        <div className="py-10 text-center text-muted-foreground">
          <p className="text-lg font-medium">No listings yet</p>
          <p className="text-sm">Create your first listing from the dashboard.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
