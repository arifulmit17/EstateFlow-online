"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import EditProfileModal from "@/components/shared/EditProfileModal"
import { getUser } from "@/services/auth.service"
import { fetchPropertiesByAgentId } from "@/services/property2.service"
import type { Property } from "@/types/property.types"

type User = {
  id: string
  name: string
  email: string
  avatar?: string | null
  phone?: string | null
  bio?: string | null
  role: "ADMIN" | "BUYER" | "AGENT"
  isActive: boolean
  isVerified: boolean
  provider: "CREDENTIALS" | "GOOGLE" | "GITHUB"
  refreshToken?: string | null
  lastLoginAt?: string | null
  createdAt: string
  updatedAt: string
}

export default function BuyerDashboardProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser()
      setUser(userData)
      setLoading(false)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const load = async () => {
      if (!user?.id || user.role !== "AGENT") {
        setProperties([])
        return
      }
      const data = await fetchPropertiesByAgentId(user.id)
      setProperties(data)
    }
    load()
  }, [user])

  const totalViews = properties.reduce((acc, p) => acc + (p.views || 0), 0)
  const activeListings = properties.filter((p) => p.status === "ACTIVE").length

  return (
    <div className="mx-auto w-11/12 space-y-10 py-10">
      <div className="flex flex-col items-center gap-6 rounded-2xl border p-6 shadow-sm md:flex-row">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
          {user?.name?.charAt(0) || "U"}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
          <p className="text-muted-foreground">{user?.email}</p>
          <p className="mt-1 text-sm text-primary">
            {user?.role} • {user?.provider}
          </p>
        </div>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Edit profile
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6 text-center">
          <h3 className="text-2xl font-bold text-primary">
            {user?.role === "AGENT" ? properties.length : "—"}
          </h3>
          <p className="text-sm text-muted-foreground">Listings</p>
        </div>
        <div className="rounded-2xl border p-6 text-center">
          <h3 className="text-2xl font-bold text-primary">
            {user?.role === "AGENT" ? totalViews : "—"}
          </h3>
          <p className="text-sm text-muted-foreground">Total views</p>
        </div>
        <div className="rounded-2xl border p-6 text-center">
          <h3 className="text-2xl font-bold text-primary">
            {user?.role === "AGENT" ? activeListings : "—"}
          </h3>
          <p className="text-sm text-muted-foreground">Active listings</p>
        </div>
      </div>

      <EditProfileModal
        open={open}
        setOpen={setOpen}
        user={user}
        onUpdate={(updatedUser) => setUser(updatedUser)}
      />

      {loading && (
        <p className="text-sm text-muted-foreground">Loading...</p>
      )}
    </div>
  )
}
