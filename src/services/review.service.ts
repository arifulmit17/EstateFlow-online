"use server";

import { cookies } from "next/headers";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL;

// ==============================
// GET REVIEWS
// ==============================
export const getReviews = async () => {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    const res = await fetch(
      `${BASE_URL}/reviews`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data?.message ||
          "Failed to fetch reviews"
      );
    }

    return data.data;
  } catch (error) {
    console.error(
      "getReviews error:",
      error
    );

    return [];
  }
};

// ==============================
// CREATE REVIEW
// ==============================
export const createReview = async (
  reviewData: any
) => {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    const res = await fetch(
      `${BASE_URL}/reviews`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(reviewData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data?.message ||
          "Failed to create review"
      );
    }

    return {
      success: true,
      data: data.data,
      message:
        data.message ||
        "Review created successfully",
    };
  } catch (error: any) {
    console.error(
      "createReview error:",
      error
    );

    return {
      success: false,
      message:
        error.message ||
        "Something went wrong",
    };
  }
};

// ==============================
// UPDATE REVIEW
// ==============================
export const updateReview = async (
  id: string,
  reviewData: any
) => {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    const res = await fetch(
      `${BASE_URL}/reviews/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(reviewData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data?.message ||
          "Failed to update review"
      );
    }

    return {
      success: true,
      data: data.data,
      message:
        data.message ||
        "Review updated successfully",
    };
  } catch (error: any) {
    console.error(
      "updateReview error:",
      error
    );

    return {
      success: false,
      message:
        error.message ||
        "Something went wrong",
    };
  }
};

// ==============================
// DELETE REVIEW
// ==============================
export const deleteReview = async (
  id: string
) => {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    const res = await fetch(
      `${BASE_URL}/reviews/${id}`,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data?.message ||
          "Failed to delete review"
      );
    }

    return {
      success: true,
      message:
        data.message ||
        "Review deleted successfully",
    };
  } catch (error: any) {
    console.error(
      "deleteReview error:",
      error
    );

    return {
      success: false,
      message:
        error.message ||
        "Something went wrong",
    };
  }
};