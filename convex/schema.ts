import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";
import {
    AccountRoleUnion,
    AccountStatusUnion,
    JobApplicationStatusUnion,
    PostPublishStatusUnion,
    SourceOfInfoUnion,
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
        shortDescription: v.optional(v.string()),
        location: v.string(), // Default to "Lagos"
        isActive: v.boolean(), // To show/hide role from UI
        order: v.number(), // For ordering in UI
        userId: v.id("users"),
        lastUpdated: v.optional(v.number()),
    })
        .index("by_slug", ["slug"])
        .index("by_status", ["isActive"]),
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
        location: v.string(),
        experienceLevel: v.string(),
        resumeUrl: v.string(), // If you upload CV/ID
        coverLetterUrl: v.optional(v.string()), // If you upload Cover Letter
        gender: UserGenderUnion,
        status: JobApplicationStatusUnion,
        sourceOfInfo: SourceOfInfoUnion,
        answers: v.object({
            q1: v.string(),
            q2: v.string(),
            q3: v.string(),
        }),
    })
        .index("by_status", ["status"])
        .index("by_role_id", ["roleId"])
        .index("by_phone", ["phone"])
        .index("by_email", ["email"]),
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
    postCategories: defineTable({
        slug: v.string(),
        title: v.string(),
    }),
    posts: defineTable({
        title: v.string(),
        slug: v.string(), // unique identifier for URL
        shortBody: v.string(), // excerpt
        bodyHtml: v.string(), // full HTML for rendering
        bodyJson: v.any(), // Tiptap JSON doc
        categories: v.array(v.id("postCategories")),
        tags: v.optional(v.array(v.string())), // flexible tags
        coverImage: v.string(), // featured image
        author: v.id("users"), // can later change to v.id("users") if you add users table
        publishStatus: PostPublishStatusUnion, // draft, published, etc.
        isFeatured: v.boolean(),

        postDate: v.optional(v.number()), // timestamp (ms)
        unpublishDate: v.optional(v.number()), // timestamp (ms)
    })
        .index("by_slug", ["slug"])
        .index("by_is_featured", ["isFeatured"])
        .index("by_publish_status", ["publishStatus"]),
});

export default schema;
