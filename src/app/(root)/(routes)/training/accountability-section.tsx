import { Clock, ShieldAlert, UserCheck, PhoneCall } from "lucide-react";

const AccountabilitySection = () => {
    const protocols = [
        {
            icon: <UserCheck className="w-6 h-6 text-primary-gold" />,
            title: "Random Supervisor Checks",
            desc: "Assigned supervisors perform random checks on the beat to ensure guards are performing as expected.",
        },
        {
            icon: <ShieldAlert className="w-6 h-6 text-primary-gold" />,
            title: "Surprise Drop-Ins",
            desc: "Unannounced inspections by supervisory staff can happen at any time to observe and evaluate all personnel.",
        },
        {
            icon: <Clock className="w-6 h-6 text-primary-gold" />,
            title: "Immediate Resolution",
            desc: "Immediate response for Emergencies, Theft, or Abandonment. All other complaints resolved within 24 hours.",
        },
        {
            icon: <PhoneCall className="w-6 h-6 text-primary-gold" />,
            title: "24/7 Field Support",
            desc: "Field Supervisors are available 24/7 to handle scheduling and emergency situations.",
        },
    ];

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-primary-gold font-bold uppercase tracking-widest mb-4">
                            Operational Excellence
                        </h2>
                        <h3 className="text-4xl lg:text-5xl font-bold font-outfit mb-6">
                            Guaranteed Supervision & Performance
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Effective security depends on adequate supervision.
                            Our contract guarantees rigorous oversight to ensure
                            our guards exceed your expectations every shift.
                        </p>
                        <div className="inline-block bg-primary-gold px-6 py-4 rounded-lg text-black font-bold text-xl font-outfit">
                            OFFICE OPEN 24/7, 365 DAYS A YEAR
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {protocols.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h4 className="text-xl font-bold mb-2 font-outfit">
                                    {item.title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountabilitySection;
