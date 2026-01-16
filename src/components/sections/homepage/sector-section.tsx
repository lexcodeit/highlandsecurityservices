import SectionTitle from "@/components/global/frontend/section-title";
import Image from "next/image";

const SectorList = () => {
    const sectors = [
        {
            name: "Banking Sector",
            image: "/assets/images/services/specialized.jpg",
        },
        {
            name: "Telecommunications",
            image: "/assets/images/highRes/cctv.jpg",
        },
        {
            name: "Hotels & Hospitality",
            image: "/assets/images/header/police-hssl-2.jpg",
        },
        {
            name: "Educational Institutions",
            image: "/assets/images/services/three-guards-with-cso-at-school.jpg",
        },
        {
            name: "Oil & Gas Industry",
            image: "/assets/images/services/maritime.jpg",
        },
        {
            name: "Government Agencies",
            image: "/assets/images/services/hssl-police-4.jpg",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <SectionTitle
                subtitle="Our proactive security solutions are trusted by government agencies and private corporations to safeguard personnel, assets, and reputation where risks are highest."
                title="Industry Expertise"
            />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] overflow-hidden rounded-xl bg-slate-200 shadow-lg"
                        >
                            {/* Sector Image */}
                            <Image
                                src={sector.image}
                                fill
                                alt={sector.name}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="h-1 w-12 bg-primary-gold mb-4 transition-all duration-300 group-hover:w-full" />
                                <h4 className="text-2xl font-bold text-white font-outfit uppercase tracking-tight">
                                    {sector.name}
                                </h4>
                                <p className="text-slate-300 text-sm mt-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    Specialized security solutions tailored for{" "}
                                    {sector.name.toLowerCase()} operations.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default SectorList;
