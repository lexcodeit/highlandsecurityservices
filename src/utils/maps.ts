import { PositionEnums, ServicesEnums } from "./enums";
import { JobProps, ServiceProps } from "./interfaces";

export const SERVICES_MAP: {
    [x in ServicesEnums]: ServiceProps;
} = {
    bodyguard: {
        description:
            "Our trained bodyguards provide discreet, 24/7 personal protection for executives, VIPs, and high-profile individuals. With professionalism and vigilance, we ensure your safety in every environment.",
        image: "guards.jpg",
        title: "Bodyguard Services",
    },
    corporate: {
        description:
            "We safeguard offices, business premises, and corporate facilities with tailored security solutions. Our officers provide a secure environment that allows your organization to focus on growth and productivity.",
        image: "corporate-security.jpg",
        title: "Corporate Security",
    },
    escort: {
        description:
            "Our escort services guarantee safe passage for executives, diplomats, and VIPs. Whether to and from airports, offices, or special events, we provide reliable and discreet protection on the move.",
        image: "escort.jpg",
        title: "Escort Services",
    },
    event: {
        description:
            "From private gatherings to large public events, our security teams manage access, crowd control, and emergency readiness. We ensure a smooth, secure experience for both hosts and guests.",
        image: "event-security.jpg",
        title: "Event Security",
    },
    residential: {
        description:
            "Protecting homes and estates, our residential security services offer round-the-clock vigilance. With trained guards and surveillance support, we give families peace of mind in safe, secure living spaces.",
        image: "residential.jpg",
        title: "Residential Security",
    },
    specialized: {
        description:
            "For high-risk scenarios, industrial operations, or critical infrastructure, we deliver specialized guard services. Each solution is tailored to unique client needs, ensuring maximum protection where it matters most.",
        image: "specialized.jpg",
        title: "Specialized Guard Services",
    },
    surveillance: {
        description:
            "Combining technology with human expertise, we provide advanced surveillance and monitoring. Our team detects risks early, ensuring swift response and proactive security for clients and assets.",
        image: "surveillance.jpg",
        title: "Surveillance & Monitoring",
    },
};

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
