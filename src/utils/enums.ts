export type AssetValueCategoryEnum =
    | "LOW_VALUE"
    | "MID_VALUE"
    | "HIGH_VALUE"
    | "ULTRA_HIGH_VALUE";
export type ProtectionLevelEnum = "ARMED" | "UNARMED" | "EXECUTIVE";

export type ThreatLevelEnum = "LOW" | "MEDIUM" | "HIGH";

export type EventVenueTypeEnum = "INDOOR" | "OUTDOOR" | "STADIUM";
export type EventTypeEnum =
    | "WEDDING"
    | "AGM"
    | "CONCERT"
    | "CONFERENCE"
    | "PRIVATE_PARTY";

export type VehiclePreferenceEnum =
    | "ARMORED_SUV"
    | "EXECUTIVE_SEDAN"
    | "BULLION_VAN"
    | "TACTICAL_HILUX";

export type PropertyTypeEnum = "HOME" | "ESTATE" | "FACTORY" | "WAREHOUSE";

export type ShiftRequirementEnum = "24/7" | "Day Only" | "Night Only";

export type InfrastructureTypeEnum = "CLOUD" | "ON_PREMISE" | "HYBRID";

export type ServiceTypeEnum =
    | "BODYGUARD"
    | "CORPORATE"
    | "ESCORT"
    | "CYBER"
    | "EVENT"
    | "RESIDENTIAL"
    | "SPECIALIZED"
    | "SURVEILLANCE"
    | "CCTV"
    | "BULLION"
    | "MARINE";

export type ServicesSlugEnum =
    | "bodyguard-services"
    | "corporate-security"
    | "escort-services"
    | "event-security"
    | "residential-security"
    | "specialized-guard-services"
    | "surveillance-monitoring-services"
    | "cctv-installation-remote"
    | "marine-security"
    | "bullion-van-operations"
    | "cyber-security";
export type GenderTypeEnum = "MALE" | "FEMALE";
export type YesNoEnum = "Yes" | "No";

export type WorkspaceMembersPageTab = "members" | "invites";
export type JobDetailsPageTab = "overview" | "applications";

export type WorkspaceRoleEnum = "ADMIN" | "MANAGER" | "WORKER";

export type PostCategoryEnums = "tips" | "insights";

export type ServicesEnums =
    | "bodyguard"
    | "corporate"
    | "event"
    | "residential"
    | "escort"
    | "surveillance"
    | "specialized"
    | "cctv"
    | "marine"
    | "bullion"
    | "cyber";

export type PositionEnums =
    | "chief-security-officer"
    | "assistant-secretary"
    | "company-driver"
    | "security-guard";

export type SourceInfo =
    | "LinkedIn"
    | "Facebook"
    | "Instagram"
    | "Website"
    | "FriendOrEmployee"
    | "Google"
    | "Others";

export type PostActionsModal =
    | "publish"
    | "unpublish"
    | "toggleFeatured"
    | "delete";
