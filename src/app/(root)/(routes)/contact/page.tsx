"use client";
import Image from "next/image";
import React from "react";
import ContactForm from "./contact-form";
import MapEmbed from "./map-embed";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#FDF9F5] pt-24 px-4 lg:px-16">
            <div className="p-5 lg:p-12">
                <div className="uppercase">
                    <p className="text-center font-semibold text-primary-gold text-xl">
                        Contact Us
                    </p>
                </div>
                <h1 className="text-center font-outfit text-2xl lg:text-4xl my-1">
                    We are here to help you
                </h1>
                <p className="text-center text-supporting-text text-lg font-medium w-full lg:w-1/2 mx-auto">
                    Need help? Or if you have a question, please contact us and
                    our team will get back to you shortly.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-12 gap-6">
                {/* Contact Options */}
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl lg:text-3xl font-bold mb-1 ">
                            Contact Information
                        </h1>
                        <p className="text-supporting-text text-lg font-semibold">
                            Get in touch with us.
                        </p>
                    </div>

                    <div className="grid gap-6 p-4 lg:p-0">
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/envelop.webp"}
                                alt="envelope"
                            />
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl font-semibold text-header-text">
                                    Write to us
                                </h1>
                                <p className="text-supporting-text">
                                    info@highlandsecurityservices.com
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/tel.webp"}
                                alt="telephone"
                            />
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl font-semibold text-header-text">
                                    Call us
                                </h1>
                                <p className="text-supporting-text">
                                    +234 813 754 8459, +234 901 453 8891
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/envelop.webp"}
                                alt="envelope"
                            />
                            <div className="text-center lg:text-left">
                                <h1 className="text-xl font-semibold text-header-text">
                                    Visit us
                                </h1>
                                <p className="text-supporting-text">
                                    30, SULE ABORE STREET OJODU IKEJA, LAGOS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>

            <MapEmbed />
        </div>
    );
};

export default ContactPage;
