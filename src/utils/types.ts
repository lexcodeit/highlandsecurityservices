import {
    AssetValueCategoryEnum,
    EventTypeEnum,
    EventVenueTypeEnum,
    InfrastructureTypeEnum,
    PropertyTypeEnum,
    ProtectionLevelEnum,
    ServiceTypeEnum,
    ShiftRequirementEnum,
    ThreatLevelEnum,
    VehiclePreferenceEnum,
} from "./enums";

export type ApiResponseType<ResponseType> = {
    status: boolean;
    data?: ResponseType;
    error?: string;
};

export type NavItem = {
    text: string;
    url: string;
    /**
     * Used to determine active state.
     * Usually a pathname segment like "/about"
     */
    matchPath: string;
};

// 2. Define the Form Data structure
// This matches your Convex schema exactly, making all optional fields explicit.
export interface BookingFormData {
    // Core Identity
    fullName?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    serviceType?: ServiceTypeEnum; // Start as empty string for the select trigger

    // Logistics
    location?: string;
    destination?: string;
    startDate?: string;
    endDate?: string;
    startTime?: string;

    // Service-Specific Fields
    protectionLevel?: ProtectionLevelEnum;
    numberOfPrincipals?: number;
    threatLevel?: ThreatLevelEnum;
    eventVenueType?: EventVenueTypeEnum;
    expectedGuestCount?: number;
    eventType?: EventTypeEnum;
    vehiclePreference?: VehiclePreferenceEnum;
    numberOfEscortVehicles?: number;
    assetValueCategory?: AssetValueCategoryEnum;
    vesselName?: string;
    imoNumber?: string;
    onBoardCrewCount?: number;
    propertyType?: PropertyTypeEnum;
    siteAcreage?: string;
    shiftRequirement?: ShiftRequirementEnum;
    hardwareRequired?: boolean;
    numberOfPoints?: number;
    infrastructureType?: InfrastructureTypeEnum;

    notes?: string;
}
