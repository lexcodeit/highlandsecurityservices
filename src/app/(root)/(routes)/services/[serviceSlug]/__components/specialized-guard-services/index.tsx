import ServiceHero from "../shared/service-hero";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";
import {
    ActivityIcon,
    Crosshair,
    Factory,
    HardHat,
    ShieldAlert,
    Siren,
    TargetIcon,
    Users,
    Zap,
} from "lucide-react";

const specializedSectors: SectorProps[] = [
    {
        icon: Factory,
        title: "Industrial Plants",
        desc: "Asset protection for manufacturing hubs and warehouses with high-value inventory.",
    },
    {
        icon: HardHat,
        title: "Oil & Gas Hubs",
        desc: "Specialized guarding for energy infrastructure, rig support, and offshore facilities.",
    },
    {
        icon: Zap,
        title: "Energy & Power",
        desc: "Secure site management for critical power plants and telecommunications data hubs.",
    },
];

const specializedProtocols: ProtocolItem[] = [
    {
        icon: Crosshair,
        title: "Tactical Preparedness",
        desc: "Personnel are trained in advanced defensive tactics and situational awareness for high-threat environments.",
    },
    {
        icon: Siren,
        title: "Law Enforcement Liaison",
        desc: "Seamless coordination with local law enforcement (NPF) to ensure rapid backup during critical security breaches.",
    },
    {
        icon: ShieldAlert,
        title: "Asset Integrity Checks",
        desc: "Continuous technical auditing of physical barriers and equipment to prevent industrial sabotage or theft.",
    },
    {
        icon: Users,
        title: "Specialized Unit Briefs",
        desc: "Daily tactical briefings to ensure every officer is updated on the latest threat intelligence for the specific site.",
    },
];

const SpecializedServicesPage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#1D1F2F"
                imgUrl="header/police-hssl-2.jpg"
                tagline="Specialized Guard Services"
                title={{
                    dimmed: "Operations",
                    main: "High-Risk",
                }}
                icons={[TargetIcon, ActivityIcon]}
                description="For high-risk scenarios, industrial operations, or critical infrastructure, we deliver specialized guard services. Each solution is tailored to unique client needs, ensuring maximum protection where it matters most."
                textColor="#FFFFFF"
                isDarkBg
            />
            <SectorGrid
                sectors={specializedSectors}
                sectionTitle="Critical Infrastructure"
            />
            <OperationalProtocol
                protocols={specializedProtocols}
                mainTitle={"Elite Operational"}
                tagline="Readiness"
                description="High-risk environments leave zero room for error. HSSL utilizes a combination of tactical training and institutional oversight to safeguard Nigeria's most vital assets."
            />
        </div>
    );
};

export default SpecializedServicesPage;
