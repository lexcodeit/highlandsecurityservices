import { v } from "convex/values";

export const UserGenderUnion = v.union(v.literal("MALE"), v.literal("FEMALE"));

export const AccountStatusUnion = v.union(
    v.literal("ACTIVE"),
    v.literal("SUSPENDED"),
    v.literal("BANNED"),
    v.literal("DELETED")
);

export const AccountRoleUnion = v.union(v.literal("ADMIN"), v.literal("USER"));

export const WorkspaceRoleUnion = v.union(
    v.literal("ADMIN"),
    v.literal("MANAGER"),
    v.literal("WORKER")
);

export const JobApplicationStatusUnion = v.union(
    v.literal("PENDING"),
    v.literal("PROCESSED")
);
