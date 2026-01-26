import ServiceHero from "../shared/service-hero";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";
import {
    CoinsIcon,
    GemIcon,
    Landmark,
    LandmarkIcon,
    LockIcon,
    Navigation,
    Radio,
    ShieldAlert,
    ShieldCheck,
} from "lucide-react";

const bullionSectors: SectorProps[] = [
    {
        icon: Landmark,
        title: "Commercial Banks",
        desc: "Secure inter-branch cash transit and central bank bulk deposits under armed tactical escort.",
    },
    {
        icon: GemIcon,
        title: "Precious Metals",
        desc: "Safe movement of gold, gemstones, and high-value minerals from refineries to secure storage.",
    },
    {
        icon: CoinsIcon,
        title: "Corporate Revenue",
        desc: "High-volume cash collection and secure processing for major retail chains and corporate hubs.",
    },
];
const bullionProtocols: ProtocolItem[] = [
    {
        icon: Navigation,
        title: "GPS Geofencing",
        desc: "Every armored unit is monitored via satellite with pre-set 'Safe Zones.' Any route deviation triggers an instant alarm at Central Command.",
    },
    {
        icon: LockIcon,
        title: "Dual-Verification Custody",
        desc: "We implement strict 'Two-Man' protocols for vault access, ensuring no single individual has total control over the assets.",
    },
    {
        icon: Radio,
        title: "Central Command Link",
        desc: "Constant radio and data link with our 24/7 office allows for immediate dispatch of backup units in the event of an incident.",
    },
    {
        icon: ShieldCheck,
        title: "Armored Integrity",
        desc: "Our fleet consists of reinforced ballistic-grade vehicles designed to withstand high-impact threats and ensure cargo safety.",
    },
];

const BullionServicesPage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#1E1E1E"
                imgUrl="services/bullion-3.jpg"
                tagline="Bullion Van Operations"
                title={{
                    dimmed: "Transit",
                    main: "High-Value Asset ",
                }}
                icons={[LandmarkIcon, ShieldAlert]}
                description="Our Bullion Van Operations specialize in the secure transportation of cash, precious metals, and other high-value assets. Each convoy is manned by armed professionals operating in constant communication with our central command."
                isDarkBg
                textColor="#FFFFFF"
            />
            <SectorGrid
                sectors={bullionSectors}
                sectionTitle="Strategic Asset Jurisdictions"
            />
            <OperationalProtocol
                protocols={bullionProtocols}
                mainTitle={"Fortified Asset"}
                tagline="Logistics"
                description="Moving high-value assets requires a culture of absolute discipline. HSSL combines armored technology with a rigorous oversight system that leaves no room for compromise."
            />
        </div>
    );
};

export default BullionServicesPage;
