import React from "react";
import ServiceHero from "../shared/service-hero";
import {
    AnchorIcon,
    Container,
    Fuel,
    LifeBuoy,
    Radar,
    Radio,
    ShieldAlert,
    ShipIcon,
    Waves,
} from "lucide-react";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";

const marineSectors: SectorProps[] = [
    {
        icon: Fuel,
        title: "Offshore Oil & Gas",
        desc: "Protecting drilling rigs, FPSOs, and support vessels from piracy and unauthorized boarding in the Gulf of Guinea.",
    },
    {
        icon: Container,
        title: "Commercial Shipping",
        desc: "Armed escorts for cargo vessels and tankers navigating through high-risk inland waterways and ports.",
    },
    {
        icon: Waves,
        title: "Inland Waterways",
        desc: "Secure transport for personnel and equipment across Nigeria's complex riverine and coastal networks.",
    },
];

const marineProtocols: ProtocolItem[] = [
    {
        icon: Radar,
        title: "Maritime AIS Tracking",
        desc: "Our 24/7 Command Center utilizes Automatic Identification Systems to monitor vessel position and heading in real-time.",
    },
    {
        icon: ShieldAlert,
        title: "Anti-Piracy Tactics",
        desc: "Personnel are trained in specialized vessel-hardening and defensive maneuvers to deter and repel aquatic threats.",
    },
    {
        icon: Radio,
        title: "Coastal Comms Link",
        desc: "Redundant, encrypted communication channels ensuring constant contact between escort boats and coastal command.",
    },
    {
        icon: LifeBuoy,
        title: "Incident Response Log",
        desc: "Detailed documentation of all maritime interactions and sightings, providing a verifiable audit trail for ship-owners and insurers.",
    },
];

const MarineServicePage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#002B36"
                description="Our Marine Security Operations team ensures the protection of vessels, crew, and valuable cargo across inland waterways and coastal zones. We provide armed escort boats and onboard security officers to guarantee safe passage at sea."
                imgUrl="services/maritime.jpg"
                tagline="Marine Security Operations"
                title={{
                    dimmed: "Protection",
                    main: "Aquatic Asset ",
                }}
                icons={[AnchorIcon, ShipIcon]}
                isDarkBg
                textColor="#FFFFFF"
            />
            <SectorGrid
                sectors={marineSectors}
                sectionTitle="Maritime Jurisdictions"
            />
            <OperationalProtocol
                protocols={marineProtocols}
                mainTitle={"Deep Sea"}
                tagline="Defense"
                description="Operational continuity at sea depends on more than just brawn. HSSL combines tactical escort boats with satellite-driven oversight to ensure your crew and cargo reach port safely."
            />
        </div>
    );
};

export default MarineServicePage;
