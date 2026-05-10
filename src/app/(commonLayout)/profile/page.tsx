"use client"

import { useEffect, useState } from "react"
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

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  const formatDate = (date?: string | null) =>
    date ? new Date(date).toLocaleString() : "N/A"

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  useEffect(() => {
    const loadProperties = async () => {
      if (!user?.id || user.role !== "AGENT") {
        setProperties([])
        return
      }
      const data = await fetchPropertiesByAgentId(user.id)
      setProperties(data)
    }

    loadProperties()
  }, [user])

  const totalViews = properties.reduce((acc, p) => acc + (p.views || 0), 0)
  const activeListings = properties.filter((p) => p.status === "ACTIVE").length

  return (
    <div className="mx-auto w-11/12 space-y-10 py-10">
      <div className="flex flex-col items-center gap-6 rounded-2xl border p-6 shadow-sm md:flex-row">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-2xl font-bold text-primary">
          {user?.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.avatar}
              alt={user.name}
              className="h-full w-full object-cover"
            />
          ) : (
            user?.name?.charAt(0) || "U"
          )}
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold">
            {user?.name || "Unknown User"}
          </h2>
          <p className="text-muted-foreground">{user?.email || "No email found"}</p>
          <p className="mt-1 text-sm text-primary">
            {user?.role || "UNKNOWN"} • {user?.provider || "N/A"}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
            <span
              className={`rounded px-2 py-1 text-xs ${user?.isActive ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}
            >
              {user?.isActive ? "Active" : "Blocked"}
            </span>
            <span
              className={`rounded px-2 py-1 text-xs ${user?.isVerified ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
            >
              {user?.isVerified ? "Verified" : "Unverified"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h3 className="mb-3 text-lg font-semibold">Profile details</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Phone:</span>{" "}
              {user?.phone || "N/A"}
            </p>
            <p>
              <span className="text-muted-foreground">Bio:</span>{" "}
              {user?.bio || "N/A"}
            </p>
            <p>
              <span className="text-muted-foreground">Last login:</span>{" "}
              {formatDate(user?.lastLoginAt)}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="mb-3 text-lg font-semibold">Account</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">User ID:</span>{" "}
              {user?.id || "N/A"}
            </p>
            <p>
              <span className="text-muted-foreground">Created:</span>{" "}
              {formatDate(user?.createdAt)}
            </p>
            <p>
              <span className="text-muted-foreground">Updated:</span>{" "}
              {formatDate(user?.updatedAt)}
            </p>
          </div>
        </div>
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

      {loading && (
        <p className="text-sm text-muted-foreground">Loading profile...</p>
      )}
      {!loading && !user && (
        <p className="text-sm text-muted-foreground">
          Unable to load user profile.
        </p>
      )}
    </div>
  )
}
