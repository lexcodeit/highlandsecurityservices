import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const HomeAboutSection = () => {
    const values = [
        "Integrity",
        "Professionalism",
        "Expertise",
        "Teamwork",
        "Trust",
        "Transparency",
        "Respect",
        "Responsiveness",
        "Dependability",
        "Recognition",
        "Excellence",
        "Confidentiality",
    ];

    useGSAP(() => {
        const aboutText = gsap.utils.toArray(`.about-text`) as HTMLElement[];

        gsap.fromTo(
            aboutText,
            { opacity: 0 }, // start state
            {
                top: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-section", // section wrapper
                    start: "top 75%", // when section hits 75% of viewport
                    toggleActions: "play none none reverse",
                    // markers: true, // uncomment for debugging
                    // scrub: 1,
                },
            }
        );
    });

    return (
        <div className="mx-auto max-w-[1200px] py-24 px-6 lg:px-0 min-h-[100vh] relative about-section">
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <h3 className="relative text-xl lg:text-3xl text-header-text font-outfit font-semibold mb-10 about-text top-[100px]">
                    At Highland Security Services, we deliver trusted protection
                    for individuals, businesses, and events across Nigeria.
                </h3>
            </div>
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <h3 className="relative text-2xl lg:text-3xl text-header-text font-outfit font-semibold about-text top-[100px]">
                    Our team is built on discipline, integrity, and swift
                    response to your needs. From personal bodyguards to
                    industrial security, we’ve got you covered.
                </h3>
            </div>
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Sticky Left Side: Visual & Heading */}
                        <div className="lg:col-span-5 lg:sticky lg:top-10">
                            <h2 className="text-primary-gold font-bold uppercase tracking-[0.2em] mb-4">
                                Our Foundation
                            </h2>
                            <h3 className="text-5xl font-bold text-slate-900 mb-8 font-outfit">
                                Our Shared <br /> Values
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                At Highland Security Services Limited, our
                                culture is defined by a commitment to
                                excellence. These core values guide every
                                officer and consultant in our mission to protect
                                your assets with unwavering dedication.
                            </p>

                            {/* High-Impact Image */}
                            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/assets/images/conference-room.jpg" // Suggestion: A firm handshake or a team standing together
                                    fill
                                    className="object-cover"
                                    alt="HSSL Professionalism"
                                />
                                <div className="absolute inset-0 bg-slate-900/20" />
                            </div>
                        </div>

                        {/* Right Side: Values Grid */}
                        <div className="lg:col-span-7">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center p-6 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 hover:bg-slate-900 hover:shadow-lg"
                                    >
                                        <div className="mr-4 transition-colors duration-300 group-hover:text-primary-gold text-slate-400">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white font-outfit">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Corporate Quote at the bottom */}
                            <div className="mt-12 p-8 border-l-4 border-primary-gold bg-slate-50 italic text-slate-700">
                                "Our commitment to creating the safest possible
                                environment has earned us a reputation for
                                excellence and long-term client relationships."
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeAboutSection;
