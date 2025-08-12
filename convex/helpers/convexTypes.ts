import { Doc } from "../_generated/dataModel";

export type WorkspaceRoleEnum = "ADMIN" | "MANAGER" | "WORKER";

export type MemberListReturnType = Doc<"profiles"> & {
    workspaceRole: WorkspaceRoleEnum;
};
