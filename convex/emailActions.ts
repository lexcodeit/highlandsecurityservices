import { Resend } from "resend";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import {
    COMPANY_EMAIL_TEMPLATE,
    USER_INVITATION_TEMPLATE,
} from "./helpers/templates";

const resend = new Resend(process.env.AUTH_RESEND_KEY); // Use environment variable for Resend API key

export const sendCompanyMail = internalAction({
    args: {
        firstName: v.string(),
        lastName: v.optional(v.string()),
        email: v.string(),
        subject: v.string(),
        body: v.string(),
    },
    handler: async (_ctx, { firstName, lastName, email, subject, body }) => {
        try {
            const html = COMPANY_EMAIL_TEMPLATE({
                body,
                firstName,
                lastName,
            });

            const response = await resend.emails.send({
                from: "noreply@lexcodeit.com", // Replace with your verified sender email
                to: email, // Recipient email
                subject: subject || "Highland Security", // Email subject
                html,
            });
            return { success: true, messageId: response.data?.id };
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            return { success: false, error: "Failed to send Email" };
        }
    },
});

export const sendInviteToUsers = internalAction({
    args: {
        email: v.string(),
        subject: v.string(),
    },
    handler: async (_ctx, { email, subject }) => {
        try {
            const html = USER_INVITATION_TEMPLATE({
                email,
            });
            const response = await resend.emails.send({
                from: "noreply@lexcodeit.com", // Replace with your verified sender email
                to: email, // Recipient email
                subject: subject || "Highland Security Services", // Email subject
                html,
            });
            return { success: true, messageId: response.data?.id };
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            return { success: false, error: "Failed to send Email" };
        }
    },
});
