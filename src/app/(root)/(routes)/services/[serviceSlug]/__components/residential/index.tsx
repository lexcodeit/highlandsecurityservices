import React from "react";
import ServiceHero from "../shared/service-hero";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";
import {
    BellRing,
    Building,
    Eye,
    FileText,
    Home,
    Landmark,
    ShieldCheckIcon,
    TreePine,
    UserPlus,
} from "lucide-react";

const residentialSectors: SectorProps[] = [
    {
        icon: TreePine,
        title: "Private Estates",
        desc: "Comprehensive gate-keeping and perimeter patrols for gated communities and residential clusters.",
    },
    {
        icon: Building,
        title: "Multi-Unit Complexes",
        desc: "Structured security for high-rise apartments and luxury condominiums with shared facilities.",
    },
    {
        icon: Landmark,
        title: "Private Residences",
        desc: "Dedicated, high-focus protection for individual luxury homes and diplomatic compounds.",
    },
];

const residentialProtocols: ProtocolItem[] = [
    {
        icon: UserPlus,
        title: "Visitor Management",
        desc: "Strict 'Call-Ahead' and verification protocols to ensure only invited guests gain entry to the premises.",
    },
    {
        icon: Eye,
        title: "Perimeter Integrity",
        desc: "Regularly scheduled and random 'fence-line' patrols to detect and deter unauthorized intrusions.",
    },
    {
        icon: BellRing,
        title: "Emergency Panic Link",
        desc: "Direct integration between guard posts and our 24/7 center for immediate response to medical or security alarms.",
    },
    {
        icon: FileText,
        title: "Incident Logging",
        desc: "Daily digital occurrence books (DOB) that track every visitor, vehicle, and unusual observation for resident review.",
    },
];

const ResidentialServices = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#EDF4F2"
                description="Protecting homes and estates, our residential security services offer round-the-clock vigilance. With trained guards and surveillance support, we give families peace of mind in safe, secure living spaces."
                imgUrl="header/security-in-vest.jpg"
                tagline="Domestic Peace of Mind"
                title={{
                    dimmed: "Security",
                    main: "Residential",
                }}
                icons={[Home, ShieldCheckIcon]}
            />
            <SectorGrid
                sectors={residentialSectors}
                sectionTitle="Estate Jurisdictions"
            />
            <OperationalProtocol
                protocols={residentialProtocols}
                mainTitle={"Unwavering Vigilance"}
                tagline="& Integrity"
                description="Your home is your sanctuary. HSSL provides a multi-layered security presence that is firm enough to deter threats, yet respectful enough to maintain your privacy."
            />
        </div>
    );
};

export default ResidentialServices;
