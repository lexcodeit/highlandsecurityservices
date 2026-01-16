import { Radio, Zap, Shield, Speaker } from "lucide-react";
import Image from "next/image";

const EquipmentGrid = () => {
    const tools = [
        {
            name: "Pistol Shocker",
            category: "Non-Lethal Defense",
            icon: <Zap />,
        },
        {
            name: "Walkie-Talkie",
            category: "8+ Guards Per Shift",
            icon: <Radio />,
        },
        { name: "Tear Gas", category: "Deterrent", icon: <Shield /> },
        {
            name: "Barton & Whistles",
            category: "Supervisory Gear",
            icon: <Speaker />,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-primary-gold font-bold uppercase tracking-widest mb-4">
                            Field Gear
                        </h2>
                        <h3 className="text-4xl font-bold font-outfit text-slate-900">
                            Equipped for Every Situation
                        </h3>
                    </div>
                    <p className="text-gray-500 mt-4 md:mt-0 font-medium italic">
                        "High instincts backed by modern technology."
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tools.map((tool, idx) => (
                        <div
                            key={idx}
                            className="group relative h-40 rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200"
                        >
                            {/* In a real scenario, use specific images of the gear here */}
                            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/40 transition-all duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <div className="bg-primary-gold w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-black shadow-lg">
                                    {tool.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">
                                    {tool.name}
                                </h4>
                                <p className="text-sm text-gray-500 group-hover:text-slate-300 transition-colors uppercase font-bold tracking-tighter">
                                    {tool.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EquipmentGrid;
