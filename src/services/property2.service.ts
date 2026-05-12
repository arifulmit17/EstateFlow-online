"use server"

import { cookies } from "next/headers"
import type { Property, PropertyStatus } from "@/types/property.types"

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

async function authHeaders(): Promise<HeadersInit | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  if (!token) return null
  return { Cookie: `token=${token}` }
}

export async function getProperties(): Promise<Property[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/property`, {
      method: "GET",
      cache: "no-store",
    })
    const result = await res.json()
    if (!res.ok || !result.success) {
      throw new Error(result?.message || "Failed to fetch properties")
    }
    return result.data || []
  } catch (e) {
    console.error("getProperties:", e)
    return []
  }
}

export const getPropertyById = async (id: string): Promise<Property | null> => {
  try {
    const res = await fetch(`${BASE_URL}/api/property/${id}`, { method: "GET", cache: "no-store" })
    const result = await res.json()
    if (!res.ok || !result.success) {
      throw new Error(result?.message || "Failed to fetch property")
    }
    return result.data ?? null
  } catch (e) {
    console.error("getPropertyById:", e)
    return null
  }
}

export async function fetchPropertiesByAgentId(
  agentId: string
): Promise<Property[]> {
  const headers = await authHeaders()
  if (!headers || !agentId) return []
  try {
    const res = await fetch(`${BASE_URL}/api/property/agent/${agentId}`, {
      method: "GET",
      headers,
      cache: "no-store",
    })
    const result = await res.json()
    if (!res.ok || !result.success) {
      throw new Error(result?.message || "Failed to fetch agent properties")
    }
    return result.data || []
  } catch (e) {
    console.error("fetchPropertiesByAgentId:", e)
    return []
  }
}

export async function fetchPropertyBySlug(
  slug: string
): Promise<Property | null> {
  const headers = await authHeaders()
  try {
    const res = await fetch(`${BASE_URL}/api/property/slug/${slug}`, {
      method: "GET",
      headers: headers ?? {},
      cache: "no-store",
    })
    const result = await res.json()
    if (!res.ok || !result.success) {
      return null
    }
    return result.data ?? null
  } catch (e) {
    console.error("fetchPropertyBySlug:", e)
    return null
  }
}

export type CreatePropertyInput = {
  title: string
  slug: string
  description: string
  shortDescription?: string
  price: number
  area: number
  bedrooms: number
  bathrooms: number
  parking?: number
  propertyType: string
  listingType: string
  address: string
  city: string
  state?: string
  country: string
  zipCode: string
  latitude?: number
  longitude?: number
  thumbnail?: string
  virtualTourUrl?: string
  videoUrl?: string
  isFeatured?: boolean
  isAvailable?: boolean
  agentId: string
}

export async function createProperty(
  form: CreatePropertyInput
): Promise<Property | null> {
  const headers = await authHeaders()
  if (!headers) return null
  try {
    const res = await fetch(`${BASE_URL}/api/property`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        ...form,
        parking: form.parking ?? 0,
        isFeatured: form.isFeatured ?? false,
        isAvailable: form.isAvailable ?? true,
      }),
    })
    const data = await res.json()
    if (!res.ok || !data?.success) {
      throw new Error(data?.message || "Failed to create property")
    }
    return data.data ?? null
  } catch (e) {
    console.error("createProperty:", e)
    return null
  }
}

export async function updatePropertyStatus(
  propertyId: string,
  status: PropertyStatus
) {
  const headers = await authHeaders()
  if (!headers) return { success: false, message: "Unauthorized" }
  try {
    const res = await fetch(
      `${BASE_URL}/api/property/${propertyId}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify({ status }),
      }
    )
    const data = await res.json()
    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Failed to update status",
      }
    }
    return { success: true, data: data.data, message: data.message }
  } catch (e) {
    console.error("updatePropertyStatus:", e)
    return { success: false, message: "Something went wrong" }
  }
}
