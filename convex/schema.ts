import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";
import {
    AccountRoleUnion,
    AccountStatusUnion,
    JobApplicationStatusUnion,
    UserGenderUnion,
    WorkspaceRoleUnion,
} from "./unions";

const schema = defineSchema({
    ...authTables,
    profiles: defineTable({
        userId: v.id("users"),
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        phoneNumber: v.optional(v.string()),
        avatar: v.optional(v.string()),
        accountStatus: AccountStatusUnion,
        role: v.optional(AccountRoleUnion),
        gender: v.optional(UserGenderUnion),
        bio: v.optional(v.string()),
    })
        .index("by_role", ["role"])
        .index("by_user_id", ["userId"]),
    jobs: defineTable({
        title: v.string(), // e.g., "Chief Security Officer"
        slug: v.string(), // e.g., "chief-security-officer"
        label: v.optional(v.string()), // e.g., "(Must be Bold, Neat, and Humble)"
        description: v.string(), // Rich description if needed
        location: v.string(), // Default to "Lagos"
        isActive: v.boolean(), // To show/hide role from UI
        order: v.number(), // For ordering in UI
        userId: v.id("users"),
        lastUpdated: v.optional(v.number()),
    }).index("by_slug", ["slug"]),
    jobListingRequirements: defineTable({
        jobId: v.id("jobs"),
        requirement: v.string(),
    }).index("by_job_id", ["jobId"]),
    jobApplications: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        phone: v.string(),
        email: v.string(),
        roleId: v.id("jobs"), // Reference to the job they're applying for
        location: v.optional(v.string()),
        hasGuarantor: v.boolean(),
        experience: v.optional(v.string()),
        fileUrl: v.optional(v.string()), // If you upload CV/ID
        status: JobApplicationStatusUnion,
    })
        .index("by_status", ["status"])
        .index("by_role_id", ["roleId"]),
    workspaceInvites: defineTable({
        email: v.string(),
        role: WorkspaceRoleUnion,
        joined: v.optional(v.number()),
        resendCount: v.number(),
        invitedBy: v.id("users"),
    }).index("by_invited_by", ["invitedBy"]),
    workspaceMembers: defineTable({
        userId: v.id("users"),
        role: WorkspaceRoleUnion,
    }).index("by_role", ["role"]),
});

export default schema;
