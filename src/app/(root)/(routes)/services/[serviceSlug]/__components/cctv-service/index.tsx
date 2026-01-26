import ServiceHero from "../shared/service-hero";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";
import {
    Activity,
    Building2,
    CameraIcon,
    Drill,
    HomeIcon,
    LandmarkIcon,
    MonitorPlay,
    ShieldCheckIcon,
    Wifi,
} from "lucide-react";

const cctvSectors: SectorProps[] = [
    {
        icon: Building2,
        title: "Commercial Hubs",
        desc: "High-definition coverage for office towers, shopping malls, and large-scale industrial complexes.",
    },
    {
        icon: LandmarkIcon,
        title: "Financial Institutions",
        desc: "Bank-grade surveillance systems designed for high-security areas and vault monitoring.",
    },
    {
        icon: HomeIcon,
        title: "Private Estates",
        desc: "Integrated smart-home surveillance for perimeter defense and internal safety of luxury residences.",
    },
];

const cctvProtocols: ProtocolItem[] = [
    {
        icon: Drill,
        title: "Custom System Design",
        desc: "We perform a technical site survey to identify blind spots and design a camera layout that maximizes total visibility.",
    },
    {
        icon: MonitorPlay,
        title: "Remote Monitoring Link",
        desc: "Every installation is capable of being linked to our 24/7 Command Center for virtual guarding and immediate incident flagging.",
    },
    {
        icon: Activity,
        title: "System Health Audits",
        desc: "Routine technical checks to ensure all cameras, DVRs, and network links are operational and recording at peak quality.",
    },
    {
        icon: ShieldCheckIcon,
        title: "End-to-End Encryption",
        desc: "Your data is yours. We implement secure network protocols to ensure your live feeds are protected from unauthorized access.",
    },
];

const CCTVServicePage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#F3F3F3"
                imgUrl="services/cctv-guys.jpg"
                tagline="CCTV Installation"
                title={{
                    dimmed: "Infrastructure",
                    main: "Intelligent ",
                }}
                icons={[Wifi, CameraIcon]}
                description="We design and install intelligent CCTV systems integrated with remote monitoring. Stay informed in real time as our experts ensure continuous visibility, swift alerts, and total control over your property’s security."
            />
            <SectorGrid
                sectors={cctvSectors}
                sectionTitle="Installation Jurisdictions"
            />
            <OperationalProtocol
                protocols={cctvProtocols}
                mainTitle={"Total Visibility"}
                tagline="Solutions"
                description="Hardware is only half the battle. HSSL combines high-definition optics with a human response network, turning your surveillance into a proactive defense system."
            />
        </div>
    );
};

export default CCTVServicePage;
