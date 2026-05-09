"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { z } from "zod"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const emailSchema = z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email is too long")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = emailSchema.safeParse(email)

    if (!validation.success) {
      return toast.error(validation.error.issues[0].message)
    }

    setLoading(true)

    try {
      // TODO: Connect newsletter API
      // console.log("Subscribed:", validation.data)

      setEmail("")
      toast.success("Successfully subscribed to EstateFlow updates!")
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-11/12 rounded-3xl bg-card border py-16 px-6 md:px-10 shadow-sm">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium text-primary bg-primary/10">
            Stay Updated
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get the Latest Property Updates & AI Insights
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Subscribe to EstateFlow and receive property recommendations,
            real estate market trends, investment opportunities, and exclusive
            listings directly in your inbox.
          </p>
        </div>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubscribe}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-md h-12"
          />

          <Button
            type="submit"
            disabled={loading}
            className="h-12 px-6"
          >
            {loading ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>

        {/* Trust Text */}
        <p className="text-xs text-muted-foreground mt-5">
          No spam. Only valuable real estate insights and exclusive property updates.
        </p>

      </div>
    </section>
  )
}