import Image from "next/image";

// Suggested structural change for the About Section
const AboutIntro = () => {
    return (
        <section className="py-20 px-6 ">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div>
                    <h2 className="text-primary-gold font-outfit font-bold uppercase tracking-widest mb-4">
                        About Highland Security
                    </h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Proactive Corporate Security & Safety Solutions
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        HIGHLAND SECURITY SERVICES LIMITED, an incorporated
                        security service company duly registered and licensed in
                        Nigeria under CATEGORY “A” with registered offices at
                        30, Sule Abore Street, Ojodu, Ikeja, Lagos, Mainland
                        Garden Estate Obafemi Owode, Ogun State and Nwaniba
                        Road, Uyo Akwa Ibon State.
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t pt-6">
                        <div>
                            <h4 className="font-bold text-slate-900">
                                Our Mission
                            </h4>
                            <p className="text-sm text-gray-500">
                                Providing highly trained protection specialists
                                for long and short term needs.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">
                                Our Vision
                            </h4>
                            <p className="text-sm text-gray-500">
                                Taking protection to the next level because your
                                safety is our priority.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <Image
                        src="/assets/images/hssl-eagle.png"
                        fill
                        className="object-contain"
                        alt="Highland Security Team"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
