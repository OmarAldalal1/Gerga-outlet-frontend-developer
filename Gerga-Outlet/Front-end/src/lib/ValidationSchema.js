import * as z from "zod";
export const UserSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(4, "Name must be at least 4 characters")
      .max(12, "Name must not exceed 12 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    phone: z
      .string()
      .min(1, "Phone number is required")
      .length(11, "Phone number must be exactly 11 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must not exceed 16 characters"),

    repassword: z.string().min(1, "Please confirm your password"),

    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the Terms of Service" }),
    }),
  })
  .refine((data) => data.password === data.repassword, {
    path: ["repassword"],
    message: "Passwords do not match",
  });
