import z from "zod"

export const createUserSchema = z.object({
    collegeName: z.string(),
    email: z.string().email(),
    contact: z.string().min(10).max(18),
    website: z.string(),
    address: z.string(),
    password: z.string()
          .min(8, "Password should be at least 8 characters")
          .max(100, "Password should not exceed 100 characters")
          .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
          .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
          .regex(/[0-9]/, "Password must contain at least 1 number")
          .regex(/[^A-Za-z0-9]/, "Password must contain at least 1 special character"),
    nssHead: z.string()
})

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string()
          .min(8, "Password should be at least 8 characters")
          .max(100, "Password should not exceed 100 characters")
          .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
          .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
          .regex(/[0-9]/, "Password must contain at least 1 number")
          .regex(/[^A-Za-z0-9]/, "Password must contain at least 1 special character"),
})

export const secret = "secret"