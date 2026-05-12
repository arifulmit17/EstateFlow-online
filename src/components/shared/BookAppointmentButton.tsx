"use client";

import { useState } from "react";
import { CalendarDays, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createAppointment } from "@/services/appointment.service";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

interface BookAppointmentButtonProps {
  propertyId: string;
  agentId: string;
  buyerId: string;
}

export default function BookAppointmentButton({
  propertyId,
  agentId,
  buyerId,
}: BookAppointmentButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [appointmentAt, setAppointmentAt] = useState("");
  const [note, setNote] = useState("");

  const handleBookAppointment = async () => {
    if (!appointmentAt) {
      toast.error("Please select appointment date and time.");
      return;
    }

    try {
      setLoading(true);

      const appointmentData = {
        propertyId,
        buyerId,
        agentId,
        appointmentAt: new Date(appointmentAt).toISOString(),
        status: "PENDING",
        note,
      };

      const res = await createAppointment(appointmentData);

      if (res?.success) {
        toast.success("Appointment booked successfully.");

        setOpen(false);
        setAppointmentAt("");
        setNote("");
      } else {
        toast.error(res?.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full h-12 rounded-2xl text-base font-semibold shadow-sm">
          <CalendarDays className="mr-2 h-5 w-5" />
          Book Appointment
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
        </DialogHeader>

        <div className="space-y-5 py-4">
          <div className="space-y-2">
            <Label>Appointment Date & Time</Label>

            <Input
              type="datetime-local"
              value={appointmentAt}
              onChange={(e) => setAppointmentAt(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Note</Label>

            <Textarea
              placeholder="Write your message..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <Button
            onClick={handleBookAppointment}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Booking...
              </>
            ) : (
              "Confirm Appointment"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}