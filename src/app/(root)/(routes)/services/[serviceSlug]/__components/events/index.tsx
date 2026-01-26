import React from "react";
import ServiceHero from "../shared/service-hero";
import SectorGrid, { SectorProps } from "../shared/sector-grid";
import OperationalProtocol, {
    ProtocolItem,
} from "../shared/operation-protocol";
import { Heart, Landmark, Mic2, Ticket, Users } from "lucide-react";

const eventSectors: SectorProps[] = [
    {
        icon: Mic2,
        title: "Concerts & Festivals",
        desc: "High-visibility crowd control and stage security for large-scale entertainment productions.",
    },
    {
        icon: Landmark,
        title: "Corporate AGMs",
        desc: "Professional access management for Annual General Meetings and high-level stakeholder gatherings.",
    },
    {
        icon: Heart,
        title: "Private Socials",
        desc: "Discreet and respectful security for weddings, galas, and high-profile family events.",
    },
];

import { DoorOpen, Megaphone, ShieldAlert, ClipboardCheck } from "lucide-react";

const eventProtocols: ProtocolItem[] = [
    {
        icon: DoorOpen,
        title: "Access Control Systems",
        desc: "Rigorous entry-point management to ensure only authorized guests enter, preventing overcrowding and unauthorized access.",
    },
    {
        icon: Megaphone,
        title: "Crowd Flow Logistics",
        desc: "Strategic placement of officers to manage pedestrian traffic and prevent 'bottlenecks' in high-density areas.",
    },
    {
        icon: ShieldAlert,
        title: "Emergency Readiness",
        desc: "Pre-planned evacuation routes and on-site medical response protocols tailored to the specific venue layout.",
    },
    {
        icon: ClipboardCheck,
        title: "Post-Event Reporting",
        desc: "Detailed debriefing and incident logs provided to the host, ensuring total transparency on all security interventions.",
    },
];

const eventProtocolText = {
    tagline: "Structured Coordination",
    mainTitle: (
        <>
            Seamless <br /> Event Safety
        </>
    ),
    description:
        "Managing a crowd requires a balance of authority and hospitality. HSSL ensures your event remains safe without compromising the guest experience.",
};

const EventsServicePage = () => {
    return (
        <div>
            <ServiceHero
                bgColor="#FAFAFA"
                description="From private gatherings to large public events, our security teams manage access, crowd control, and emergency readiness. We ensure a smooth, secure experience for both hosts and guests."
                imgUrl="services/event-security.jpg"
                tagline="Event Security"
                title={{
                    dimmed: "Management",
                    main: "Crowd",
                }}
                icons={[Users, Ticket]}
            />
            <SectorGrid
                sectors={eventSectors}
                sectionTitle="Gathering Venues"
            />
            <OperationalProtocol
                protocols={eventProtocols}
                mainTitle={"Structured"}
                tagline="Coordination"
                description="Managing a crowd requires a balance of authority and hospitality. HSSL ensures your event remains safe without compromising the guest experience."
            />
        </div>
    );
};

export default EventsServicePage;
