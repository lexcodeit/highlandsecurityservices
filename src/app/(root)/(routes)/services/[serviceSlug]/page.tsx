"use client";
import Image from "next/image";
import { CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useServiceSlug } from "@/lib/hooks/use-service-slug";
import { SERVICES_MAP } from "@/utils/maps";
import { ServiceProps } from "@/utils/interfaces";
import BodyGuardSection from "./__components/bodyguard";
import CorporatePage from "./__components/corporate";
import EscortServicePage from "./__components/escort-service";
import EventsServicePage from "./__components/events";
import ResidentialServices from "./__components/residential";
import SpecializedServicesPage from "./__components/specialized-guard-services";
import SurveillanceServicePage from "./__components/surveillance";
import CCTVServicePage from "./__components/cctv-service";
import MarineServicePage from "./__components/marine";
import BullionServicesPage from "./__components/bullion-services";
import CyberServicePage from "./__components/cyber-service";

// Find the service by matching the URL slug to the object slug
export const getServiceBySlug = (slug: string): ServiceProps | undefined => {
    return Object.values(SERVICES_MAP).find(service => service.slug === slug);
};

const ServiceDetailPage = () => {
    const serviceSlug = useServiceSlug();

    const service = getServiceBySlug(serviceSlug);

    if (!service) return null;

    return (
        <main className="overflow-hidden">
            {serviceSlug === "bodyguard-services" ? (
                <BodyGuardSection />
            ) : serviceSlug === "corporate-security" ? (
                <CorporatePage />
            ) : serviceSlug === "escort-services" ? (
                <EscortServicePage />
            ) : serviceSlug === "event-security" ? (
                <EventsServicePage />
            ) : serviceSlug === "residential-security" ? (
                <ResidentialServices />
            ) : serviceSlug === "specialized-guard-services" ? (
                <SpecializedServicesPage />
            ) : serviceSlug === "surveillance-monitoring-services" ? (
                <SurveillanceServicePage />
            ) : serviceSlug === "cctv-installation-remote" ? (
                <CCTVServicePage />
            ) : serviceSlug === "marine-security" ? (
                <MarineServicePage />
            ) : serviceSlug === "bullion-van-operations" ? (
                <BullionServicesPage />
            ) : serviceSlug === "cyber-security" ? (
                <CyberServicePage />
            ) : (
                <>
                    {/* 1. HERO SECTION */}
                    <section
                        className="relative h-[60vh] flex items-center justify-center pt-20"
                        style={{
                            backgroundColor: service.bgColor,
                            color: service.textColor,
                        }}
                    >
                        <div className="absolute inset-0 opacity-20">
                            <Image
                                src={`/assets/images/${service.image[0]}`}
                                fill
                                className="object-cover"
                                alt={service.title}
                                priority
                            />
                        </div>
                        <div className="relative z-10 text-center max-w-4xl px-6">
                            <h1 className="text-5xl lg:text-7xl font-bold font-outfit mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                {service.title}
                            </h1>
                            <div className="h-1.5 w-24 bg-primary-gold mx-auto mb-8" />
                            <Button className="bg-primary-gold text-black hover:bg-white transition-colors h-14 px-10 text-lg font-bold">
                                Request a Security Audit
                            </Button>
                        </div>
                    </section>

                    {/* 2. CORE DESCRIPTION & CAPABILITIES */}
                    <section className="py-24 bg-white">
                        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-outfit mb-6 text-header-text">
                                    Professional Oversight & Tactical Execution
                                </h2>
                                <p className="text-xl text-supporting-text leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "24/7 Command Center Support",
                                        "Fully Licensed & Insured Personnel",
                                        "Rapid Response Protocols",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 font-semibold text-header-text"
                                        >
                                            <CheckCircle2 className="text-primary-gold w-6 h-6" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Secondary Image with "The Man's" requested focus on visuals */}
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                                <Image
                                    src={`/assets/images/${service.image[1] || service.image[0]}`}
                                    fill
                                    className="object-cover"
                                    alt="Operational detail"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 3. WHO NEEDS THIS? (Sector Focus) */}
                    <section className="py-20 bg-slate-50">
                        <div className="max-w-[1200px] mx-auto px-6">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                                <h2 className="text-4xl font-bold font-outfit text-header-text">
                                    Who Needs This?
                                </h2>
                                <p className="text-primary-gold font-bold uppercase tracking-widest">
                                    Industry Relevance
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* You can customize this per service if you add a 'sectors' array to your map */}
                                {[
                                    "Corporate Organizations",
                                    "Private Estates",
                                    "High-Net-Worth Individuals",
                                ].map((target, idx) => (
                                    <div
                                        key={idx}
                                        className="p-8 bg-white rounded-xl border border-slate-200 hover:border-primary-gold transition-colors group"
                                    >
                                        <ShieldAlert className="w-10 h-10 text-slate-300 mb-4 group-hover:text-primary-gold transition-colors" />
                                        <h4 className="text-xl font-bold text-header-text">
                                            {target}
                                        </h4>
                                        <p className="text-sm text-supporting-text mt-2">
                                            Specialized deployment models
                                            designed specifically for{" "}
                                            {target.toLowerCase()}.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. THE CALL TO ACTION - STICKY FOOTER STYLE */}
                    <section className="py-20 bg-slate-900 text-white text-center">
                        <div className="max-w-3xl mx-auto px-6">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-outfit">
                                Ready to Secure Your Assets?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Contact our Lagos headquarters today to discuss
                                a customized {service.title.toLowerCase()} plan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-primary-gold text-black h-14 px-8 font-bold">
                                    Talk to a Consultant
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-14 px-8 border-white text-white hover:bg-white hover:text-black transition-all"
                                >
                                    Download Brochure
                                </Button>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
};

export default ServiceDetailPage;
