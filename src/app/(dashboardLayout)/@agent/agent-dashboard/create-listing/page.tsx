"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { getUser } from "@/services/auth.service"
import { createProperty } from "@/services/property2.service"

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export default function CreateListingPage() {
  const [loading, setLoading] = useState(false)
  const [agentId, setAgentId] = useState<string | null>(null)
  const [role, setRole] = useState<string | null>(null)

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    shortDescription: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    parking: "0",
    propertyType: "HOUSE",
    listingType: "SALE",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    thumbnail: "",
  })

  useEffect(() => {
    const run = async () => {
      const u = await getUser()
      setAgentId(u?.id ?? null)
      setRole(u?.role ?? null)
    }
    run()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setForm((prev) => {
      const next = { ...prev, [name]: value }
      if (name === "title") {
        next.slug = slugify(value)
      }
      return next
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (role !== "AGENT" || !agentId) {
      toast.error("Only agents can create listings.")
      return
    }
    setLoading(true)
    try {
      const created = await createProperty({
        title: form.title,
        slug: form.slug || slugify(form.title),
        description: form.description,
        shortDescription: form.shortDescription || undefined,
        price: Number(form.price),
        area: Number(form.area),
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        parking: Number(form.parking || 0),
        propertyType: form.propertyType,
        listingType: form.listingType,
        address: form.address,
        city: form.city,
        state: form.state || undefined,
        country: form.country,
        zipCode: form.zipCode,
        thumbnail: form.thumbnail || undefined,
        agentId,
      })
      if (created) {
        toast.success("Listing created.")
        setForm({
          title: "",
          slug: "",
          description: "",
          shortDescription: "",
          price: "",
          area: "",
          bedrooms: "",
          bathrooms: "",
          parking: "0",
          propertyType: "HOUSE",
          listingType: "SALE",
          address: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
          thumbnail: "",
        })
      } else {
        toast.error("Could not create listing.")
      }
    } catch {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Card className="rounded-2xl">
        <CardContent className="space-y-6 p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Create listing</h1>
            <p className="text-sm text-muted-foreground">
              Add a new property to your portfolio
            </p>
          </div>

          {role && role !== "AGENT" && (
            <p className="text-center text-sm text-amber-700">
              You need an agent account to publish listings.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Slug (URL)</Label>
              <Input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="auto from title"
                required
              />
            </div>
            <div>
              <Label>Short description</Label>
              <Input
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Price (USD)</Label>
                <Input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  required
                  min={0}
                  step="0.01"
                />
              </div>
              <div>
                <Label>Area (m²)</Label>
                <Input
                  name="area"
                  type="number"
                  value={form.area}
                  onChange={handleChange}
                  required
                  min={0}
                  step="0.01"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Bedrooms</Label>
                <Input
                  name="bedrooms"
                  type="number"
                  value={form.bedrooms}
                  onChange={handleChange}
                  required
                  min={0}
                />
              </div>
              <div>
                <Label>Bathrooms</Label>
                <Input
                  name="bathrooms"
                  type="number"
                  value={form.bathrooms}
                  onChange={handleChange}
                  required
                  min={0}
                />
              </div>
              <div>
                <Label>Parking</Label>
                <Input
                  name="parking"
                  type="number"
                  value={form.parking}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Property type</Label>
                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  className="w-full rounded-md border px-3 py-2"
                >
                  <option value="HOUSE">House</option>
                  <option value="APARTMENT">Apartment</option>
                  <option value="CONDO">Condo</option>
                  <option value="TOWNHOUSE">Townhouse</option>
                  <option value="LAND">Land</option>
                  <option value="COMMERCIAL">Commercial</option>
                </select>
              </div>
              <div>
                <Label>Listing type</Label>
                <select
                  name="listingType"
                  value={form.listingType}
                  onChange={handleChange}
                  className="w-full rounded-md border px-3 py-2"
                >
                  <option value="SALE">Sale</option>
                  <option value="RENT">Rent</option>
                </select>
              </div>
            </div>
            <div>
              <Label>Address</Label>
              <Input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>City</Label>
                <Input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>State / region</Label>
                <Input name="state" value={form.state} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Country</Label>
                <Input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>ZIP / postal</Label>
                <Input
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label>Thumbnail URL</Label>
              <Input
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Submitting..." : "Publish listing"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
