import { ShieldCheck, UserCheck, Search, ClipboardCheck } from "lucide-react";
import Image from "next/image";

const VettingSection = () => {
    const standards = [
        {
            icon: <Search className="w-8 h-8 text-primary-gold" />,
            title: "Rigorous Background Checks",
            description:
                "Comprehensive verification of previous employment and personal references for every candidate.",
        },
        {
            icon: <UserCheck className="w-8 h-8 text-primary-gold" />,
            title: "Criminal & DMV Clearance",
            description:
                "Thorough screening of criminal records and DMV history to ensure the highest integrity.",
        },
        {
            icon: <ClipboardCheck className="w-8 h-8 text-primary-gold" />,
            title: "Substance Abuse Testing",
            description:
                "Mandatory, ongoing screening to maintain a peak-performance and reliable security force.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary-gold" />,
            title: "Government Certified",
            description:
                "Our hiring guidelines both meet and exceed all Nigerian government licensing requirements.",
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <h2 className="text-primary-gold font-bold tracking-tighter uppercase mb-4">
                            Quality Assurance
                        </h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-6 font-outfit">
                            The HSSL Standard: <br />
                            <span className="text-gray-500 text-3xl">
                                Elite Vetting & Training
                            </span>
                        </h3>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            At Highland Security Services Limited, we recruit
                            and retain the best and the brightest. Our officers
                            hold extensive institutional knowledge and undergo
                            intense training on regulatory requirements before
                            they ever step foot on your site.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {standards.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="bg-white w-14 h-14 rounded-lg shadow-sm flex items-center justify-center border border-slate-100">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-800">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 leading-snug">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Highlighting "The Professional" */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/images/standing-formation.jpg" // Use an image of a guard being trained or a professional guard portrait
                                fill
                                className="object-cover"
                                alt="Professional Security Officer"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-8 right-8 bg-slate-900/90 text-white p-6 rounded-xl backdrop-blur-md border border-white/10 max-w-[200px]">
                                <p className="text-3xl font-bold text-primary-gold mb-1">
                                    15+
                                </p>
                                <p className="text-xs uppercase tracking-widest leading-tight">
                                    Years of management experience per team lead
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VettingSection;
