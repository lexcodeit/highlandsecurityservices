import AgentProfile from "./agent-profile";
import OperationalEnvironments from "./operational-environments";
import TacticalProcess from "./tactical-process";
import SectorGrid from "../shared/sector-grid";
import {
    Crown,
    HardHat,
    Landmark,
    Map,
    Microscope,
    Radio,
    UserCheck,
} from "lucide-react";
import ServiceHero from "../shared/service-hero";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";

const BodyGuardSection = () => {
    const sectors = [
        {
            icon: HardHat,
            title: "Oil & Gas Industry",
            desc: "Specialized protection for personnel and assets in high-risk energy zones.",
        },
        {
            icon: Landmark,
            title: "Banking & Finance",
            desc: "Discreet security for directors and high-stakes financial environments.",
        },
        {
            icon: Crown,
            title: "VIPs & Diplomats",
            desc: "Close protection specialists for high-net-worth individuals and public figures.",
        },
    ];

    const bodyguardProtocols: ProtocolItem[] = [
        {
            icon: UserCheck, // Or a React-Icon equivalent
            title: "Elite Vetting Process",
            desc: "Every agent undergoes rigorous background checks and psychological profiling to ensure the highest level of integrity and professional conduct.",
        },
        {
            icon: Map,
            title: "Advanced Route Survey",
            desc: "Before every movement, our specialists perform reconnaissance on all travel routes and venues to identify and mitigate potential risks.",
        },
        {
            icon: Microscope,
            title: "Continuous Tactical Training",
            desc: "Agents participate in ongoing 'Use of Force' and 'Defensive Tactics' drills, exceeding the standard 40-hour ministry requirement.",
        },
        {
            icon: Radio,
            title: "Discreet Communication Link",
            desc: "Bodyguards maintain a silent, encrypted link with our 24/7 Command Center for immediate tactical support without compromising your privacy.",
        },
    ];

    return (
        <div>
            <ServiceHero
                bgColor="#f5f5f5"
                description="Our trained bodyguards provide discreet, 24/7 personal protection for executives, VIPs, and high-profile individuals. With professionalism and vigilance, we ensure your safety in every environment."
                imgUrl="services/guards.jpg"
                tagline="Bodyguard Services"
                title={{
                    dimmed: "Protection",
                    main: "Elite",
                }}
                icons={[HardHat, Landmark]}
            />
            <SectorGrid
                sectors={sectors}
                sectionTitle="Strategic Partners"
                tagline="Industry-Specific Expertise"
            />
            <AgentProfile />

            <OperationalProtocol
                protocols={bodyguardProtocols}
                description="True protection is invisible but omnipresent. We combine elite human intelligence with structured institutional oversight to create a secure environment around our principals."
                mainTitle={"The Protective"}
                tagline="Envelope"
            />
            <OperationalEnvironments />
            <TacticalProcess />
        </div>
    );
};

export default BodyGuardSection;
