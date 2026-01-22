import {
    Building2Icon,
    Clock,
    LandmarkIcon,
    RadioIcon,
    Search,
    ShieldCheck,
    Zap,
} from "lucide-react";
import SectorGrid from "../shared/sector-grid";
import OperationalProtocol from "../shared/operation-protocol";
import ServiceHero from "../shared/service-hero";

const corporateSectors = [
    {
        icon: LandmarkIcon,
        title: "Banking Sector",
        desc: "Protecting high-stakes financial environments and administrative headquarters.",
    },
    {
        icon: RadioIcon,
        title: "Telecommunications",
        desc: "Securing critical infrastructure, technical hubs, and service centers.",
    },
    {
        icon: Building2Icon,
        title: "Government Agencies",
        desc: "Professional guarding for sensitive state and federal facilities.",
    },
];

const protocols = [
    {
        icon: Search,
        title: "Unannounced Inspections",
        desc: "Supervisory staff perform surprise drop-ins at any time to observe and evaluate performance, ensuring total alertness.",
    },
    {
        icon: ShieldCheck,
        title: "On-Site Orientation",
        desc: "Guards are thoroughly oriented on-site to understand specific building layouts, logistics, and venue instructions.",
    },
    {
        icon: Zap,
        title: "Continuous Support",
        desc: "Ongoing training is provided to handle new situations and correct any service deficiencies noted during duty.",
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        desc: "Field supervisors are available 24/7, and the office remains open seven days a week for immediate response.",
    },
];

const CorporatePage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#E8EEF5"
                description="    We safeguard offices, business premises, and corporate
                    facilities with tailored security solutions. Our officers
                    provide a secure environment that allows your organization
                    to focus on growth and productivity.
                "
                imgUrl="services/corporate-security.jpg"
                tagline="Corporate Security"
                title={{
                    dimmed: "Secured",
                    main: "Corporate",
                }}
                icons={[RadioIcon, Building2Icon]}
            />
            <SectorGrid
                sectors={corporateSectors}
                sectionTitle="Corporate Jurisdictions"
            />
            <OperationalProtocol
                protocols={protocols}
                description="Effective security depends on adequate supervision. We guarantee that your facility is never left vulnerable through a multi-layered oversight system."
                mainTitle={"The Accountability"}
                tagline="Infrastructure"
            />
        </div>
    );
};

export default CorporatePage;
