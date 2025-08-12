/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as admin_auth from "../admin/auth.js";
import type * as admin_dashboard from "../admin/dashboard.js";
import type * as admin_jobs from "../admin/jobs.js";
import type * as admin_profile from "../admin/profile.js";
import type * as admin_workspace from "../admin/workspace.js";
import type * as auth from "../auth.js";
import type * as emailActions from "../emailActions.js";
import type * as errorUtils from "../errorUtils.js";
import type * as helpers_constants from "../helpers/constants.js";
import type * as helpers_convexTypes from "../helpers/convexTypes.js";
import type * as helpers_db from "../helpers/db.js";
import type * as helpers_templates from "../helpers/templates.js";
import type * as helpers_utils from "../helpers/utils.js";
import type * as http from "../http.js";
import type * as otp_ResendOTP from "../otp/ResendOTP.js";
import type * as tests from "../tests.js";
import type * as unions from "../unions.js";
import type * as user_auth from "../user/auth.js";
import type * as workspace_workspaceActions from "../workspace/workspaceActions.js";
import type * as workspace_workspaceInvites from "../workspace/workspaceInvites.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "admin/auth": typeof admin_auth;
  "admin/dashboard": typeof admin_dashboard;
  "admin/jobs": typeof admin_jobs;
  "admin/profile": typeof admin_profile;
  "admin/workspace": typeof admin_workspace;
  auth: typeof auth;
  emailActions: typeof emailActions;
  errorUtils: typeof errorUtils;
  "helpers/constants": typeof helpers_constants;
  "helpers/convexTypes": typeof helpers_convexTypes;
  "helpers/db": typeof helpers_db;
  "helpers/templates": typeof helpers_templates;
  "helpers/utils": typeof helpers_utils;
  http: typeof http;
  "otp/ResendOTP": typeof otp_ResendOTP;
  tests: typeof tests;
  unions: typeof unions;
  "user/auth": typeof user_auth;
  "workspace/workspaceActions": typeof workspace_workspaceActions;
  "workspace/workspaceInvites": typeof workspace_workspaceInvites;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
