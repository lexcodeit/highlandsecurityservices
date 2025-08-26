import z from "zod";

export const GenderEnumSchema = z.enum(["MALE", "FEMALE"]);
export const SourceInfoEnumSchema = z.enum([
    "LinkedIn",
    "Facebook",
    "Instagram",
    "Website",
    "FriendOrEmployee",
    "Google",
    "Others",
]);
export const WorkspaceRoleEnumSchema = z.enum(["ADMIN", "MANAGER", "WORKER"], {
    error: "Role is required",
});
