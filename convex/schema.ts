import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";
import {
    AccountRoleUnion,
    AccountStatusUnion,
    ServiceTypeUnion,
    BookingStatusUnion,
    EventTypeUnion,
    EventVenueTypeUnion,
    InfrastructureTypeUnion,
    JobApplicationStatusUnion,
    PostPublishStatusUnion,
    ProtectionLevelUnion,
    SourceOfInfoUnion,
    ThreatLevelUnion,
    UserGenderUnion,
    WorkspaceRoleUnion,
    PropertyTypeUnion,
    ShiftRequirementUnion,
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
    bookings: defineTable({
        // --- Core Fields (Shared by all) ---
        bookingCode: v.string(), // e.g., HSSL-XXXX-2026
        serviceType: ServiceTypeUnion, // "bodyguard", "bullion", etc.
        status: BookingStatusUnion, // "pending", "confirmed", "completed"

        // --- 2. CLIENT INFO ---
        userId: v.optional(v.string()), // For logged-in users
        fullName: v.string(),
        email: v.string(),
        phone: v.string(),
        companyName: v.optional(v.string()),

        // --- Logistics Fields (Common to most) ---
        // --- 3. GENERAL LOGISTICS ---
        startDate: v.number(),
        endDate: v.optional(v.number()),
        location: v.string(),
        destination: v.optional(v.string()), // For Escort/Bullion/Marine

        // Bodyguard / Specialized
        protectionLevel: v.optional(ProtectionLevelUnion), // "Armed", "Unarmed", "Executive"
        numberOfPrincipals: v.optional(v.number()),
        threatLevel: v.optional(ThreatLevelUnion), // "Low", "Medium", "High"

        // Event Security
        eventVenueType: v.optional(EventVenueTypeUnion), // "Indoor", "Outdoor", "Stadium"
        expectedGuestCount: v.optional(v.number()),
        eventType: v.optional(EventTypeUnion), // "Wedding", "AGM", "Concert"

        // Escort / Bullion
        vehiclePreference: v.optional(v.string()), // "Armored SUV", "Sedan", "Van"
        numberOfEscortVehicles: v.optional(v.number()),
        assetValueCategory: v.optional(v.string()), // For Bullion risk assessment

        // Marine
        vesselName: v.optional(v.string()),
        imoNumber: v.optional(v.string()), // Maritime ID
        onBoardCrewCount: v.optional(v.number()),

        // Residential / Corporate / Industrial
        propertyType: v.optional(PropertyTypeUnion), // "Estate", "Factory", "Warehouse"
        siteAcreage: v.optional(v.string()),
        shiftRequirement: v.optional(ShiftRequirementUnion), // "24/7", "Night Only", "Day Only"

        // CCTV / Surveillance / Cyber
        hardwareRequired: v.optional(v.boolean()), // If they need installation vs just monitoring
        numberOfPoints: v.optional(v.number()), // Camera points or Network nodes
        infrastructureType: v.optional(InfrastructureTypeUnion), // "Cloud", "On-Premise", "Hybrid"

        // Additional unstructured notes
        notes: v.optional(v.string()),
        lastUpdated: v.number(),
    })
        .index("by_bookingCode", ["bookingCode"])
        .index("by_email", ["email"])
        .index("by_service", ["serviceType"]),
});

export default schema;
