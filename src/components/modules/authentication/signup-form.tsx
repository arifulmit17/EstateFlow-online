"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { toast } from "sonner";

import { z } from "zod";

import { signupUser } from "@/services/auth.service";

export function SignupForm(
  props: React.ComponentProps<typeof Card>
) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    role: "BUYER",
  });

  const signupSchema = z
    .object({
      name: z
        .string()
        .min(2, "Name must be at least 2 characters"),

      email: z
        .string()
        .email("Invalid email address"),

      password: z
        .string()
        .min(8, "Password must be at least 8 characters"),

      confirmPassword: z.string(),

      image: z
        .string()
        .url("Image must be a valid URL")
        .optional()
        .or(z.literal("")),

      role: z.enum(["BUYER", "AGENT"]),
    })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      image: formData.image || undefined,
      role: formData.role as "BUYER" | "AGENT",
    };

    const result = signupSchema.safeParse(payload);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });

      return;
    }

    try {
      const { data } = await signupUser(payload);

      if (data) {
        toast.success("Signup successful");

        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);

      toast.error(
        "Signup not successful. Please try again."
      );
    }
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>
          Create an account
        </CardTitle>

        <CardDescription>
          Enter your information below to create your
          account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>

            {/* NAME */}
            <Field>
              <FieldLabel htmlFor="name">
                Full Name
              </FieldLabel>

              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Field>

            {/* EMAIL */}
            <Field>
              <FieldLabel htmlFor="email">
                Email
              </FieldLabel>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="abc@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Field>

            {/* ROLE */}
            <Field>
              <FieldLabel htmlFor="role">
                Account Type
              </FieldLabel>

              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="
                  w-full rounded-md border border-input
                  bg-background px-3 py-2 text-sm
                  focus:outline-none focus:ring-2
                  focus:ring-primary
                "
              >
                <option value="BUYER">
                  Buyer Account
                </option>

                <option value="AGENT">
                  Agent Account
                </option>
              </select>

              <FieldDescription>
                Buyers can explore and save properties.
                Agents can list and manage properties.
              </FieldDescription>
            </Field>

            {/* PASSWORD */}
            <Field>
              <FieldLabel htmlFor="password">
                Password
              </FieldLabel>

              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />

              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

          

            {/* IMAGE */}
            <Field>
              <FieldLabel htmlFor="image">
                Profile Image URL
              </FieldLabel>

              <Input
                id="image"
                name="image"
                placeholder="https://example.com/image.png"
                value={formData.image}
                onChange={handleChange}
              />

              <FieldDescription>
                Optional profile photo.
              </FieldDescription>
            </Field>

            {/* SUBMIT */}
            <Field>
              <Button
                type="submit"
                className="w-full"
              >
                Create Account
              </Button>

              <FieldDescription className="text-center">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-primary hover:underline"
                >
                  Sign in
                </a>
              </FieldDescription>
            </Field>

          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}