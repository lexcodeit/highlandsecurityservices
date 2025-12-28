import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { internal } from "../_generated/api";

export const sendContactMessage = mutation({
    args: {
        name: v.string(),
        phone: v.string(),
        email: v.string(),
        message: v.string(),
    },
    async handler(ctx, args) {
        try {
            await ctx.scheduler.runAfter(
                0,
                internal.emailActions.sendContactMail,
                {
                    email: args.email as string,
                    name: args.name,
                    message: args.message,
                    phone: args.phone,
                }
            );

            return {
                status: true,
            };
        } catch (error: unknown) {
            return {
                status: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "Failed to send a message",
            };
        }
    },
});
