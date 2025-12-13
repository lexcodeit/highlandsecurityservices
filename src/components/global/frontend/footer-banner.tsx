import Link from "next/link";
import React from "react";

const FooterBanner = () => {
    return (
        <div className="relative top-0 translate-0  w-full left-0 flex justify-center">
            <section className="w-full lg:w-[80%] p-5 py-10 lg:p-10 border-t border-primary-gold/20 bg-header-text rounded-[16px]">
                <div className="container mx-auto px-0 lg:px-4 flex flex-col lg:flex-row justify-between lg:items-center gap-10 ">
                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-2/3">
                        {/* Label + dots */}
                        <div className="flex items-center gap-5">
                            <p className="uppercase text-base font-semibold text-primary-gold whitespace-nowrap">
                                Get in touch
                            </p>

                            <hr className="w-10 border-primary-gold/40" />

                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary-gold"></span>
                                <span className="w-2 h-2 rounded-full bg-primary-gold/70"></span>
                                <span className="w-2 h-2 rounded-full bg-primary-gold/50"></span>
                            </div>
                        </div>

                        {/* Header */}
                        <h2 className="font-semibold text-2xl lg:text-4xl mt-4 uppercase text-off-white font-outfit">
                            Tell Us About Your Security Needs
                        </h2>

                        {/* Description */}
                        <p className="mt-4 text-sm lg:text-base leading-relaxed text-supporting-text max-w-xl">
                            Whether you’re protecting your home, business, or
                            next major event, we provide tailored security
                            solutions backed by discipline, technology, and
                            unwavering professionalism. Let’s discuss your needs
                            and build a security plan that works.
                        </p>
                    </div>

                    {/* CTA BUTTON */}
                    <div className="relative w-fit mx-auto inline-block p-[2px] rounded-full bg-gradient-to-tr from-primary-gold to-transparent transition-all duration-500 hover:bg-gradient-to-br hover:from-primary-gold hover:to-transparent">
                        <Link
                            href="/contact"
                            className="bg-black text-off-white border-none rounded-full py-4 px-10 pr-14 text-base font-semibold relative block"
                        >
                            <span className="relative z-10">Let’s Talk</span>

                            {/* Arrow bubble */}
                            <div className="absolute bg-primary-gold text-black rounded-full flex justify-center items-center w-9 h-9 right-3 top-1/2 -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FooterBanner;
