"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getBlogs } from "@/services/blog.service";

type Blog = {
  id: string;
  title: string;
  content: string;
  image?: string;
  authorId: string;
  createdAt: string;
  author?: {
    name: string;
  };
};

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs();

        const data = Array.isArray(res) ? res : [];
        setBlogs(data || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto py-10 space-y-10">

      {/* HEADER */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">EstateFlow Blog</h1>
        <p className="text-muted-foreground">
          Insights, market trends, and real estate knowledge
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto">
        <Input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* LOADING */}
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-2xl bg-muted animate-pulse"
            />
          ))}
        </div>
      )}

      {/* BLOG GRID */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden bg-white"
            >

              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image || "/placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">

                <Badge variant="secondary">
                  EstateFlow Insights
                </Badge>

                <h2 className="text-lg font-semibold group-hover:text-primary transition">
                  {blog.title}
                </h2>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {blog.content}
                </p>

                {/* AUTHOR + DATE */}
                <div className="text-xs text-muted-foreground">
                  By {blog.author?.name || "Unknown"} ·{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>

                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block text-primary text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>

              </div>

            </div>
          ))}

        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && filteredBlogs.length === 0 && (
        <div className="text-center text-muted-foreground">
          No blogs found 🏠
        </div>
      )}

    </div>
  );
}