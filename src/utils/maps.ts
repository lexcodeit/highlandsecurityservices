import { PositionEnums } from "./enums";
import { JobProps } from "./interfaces";

export const JOB_POSITION_MAP: {
    [x in PositionEnums]: JobProps;
} = {
    "assistant-secretary": {
        icon: "secretary.svg",
    },
    "chief-security-officer": {
        icon: "cso.svg",
    },
    "company-driver": {
        icon: "driver.svg",
    },
    "security-guard": {
        icon: "cso.svg",
    },
};
