"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import { toast } from "sonner";

import {
  getPropertyById,
  updateProperty,
} from "@/services/property2.service";

interface Props {
  propertyId: string;
}

export default function UpdatePropertyButton({
  propertyId,
}: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);

  // 🔄 Load property when modal opens
  const handleOpen = async () => {
    setOpen(true);

    try {
      const property = await getPropertyById(
        propertyId
      );

      setTitle(property?.title || "");
      setPrice(property?.price || 0);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load property");
    }
  };

  // ✏️ Update property
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await updateProperty(
        propertyId,
        {
          title,
          price,
        }
      );

      if (!result || result.error) {
        toast.error(
          result?.message || "Update failed"
        );
        return;
      }

      toast.success(
        "🏡 Property updated successfully!"
      );

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <Button
        onClick={handleOpen}
        variant="outline"
        size="sm"
      >
        ✏️ Update
      </Button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 space-y-4">

              <h1 className="text-xl font-bold text-center">
                Update Property
              </h1>

              <form
                onSubmit={handleUpdate}
                className="space-y-4"
              >

                {/* TITLE */}
                <div>
                  <Label>Property Title</Label>

                  <Input
                    value={title}
                    onChange={(e) =>
                      setTitle(e.target.value)
                    }
                    required
                  />
                </div>

                {/* PRICE */}
                <div>
                  <Label>Price</Label>

                  <Input
                    type="number"
                    value={price}
                    onChange={(e) =>
                      setPrice(
                        Number(e.target.value)
                      )
                    }
                    required
                  />
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2">

                  <Button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    disabled={loading}
                  >
                    {loading
                      ? "Updating..."
                      : "Update"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() =>
                      setOpen(false)
                    }
                  >
                    Cancel
                  </Button>

                </div>

              </form>

            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}