import { Landmark, PhoneCall, HardHat, Crown } from "lucide-react";

const WhoWeServe = () => {
    const sectors = [
        {
            icon: <HardHat className="w-8 h-8 text-primary-gold" />,
            title: "Oil & Gas Industry",
            desc: "Specialized protection for personnel and assets in high-risk energy zones.",
        },
        {
            icon: <Landmark className="w-8 h-8 text-primary-gold" />,
            title: "Banking & Finance",
            desc: "Discreet security for directors and high-stakes financial environments.",
        },
        {
            icon: <Crown className="w-8 h-8 text-primary-gold" />,
            title: "VIPs & Diplomats",
            desc: "Close protection specialists for high-net-worth individuals and public figures.",
        },
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary-gold font-bold uppercase tracking-widest text-sm mb-4">
                        Strategic Partners
                    </h2>
                    <h3 className="text-4xl font-bold font-outfit text-slate-900">
                        Industry-Specific Expertise
                    </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {sectors.map((sector, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-gold/10 transition-colors">
                                {sector.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-outfit">
                                {sector.title}
                            </h4>
                            <p className="text-supporting-text leading-relaxed">
                                {sector.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
