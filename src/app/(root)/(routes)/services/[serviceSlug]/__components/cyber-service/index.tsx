import ServiceHero from "../shared/service-hero";
import {
    CpuIcon,
    Database,
    FileCodeIcon,
    Globe,
    Landmark,
    LockIcon,
    Search,
    ShieldAlert,
    ZapIcon,
} from "lucide-react";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";

const cyberSectors: SectorProps[] = [
    {
        icon: Landmark,
        title: "FinTech & Banking",
        desc: "Securing transaction gateways and protecting sensitive financial data from sophisticated digital fraud.",
    },
    {
        icon: Database,
        title: "Enterprise Data Centers",
        desc: "Protecting the physical and virtual servers that house Nigeria's most critical corporate information.",
    },
    {
        icon: Globe,
        title: "E-Commerce Platforms",
        desc: "Ensuring uptime and data integrity for high-traffic digital marketplaces and service providers.",
    },
];

const cyberProtocols: ProtocolItem[] = [
    {
        icon: Search,
        title: "Vulnerability Assessments",
        desc: "Regular 'surprise' stress tests and penetration testing to identify and patch security holes before they are exploited.",
    },
    {
        icon: LockIcon,
        title: "End-to-End Encryption",
        desc: "Implementing military-grade encryption protocols for all data at rest and in transit, ensuring total confidentiality.",
    },
    {
        icon: ZapIcon,
        title: "24/7 Threat Monitoring",
        desc: "Our Digital Command Center monitors your network traffic around the clock, detecting and neutralizing threats in real-time.",
    },
    {
        icon: FileCodeIcon,
        title: "Incident Response Plan",
        desc: "A pre-defined 'Tactical Recovery' protocol to ensure business continuity and data restoration immediately following a breach attempt.",
    },
];

const CyberServicePage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#0D1117"
                imgUrl="services/cyber-security.jpg"
                tagline="Cyber Security Services"
                title={{
                    dimmed: " Protection",
                    main: "Digital Asset",
                }}
                icons={[ShieldAlert, CpuIcon]}
                isDarkBg
                textColor="#fff"
                description="In an era of digital threats, HSSL extends its protective envelope to your virtual assets. We provide end-to-end cyber defense to safeguard your intellectual property and infrastructure."
            />
            <SectorGrid
                sectors={cyberSectors}
                sectionTitle="Digital Jurisdictions"
            />
            <OperationalProtocol
                protocols={cyberProtocols}
                mainTitle={"Fortifying The"}
                tagline="Digital Frontier"
                description="Physical walls aren't enough in a connected world. HSSL bridges the gap between physical and digital security, providing a unified defense strategy for the modern enterprise."
            />
        </div>
    );
};

export default CyberServicePage;
