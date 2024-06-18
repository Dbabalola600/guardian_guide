import { Schema, z } from "zod";




export const createYourAccountSchema = z
    .object({

        fName: z.string({
            required_error: "Your first name is required",
        }),
        terms: z.boolean({
            required_error: "this is required",
        }),
        lName: z.string({
            required_error: "Your last name is required",
        }),
        password: z
            .string({
                required_error: "A password is required",
            })
        ,
        confirmPassword: z
            .string({
                required_error: "Passwords must match ",
            }),
        email: z
            .string({
                required_error: "Your Email is required",
            })
            .email({ message: "Must be a valid email address" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });




export const loginAccountSchema = z
    .object({
        password: z
            .string({
                required_error: "A password is required",
            })
        ,
        email: z
            .string({
                required_error: "Your Email is required",
            })
            .email({ message: "Must be a valid email address" }),
    })


export type LoginYourAccountFormType = z.infer<typeof loginAccountSchema>;

export type CreateYourAccountFormType = z.infer<typeof createYourAccountSchema>;
