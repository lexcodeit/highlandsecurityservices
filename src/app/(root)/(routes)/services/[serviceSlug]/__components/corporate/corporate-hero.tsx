import Image from "next/image";

const CorporateHero = () => (
    <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#E8EEF5" }}
    >
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
                <h2 className="text-primary-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
                    Facility Protection
                </h2>
                <h1 className="text-6xl lg:text-7xl font-bold font-outfit leading-tight mb-6 text-[#0A0A0A]">
                    Corporate <br />{" "}
                    <span className="opacity-70">Secured.</span>
                </h1>
                <p className="text-xl text-slate-700 max-w-md mb-8 leading-relaxed">
                    We safeguard offices, business premises, and corporate
                    facilities with tailored security solutions. Our officers
                    provide a secure environment that allows your organization
                    to focus on growth and productivity.
                </p>
                <div className="flex items-center gap-6">
                    <div className="flex -space-x-3">
                        {/* Place small circular icons or profile placeholders here */}
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-300" />
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-400" />
                    </div>
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-tighter">
                        Trusted by Nigeria's <br /> Leading Firms
                    </p>
                </div>
            </div>
            <div className="relative h-[550px] w-full shadow-2xl rounded-3xl overflow-hidden">
                <Image
                    src={`/assets/images/services/corporate-security.jpg`}
                    fill
                    className="object-cover"
                    alt="Corporate Security Officer"
                />
            </div>
        </div>
    </section>
);

export default CorporateHero;
