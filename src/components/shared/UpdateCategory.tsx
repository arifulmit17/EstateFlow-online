"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { getCategories, updateCategory } from "@/services/category2.service"

export default function UpdateCategoryPage() {
  const { id } = useParams()
  const router = useRouter()

  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  // 🔄 Load category
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categories = await getCategories();
        const category = categories.find((cat: any) => cat.id === id);
        setName(category?.name || "");
      } catch (error) {
        console.error(error)
      }
    }

    if (id) fetchCategory()
  }, [id])

  // ✏️ Update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await updateCategory(id, { name }); // Assuming updateCategory is implemented in the service
      if (!result || result.error) {
        toast.error(result?.message || "Update failed");
        setLoading(false);
        return;
      }

      toast.success("🌿 Category updated successfully!")
      router.push("/categories") // redirect
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h1 className="text-xl font-bold text-center">
            ✏️ Update Category
          </h1>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <Label>Category Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Category"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}