"use server";

import { cookies } from "next/headers";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/appointment`;

export const getAppointments = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const res = await fetch(API_URL, {
      headers: {
        Cookie: `token=${token}`,
      },
      cache: "no-store",
    });

    const result = await res.json();

    return result.data || [];
  } catch (error) {
    console.error("Get appointments error:", error);
    return [];
  }
};

export const getAppointmentById = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      headers: {
        Cookie: `token=${token}`,
      },
      cache: "no-store",
    });

    const result = await res.json();

    return result.data || null;
  } catch (error) {
    console.error("Get appointment error:", error);
    return null;
  }
};

export const createAppointment = async (payload: {
  propertyId: string;
  agentId: string;
  appointmentAt: string;
  note?: string;
}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    return result;
  } catch (error) {
    console.error("Create appointment error:", error);
    return null;
  }
};

export const updateAppointment = async (
  id: string,
  payload: {
    appointmentAt?: string;
    status?: string;
    note?: string;
  }
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    return result;
  } catch (error) {
    console.error("Update appointment error:", error);
    return null;
  }
};

export const deleteAppointment = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Cookie: `token=${token}`,
      },
    });

    const result = await res.json();

    return result;
  } catch (error) {
    console.error("Delete appointment error:", error);
    return null;
  }
};