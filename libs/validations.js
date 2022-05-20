import zod, { z } from "zod";

export const registrationSchema = zod.object({
  firstName: zod
    .string({
      required_error: "First name is required.",
    })
    .min(2, {
      message: "First name should be a minimum of 2 characters",
    }),
  lastName: zod
    .string({
      required_error: "Last name is required.",
    })
    .min(2),
  username: zod
    .string({
      required_error: "Username is required.",
    })
    .min(2),
  email: zod
    .string({
      required_error: "Email is required.",
    })
    .email({
      message: "Invalid email",
    }),
  password: zod
    .string({
      required_error: "Password is required.",
    })
    .min(6, {
      message: "Password must contain at least 6 character(s)",
    }),
});

export const loginSchema = zod.object({
  emailOrUsername: zod.union([zod.string().email(), zod.string().min(2)]),
  password: zod
    .string({
      required_error: "Password is required.",
    })
    .min(6, {
      message: "Password must contain at least 6 character(s)",
    }),
});

export const menuSchema = zod.object({
  food: zod.string().min(2),
  type: zod.enum(["continental", "local"]),
  timeToBeTaken: zod.enum(["breakfast", "lunch", "supper"]),
  timeTakenToCook: zod.number().min(1),
  ingredients: zod.array(),
  steps: zod.array(),
});
