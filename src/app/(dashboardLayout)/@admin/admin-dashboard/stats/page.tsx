"use client"

import { getProperties } from "@/services/property2.service"
import React, { useEffect, useMemo, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import type { Property } from "@/types/property.types"

export default function AdminStatsPage() {
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

  const cityData = useMemo(() => {
    const map: Record<string, number> = {}
    properties.forEach((p) => {
      const k = p.city || "Unknown"
      map[k] = (map[k] || 0) + 1
    })
    return Object.entries(map).map(([name, value]) => ({ name, value }))
  }, [properties])

  const statusData = useMemo(() => {
    const map: Record<string, number> = {}
    properties.forEach((p) => {
      const s = String(p.status)
      map[s] = (map[s] || 0) + 1
    })
    return Object.entries(map).map(([name, value]) => ({ name, value }))
  }, [properties])

  const typeData = useMemo(() => {
    const map: Record<string, number> = {}
    properties.forEach((p) => {
      const t = String(p.propertyType)
      map[t] = (map[t] || 0) + 1
    })
    return Object.entries(map).map(([name, value]) => ({ name, value }))
  }, [properties])

  const listingMix = useMemo(() => {
    let sale = 0
    let rent = 0
    properties.forEach((p) => {
      if (String(p.listingType).toUpperCase() === "RENT") rent++
      else sale++
    })
    return [
      { name: "Sale", value: sale },
      { name: "Rent", value: rent },
    ]
  }, [properties])

  const COLORS = ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6"]

  if (loading) {
    return <p className="p-6">Loading stats...</p>
  }

  const active = properties.filter((p) => p.status === "ACTIVE").length
  const pending = properties.filter((p) => p.status === "PENDING").length

  return (
    <div className="mx-auto w-11/12 space-y-10 py-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl border p-4">
          <p>Total listings</p>
          <h2 className="text-2xl font-bold">{properties.length}</h2>
        </div>
        <div className="rounded-xl border p-4">
          <p>Active</p>
          <h2 className="text-2xl font-bold text-green-500">{active}</h2>
        </div>
        <div className="rounded-xl border p-4">
          <p>Pending</p>
          <h2 className="text-2xl font-bold text-yellow-500">{pending}</h2>
        </div>
        <div className="rounded-xl border p-4">
          <p>Featured</p>
          <h2 className="text-2xl font-bold text-blue-500">
            {properties.filter((p) => p.isFeatured).length}
          </h2>
        </div>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="mb-4 font-semibold">Listings by city</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="h-[300px] rounded-2xl border p-4">
          <h2 className="mb-2 font-semibold">Status</h2>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={statusData} dataKey="value">
                {statusData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[300px] rounded-2xl border p-4">
          <h2 className="mb-2 font-semibold">Property type</h2>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={typeData} dataKey="value">
                {typeData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[300px] rounded-2xl border p-4">
          <h2 className="mb-2 font-semibold">Sale vs rent</h2>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={listingMix} dataKey="value">
                {listingMix.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
