import Image from "next/image";
import { BookOpen, MapPin, RefreshCw } from "lucide-react";

const TrainingMethodology = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary-gold font-bold uppercase tracking-widest mb-2">
                        Our Methodology
                    </h2>
                    <h3 className="text-4xl font-bold font-outfit text-slate-900">
                        Comprehensive Guard Orientation
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Off-Site Training */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-transform hover:-translate-y-2">
                        <div className="relative h-64">
                            <Image
                                src="/assets/images/casual-class.jpg"
                                fill
                                className="object-cover"
                                alt="Off-site classroom training"
                            />
                            <div className="absolute top-4 left-4 bg-primary-gold text-black px-4 py-1 font-bold text-sm rounded">
                                OFF-SITE
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4 text-primary-gold">
                                <BookOpen className="w-6 h-6" />
                                <h4 className="text-2xl font-bold text-slate-900">
                                    Academic Foundation
                                </h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                All security guards are trained in proper
                                procedures and expected behavior standards
                                during the **two-week** intensive Highland
                                Security Services Limited training course.
                            </p>
                        </div>
                    </div>

                    {/* On-Site Training */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-transform hover:-translate-y-2">
                        <div className="relative h-64">
                            <Image
                                src="/assets/images/instructions-standing.jpg"
                                fill
                                className="object-cover"
                                alt="On-site guard orientation"
                            />
                            <div className="absolute top-4 left-4 bg-slate-900 text-white px-4 py-1 font-bold text-sm rounded">
                                ON-SITE
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4 text-primary-gold">
                                <MapPin className="w-6 h-6" />
                                <h4 className="text-2xl font-bold text-slate-900">
                                    Field Orientation
                                </h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Guards are thoroughly oriented on-site regarding
                                specific locations, building layouts, and
                                potential security issues unique to your venue.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ongoing Support Banner */}
                <div className="mt-12 bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 border-l-8 border-primary-gold">
                    <div className="bg-primary-gold/10 p-4 rounded-full">
                        <RefreshCw className="w-10 h-10 text-primary-gold animate-spin-slow" />
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-bold mb-2">
                            Ongoing Professional Development
                        </h4>
                        <p className="text-slate-400">
                            HSSL provides ongoing training as needed to handle
                            new situations and correct any deficiencies noted
                            during our contract with your facility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingMethodology;
