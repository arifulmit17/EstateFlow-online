"use server";

import { cookies } from "next/headers";

interface Blog {
  id: string;
  title: string;
  content: string;
  image?: string;
  authorId: string;
  createdAt: string;
  author?: {
    name: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function authHeaders(): Promise<HeadersInit | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  return {
    Cookie: `token=${token}`,
  };
}

/* =========================
   GET ALL BLOGS
========================= */
export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/blog`, {
      method: "GET",
      cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result?.message || "Failed to fetch blogs");
    }

    return result.data || [];
  } catch (e) {
    console.error("getBlogs:", e);
    return [];
  }
}

/* =========================
   GET BLOG BY SLUG
========================= */
export async function fetchBlogBySlug(
  slug: string
): Promise<Blog | null> {
  try {
    const res = await fetch(`${BASE_URL}/api/blog/slug/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      return null;
    }

    return result.data ?? null;
  } catch (e) {
    console.error("fetchBlogBySlug:", e);
    return null;
  }
}

/* =========================
   CREATE BLOG
========================= */
export type CreateBlogInput = {
  title: string;
  slug: string;
  content: string;
  thumbnail?: string;
  isPublished?: boolean;
  authorId: string;
};

export async function createBlog(
  form: CreateBlogInput
): Promise<Blog | null> {
  const headers = await authHeaders();
  if (!headers) return null;

  try {
    const res = await fetch(`${BASE_URL}/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        ...form,
        isPublished: form.isPublished ?? false,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data?.success) {
      throw new Error(data?.message || "Failed to create blog");
    }

    return data.data ?? null;
  } catch (e) {
    console.error("createBlog:", e);
    return null;
  }
}

/* =========================
   UPDATE BLOG
========================= */
export async function updateBlog(
  blogId: string,
  form: Partial<CreateBlogInput>
): Promise<Blog | null> {
  const headers = await authHeaders();
  if (!headers) return null;

  try {
    const res = await fetch(`${BASE_URL}/api/blog/${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok || !data?.success) {
      throw new Error(data?.message || "Failed to update blog");
    }

    return data.data ?? null;
  } catch (e) {
    console.error("updateBlog:", e);
    return null;
  }
}

/* =========================
   DELETE BLOG
========================= */
export async function deleteBlog(
  blogId: string
): Promise<{ success: boolean; message?: string }> {
  const headers = await authHeaders();
  if (!headers) return { success: false, message: "Unauthorized" };

  try {
    const res = await fetch(`${BASE_URL}/api/blog/${blogId}`, {
      method: "DELETE",
      headers,
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Failed to delete blog",
      };
    }

    return {
      success: true,
      message: data.message,
    };
  } catch (e) {
    console.error("deleteBlog:", e);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}