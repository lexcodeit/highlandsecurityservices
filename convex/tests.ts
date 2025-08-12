import { internal } from "./_generated/api";
import { mutation } from "./_generated/server";

export const sendMail = mutation({
    async handler(ctx) {
        await ctx.scheduler.runAfter(0, internal.emailActions.sendCompanyMail, {
            email: "rootlexdev@gmail.com",
            subject: "Important and Confidential",
            body: "How are you sir?",
            firstName: "Alexander",
            lastName: "Awunor",
        });
    },
});
