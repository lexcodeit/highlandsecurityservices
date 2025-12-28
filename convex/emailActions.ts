import { Resend } from "resend";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import {
    APPLICATION_RECEIVED_TEMPLATE,
    COMPANY_EMAIL_TEMPLATE,
    CONTACT_FORM_ADMIN_NOTIFICATION_TEMPLATE,
    CONTACT_FORM_RECEIVED_TEMPLATE,
    USER_INVITATION_TEMPLATE,
} from "./helpers/templates";

const resend = new Resend(process.env.AUTH_RESEND_KEY); // Use environment variable for Resend API key

export const sendContactMail = internalAction({
    args: {
        name: v.string(),
        phone: v.string(),
        email: v.string(),
        message: v.string(),
    },
    handler: async (_ctx, { email, message, name, phone }) => {
        try {
            const html = CONTACT_FORM_ADMIN_NOTIFICATION_TEMPLATE({
                name,
                email,
                message,
                submittedAt: new Date().toISOString(),
                phone,
            });

            const html2 = CONTACT_FORM_RECEIVED_TEMPLATE({
                name,
                email,
                message,
            });

            const response = await resend.emails.send({
                from: "info@highlandsecurityservices.com", // Replace with your verified sender email
                to: email, // Recipient email
                subject: "Message Received", // Email subject
                html: html2,
            });

            await resend.emails.send({
                from: "no-reply@highlandsecurityservices.com", // Replace with your verified sender email
                to: "info@highlandsecurityservices.com", // Recipient email
                subject: "New Message Received", // Email subject
                html,
            });
            return { success: true, messageId: response.data?.id };
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            return { success: false, error: "Failed to send Email" };
        }
    },
});

export const sendApplicationConfirmationMail = internalAction({
    args: {
        firstName: v.string(),
        lastName: v.optional(v.string()),
        email: v.string(),
    },
    handler: async (_ctx, { firstName, lastName, email }) => {
        try {
            const html = APPLICATION_RECEIVED_TEMPLATE({
                firstName,
                lastName,
            });

            const response = await resend.emails.send({
                from: "careers@highlandsecurityservices.com", // Replace with your verified sender email
                to: email, // Recipient email
                subject: "Application Received", // Email subject
                html,
            });
            return { success: true, messageId: response.data?.id };
        } catch (error: unknown) {
            console.error("Error sending email:", error);
            return { success: false, error: "Failed to send Email" };
        }
    },
});

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
                from: "noreply@highlandsecurityservices.com", // Replace with your verified sender email
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
                from: "noreply@highlandsecurityservices.com", // Replace with your verified sender email
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
