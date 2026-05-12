"use client"

import { useEffect, useState } from "react"
import PropertyCard from "@/components/cards/PropertyCard"
import { getUser } from "@/services/auth.service"

import { getProperties, getPropertyById } from "@/services/property2.service"
import type { Property } from "@/types/property.types"
import { getAppointments } from "@/services/appointment.service"

interface Booking {
  id: string
  propertyId: string
  status: "PENDING" | "CONFIRMED" | "CANCELLED"
  createdAt: string
}

export default function MyBookingsPage() {
  const [user, setUser] = useState<{ id: string; role: string } | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  // Load user
  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await getUser()
        setUser(result)
      } catch (error) {
        console.error("Failed to load user:", error)
      }
    }

    loadUser()
  }, [])

  // Load bookings + properties
  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) return

      if (user.role !== "BUYER") {
        setLoading(false)
        return
      }

      try {
        const bookingData = await getAppointments()

        setBookings(bookingData || [])

        // fetch properties for each booking
        const propertyPromises = (bookingData || []).map(
          async (b: Booking) => {
            const property = await getPropertyById(b.propertyId)
            return property
          }
        )

        const propertyResults = await Promise.all(propertyPromises)

        setProperties(propertyResults.filter(Boolean))
      } catch (error) {
        console.error("Failed to load bookings:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [user])

  // group booking + property together
  const enrichedData = bookings.map((booking) => {
    const property = properties.find(
      (p) => p.id === booking.propertyId
    )

    return {
      booking,
      property,
    }
  })

  return (
    <div className="mx-auto w-11/12 space-y-10 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold">My Bookings</h1>

      {/* LOADING */}
      {loading && (
        <div className="py-10 text-center text-muted-foreground">
          Loading your bookings...
        </div>
      )}

      {/* NOT BUYER */}
      {!loading && user?.role !== "BUYER" && (
        <div className="py-10 text-center text-muted-foreground">
          <p className="text-lg font-medium">Buyer access only</p>
          <p className="text-sm">
            Only buyers can view booked properties here.
          </p>
        </div>
      )}

      {/* NO BOOKINGS */}
      {!loading &&
        user?.role === "BUYER" &&
        bookings.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">
            <p className="text-lg font-medium">
              No bookings yet
            </p>
            <p className="text-sm">
              Start exploring properties and book your first one.
            </p>
          </div>
        )}

      {/* BOOKINGS LIST */}
      {!loading &&
        user?.role === "BUYER" &&
        enrichedData.length > 0 && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {enrichedData.map(({ booking, property }) => (
              <div key={booking.id} className="relative">

                {property && (
                  <PropertyCard property={property} />
                )}

                {/* STATUS BADGE */}
                <div
                  className={`
                    absolute top-3 right-3 text-xs px-3 py-1 rounded-full text-white
                    ${
                      booking.status === "CONFIRMED"
                        ? "bg-green-600"
                        : booking.status === "PENDING"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }
                  `}
                >
                  {booking.status}
                </div>

              </div>
            ))}

          </div>
        )}
    </div>
  )
}