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
        // bgColor: "#0D0D0D", // Jet black — elite, discreet
        // textColor: "#FFFFFF",

        bgColor: "#F5F5F5", // Light grey – subtle contrast from white
        textColor: "#111111",
    },
    corporate: {
        description:
            "We safeguard offices, business premises, and corporate facilities with tailored security solutions. Our officers provide a secure environment that allows your organization to focus on growth and productivity.",
        image: "corporate-security.jpg",
        title: "Corporate Security",
        // bgColor: "#1B1F3B", // Deep navy — professionalism & trust
        // textColor: "#FFFFFF",

        bgColor: "#E8EEF5", // Soft blue-grey – calm, corporate
        textColor: "#0A0A0A",
    },
    escort: {
        description:
            "Our escort services guarantee safe passage for executives, diplomats, and VIPs. Whether to and from airports, offices, or special events, we provide reliable and discreet protection on the move.",
        image: "escort.jpg",
        title: "Escort Services",
        // bgColor: "#2E3A59", // Steely blue — mobility & calm confidence
        // textColor: "#FFFFFF",

        bgColor: "#DCE3EB", // Muted steel-blue – elegance & motion
        textColor: "#0A0A0A",
    },
    event: {
        description:
            "From private gatherings to large public events, our security teams manage access, crowd control, and emergency readiness. We ensure a smooth, secure experience for both hosts and guests.",
        image: "event-security.jpg",
        title: "Event Security",
        // bgColor: "#3A3A3A", // Charcoal grey — crowd control & neutrality
        // textColor: "#F1F1F1",

        bgColor: "#FAFAFA", // Almost white – lively & neutral
        textColor: "#111111",
    },
    residential: {
        description:
            "Protecting homes and estates, our residential security services offer round-the-clock vigilance. With trained guards and surveillance support, we give families peace of mind in safe, secure living spaces.",
        image: "residential.jpg",
        title: "Residential Security",
        // bgColor: "#202E2F", // Forest-teal — calm, home-safety tone
        // textColor: "#FFFFFF",

        bgColor: "#EDF4F2", // Soft mint-grey – fresh, homey tone
        textColor: "#111111",
    },
    specialized: {
        description:
            "For high-risk scenarios, industrial operations, or critical infrastructure, we deliver specialized guard services. Each solution is tailored to unique client needs, ensuring maximum protection where it matters most.",
        image: "specialized.jpg",
        title: "Specialized Guard Services",
        // bgColor: "#4A1D1D", // Deep maroon — strength & seriousness
        // textColor: "#FFFFFF",

        bgColor: "#1D1F2F", // Deep navy – strength & focus
        textColor: "#FFFFFF",
    },
    surveillance: {
        description:
            "Combining technology with human expertise, we provide advanced surveillance and monitoring. Our team detects risks early, ensuring swift response and proactive security for clients and assets.",
        image: "surveillance.jpg",
        title: "Surveillance & Monitoring",
        // bgColor: "#101820", // Tech black-blue — high-tech & vigilance
        // textColor: "#EAEAEA",

        bgColor: "#202A33", // Dark slate – techy & sophisticated
        textColor: "#FFFFFF",
    },
    cctv: {
        image: "cctv-guys.jpg",
        description:
            "We design and install intelligent CCTV systems integrated with remote monitoring. Stay informed in real time as our experts ensure continuous visibility, swift alerts, and total control over your property’s security.",
        title: "CCTV Installation & Remote Monitioring",
        // bgColor: "#222831", // Dark slate — digital reliability
        // textColor: "#FFFFFF",

        bgColor: "#F3F3F3", // Soft neutral – ties back to white layout
        textColor: "#111111",
    },
    marine: {
        title: "Marine Security Operations",
        image: "marine-security.jpg",
        description:
            "Our Marine Security Operations team ensures the protection of vessels, crew, and valuable cargo across inland waterways and coastal zones. We provide armed escort boats, onboard security officers, and surveillance support to deter piracy, smuggling, and unauthorized access. With advanced navigation systems and trained personnel, we guarantee safe passage and operational continuity at sea.",
        bgColor: "#002B36", // deep navy to evoke maritime security
        textColor: "#FFFFFF",
    },
    bullion: {
        title: "Bullion Van Operations",
        image: "bullion.jpg",
        description:
            "Our Bullion Van Operations specialize in the secure transportation of cash, precious metals, and other high-value assets. Each convoy is manned by armed, trained professionals operating in communication with our central command for real-time monitoring and rapid response. We adhere to strict confidentiality and safety protocols, ensuring your valuables reach their destination without compromise.",
        bgColor: "#1E1E1E", // matte charcoal or dark grey to convey strength & confidentiality
        textColor: "#FFFFFF",
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
