"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { updatePropertyStatus } from "@/services/property2.service"
import type { PropertyStatus } from "@/types/property.types"

type Props = {
  propertyId: string
  currentStatus: PropertyStatus
}

export default function PropertyStatusActions({
  propertyId,
  currentStatus,
}: Props) {
  const [loading, setLoading] = useState(false)

  const handleStatusChange = async (status: PropertyStatus) => {
    setLoading(true)
    try {
      const res = await updatePropertyStatus(propertyId, status)
      if (res.success) {
        toast.success(`Status updated to ${status}`)
        window.location.reload()
      } else {
        toast.error(
          "message" in res ? res.message : "Failed to update"
        )
      }
    } catch {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col flex-wrap gap-2 lg:flex-row">
      <Button
        variant={currentStatus === "PENDING" ? "default" : "outline"}
        onClick={() => handleStatusChange("PENDING")}
        disabled={loading}
      >
        Pending
      </Button>
      <Button
        className="bg-green-600 text-white hover:bg-green-700"
        onClick={() => handleStatusChange("ACTIVE")}
        disabled={loading}
      >
        Approve
      </Button>
      <Button
        variant="destructive"
        onClick={() => handleStatusChange("OFF_MARKET")}
        disabled={loading}
      >
        Reject
      </Button>
    </div>
  )
}
