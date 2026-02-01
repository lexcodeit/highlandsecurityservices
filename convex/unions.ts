import { v } from "convex/values";

export const UserGenderUnion = v.union(v.literal("MALE"), v.literal("FEMALE"));

export const AccountStatusUnion = v.union(
    v.literal("ACTIVE"),
    v.literal("SUSPENDED"),
    v.literal("BANNED"),
    v.literal("DELETED"),
);

export const AccountRoleUnion = v.union(v.literal("ADMIN"), v.literal("USER"));

export const WorkspaceRoleUnion = v.union(
    v.literal("ADMIN"),
    v.literal("MANAGER"),
    v.literal("WORKER"),
);

export const JobApplicationStatusUnion = v.union(
    v.literal("PENDING"),
    v.literal("PROCESSED"),
);
export const SourceOfInfoUnion = v.union(
    v.literal("LinkedIn"),
    v.literal("Facebook"),
    v.literal("Instagram"),
    v.literal("Website"),
    v.literal("FriendOrEmployee"),
    v.literal("Google"),
    v.literal("Others"),
);

export const PostPublishStatusUnion = v.union(
    v.literal("PUBLISHED"),
    v.literal("DRAFT"),
    v.literal("UNPUBLISHED"),
);

export const ServiceTypeUnion = v.union(
    v.literal("BODYGUARD"),
    v.literal("CORPORATE"),
    v.literal("ESCORT"),
    v.literal("CYBER"),
    v.literal("EVENT"),
    v.literal("RESIDENTIAL"),
    v.literal("SPECIALIZED"),
    v.literal("SURVEILLANCE"),
    v.literal("CCTV"),
    v.literal("BULLION"),
    v.literal("MARINE"),
);

export const BookingStatusUnion = v.union(
    v.literal("PENDING"),
    v.literal("CONFIRMED"),
    v.literal("COMPLETED"),
    v.literal("CANCELLED"),
);

export const ProtectionLevelUnion = v.union(
    v.literal("ARMED"),
    v.literal("UNARMED"),
    v.literal("EXECUTIVE"),
);

export const ThreatLevelUnion = v.union(
    v.literal("LOW"),
    v.literal("MEDIUM"),
    v.literal("HIGH"),
);

export const EventVenueTypeUnion = v.union(
    v.literal("INDOOR"),
    v.literal("OUTDOOR"),
    v.literal("STADIUM"),
);
export const EventTypeUnion = v.union(
    v.literal("WEDDING"),
    v.literal("AGM"),
    v.literal("CONCERT"),
    v.literal("CONFERENCE"),
);

export const VehiclePreferenceUnion = v.union(
    v.literal("ARMORED_SUV"),
    v.literal("EXECUTIVE_SEDAN"),
    v.literal("BULLION_VAN"),
    v.literal("TACTICAL_HILUX"),
);

export const PropertyTypeUnion = v.union(
    v.literal("HOME"),
    v.literal("ESTATE"),
    v.literal("FACTORY"),
    v.literal("WAREHOUSE"),
);

export const ShiftRequirementUnion = v.union(
    v.literal("24/7"),
    v.literal("Day Only"),
    v.literal("Night Only"),
);

export const InfrastructureTypeUnion = v.union(
    v.literal("CLOUD"),
    v.literal("ON_PREMISE"),
    v.literal("HYBRID"),
);
/* 
We need more event types
"Wedding", "AGM", "Concert"

Then for asset value category, what are the good options for that


*/
