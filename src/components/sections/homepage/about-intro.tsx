import Image from "next/image";

// Suggested structural change for the About Section
const AboutIntro = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Visual Side */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/assets/images/hssl-eagle.png"
                        fill
                        className="object-contain"
                        alt="Highland Security Team"
                    />
                    {/* <div className="absolute bottom-6 left-6 bg-primary-gold p-6 text-black font-bold">
                        <p className="text-4xl">15+</p>
                        <p className="text-sm uppercase tracking-widest">
                            Years of Experience
                        </p>
                    </div> */}
                </div>

                {/* Content Side */}
                <div>
                    <h2 className="text-primary-gold font-outfit font-bold uppercase tracking-widest mb-4">
                        About Highland Security
                    </h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Proactive Corporate Security & Safety Solutions
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        Highland Security Services Limited is a risk management
                        consulting company licensed to operate multi-dimensional
                        security throughout Nigeria. We believe the best
                        security systems incorporate both technology and high
                        instincts.
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
            </div>
        </section>
    );
};

export default AboutIntro;
