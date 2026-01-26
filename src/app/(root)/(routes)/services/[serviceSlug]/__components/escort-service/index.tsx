import ServiceHero from "../shared/service-hero";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";
import {
    Activity,
    Briefcase,
    Globe,
    Landmark,
    Navigation,
    Plane,
    PlaneTakeoff,
    Radio,
    ShieldAlert,
} from "lucide-react";

const escortSectors: SectorProps[] = [
    {
        icon: Landmark,
        title: "Diplomatic Corps",
        desc: "Specialized safe-passage protocols for embassies, international delegates, and foreign missions.",
    },
    {
        icon: Plane,
        title: "Expatriate Transit",
        desc: "Secure airport-to-site transfers for foreign technical experts and personnel in the energy sector.",
    },
    {
        icon: Briefcase,
        title: "Corporate Executives",
        desc: "Seamless journey management for C-suite directors moving between interstate branch offices.",
    },
];

const escortProtocols: ProtocolItem[] = [
    {
        icon: Navigation,
        title: "Real-Time Journey Tracking",
        desc: "Every convoy is linked via GPS to our 24/7 Command Center, allowing for constant monitoring of speed, route, and location.",
    },
    {
        icon: ShieldAlert,
        title: "Rapid Intervention Teams",
        desc: "Standby mobile units are positioned at strategic points to deploy immediately if a transit vehicle encounters a mechanical or security threat.",
    },
    {
        icon: Radio,
        title: "Tactical Communication",
        desc: "Escort teams utilize encrypted, high-frequency radio channels to maintain contact in zones where mobile networks are unreliable.",
    },
    {
        icon: Activity,
        title: "Pre-Route Intelligence",
        desc: "Prior to departure, our intelligence unit clears travel paths and identifies 'safe havens' along the route for emergency contingencies.",
    },
];

const EscortServicePage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#DCE3EB"
                description="Our escort services guarantee safe passage for executives, diplomats, and VIPs. Whether to and from airports, offices, or special events, we provide reliable and discreet protection on the move."
                imgUrl="header/vip-convoy.jpg"
                tagline="Escort Services"
                title={{
                    dimmed: "Protection",
                    main: "Mobile",
                }}
                icons={[Globe, PlaneTakeoff]}
            />
            <SectorGrid
                sectors={escortSectors}
                sectionTitle="Transit Environments"
            />
            <OperationalProtocol
                protocols={escortProtocols}
                mainTitle={"The Journey"}
                tagline="Management System"
                description="Mobile security is more than just a car; it's a coordinated operation. HSSL ensures that your movement is monitored, protected, and prioritized from arrival to departure."
            />
        </div>
    );
};

export default EscortServicePage;
