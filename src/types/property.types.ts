/** Aligns with Prisma `Property` model (API may omit optional relation shapes). */

export type PropertyType =
  | "HOUSE"
  | "APARTMENT"
  | "CONDO"
  | "TOWNHOUSE"
  | "LAND"
  | "COMMERCIAL"
  | string

export type ListingType = "SALE" | "RENT" | string

export type PropertyStatus =
  | "PENDING"
  | "ACTIVE"
  | "SOLD"
  | "RENTED"
  | "OFF_MARKET"
  | string

export type Property = {
  id: string
  title: string
  slug: string
  description: string
  shortDescription?: string | null
  price: number
  area: number
  bedrooms: number
  bathrooms: number
  parking?: number
  propertyType: PropertyType
  listingType: ListingType
  status: PropertyStatus
  address: string
  city: string
  state?: string | null
  country: string
  zipCode: string
  latitude?: number | null
  longitude?: number | null
  thumbnail?: string | null
  virtualTourUrl?: string | null
  videoUrl?: string | null
  isFeatured?: boolean
  isAvailable?: boolean
  views?: number
  seoTitle?: string | null
  seoDescription?: string | null
  aiDescription?: string | null
  aiTags?: string[]
  agentId: string
  agent?: { id: string; name: string; email?: string }
  createdAt: string
  updatedAt: string
}
