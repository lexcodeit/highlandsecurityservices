import ServiceHero from "../shared/service-hero";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";
import {
    BellRing,
    Building2,
    Eye,
    HardDrive,
    MonitorPlay,
    ShieldAlert,
    ShoppingBag,
    Warehouse,
    Zap,
} from "lucide-react";

const surveillanceSectors: SectorProps[] = [
    {
        icon: Warehouse,
        title: "Logistics & Warehousing",
        desc: "Monitoring large-scale inventory movements and preventing shrinkage in massive storage facilities.",
    },
    {
        icon: Building2,
        title: "Corporate Complexes",
        desc: "Centralized monitoring for high-rise buildings, managing elevator access and common area safety.",
    },
    {
        icon: ShoppingBag,
        title: "Retail Hubs",
        desc: "Advanced loss prevention and crowd monitoring for malls and large-scale commercial centers.",
    },
];

const surveillanceProtocols: ProtocolItem[] = [
    {
        icon: MonitorPlay,
        title: "24/7 Virtual Guarding",
        desc: "Our Central Command Center in Lagos provides around-the-clock remote monitoring, ensuring eyes are on your assets at all times.",
    },
    {
        icon: Zap,
        title: "AI-Enhanced Detection",
        desc: "Utilizing smart motion sensors and tripwire technology to flag unauthorized movement instantly before it escalates.",
    },
    {
        icon: BellRing,
        title: "Instant Response Link",
        desc: "Direct integration between our monitoring desk and mobile patrol teams for immediate physical intervention upon alarm triggers.",
    },
    {
        icon: HardDrive,
        title: "Encrypted Data Archiving",
        desc: "Secure off-site storage of all surveillance footage, providing a tamper-proof audit trail for legal and investigative purposes.",
    },
];
const SurveillanceServicePage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#202A33"
                imgUrl="services/surveillance.jpg"
                tagline="Surveillance & Monitoring"
                title={{
                    dimmed: "Oversight",
                    main: "Tech-Driven ",
                }}
                icons={[ShieldAlert, Eye]}
                description="Combining technology with human expertise, we provide advanced surveillance and monitoring. Our team detects risks early, ensuring swift response and proactive security for clients and assets."
                textColor="#FFFFFF"
                isDarkBg
            />
            <SectorGrid
                sectors={surveillanceSectors}
                sectionTitle="Monitoring Environments"
            />
            <OperationalProtocol
                protocols={surveillanceProtocols}
                mainTitle={"The Digital"}
                tagline="Sentry System"
                description="Technology is only as good as the response it triggers. HSSL bridges the gap between digital detection and physical security, ensuring you are never just a witness to a crime."
            />
        </div>
    );
};

export default SurveillanceServicePage;
