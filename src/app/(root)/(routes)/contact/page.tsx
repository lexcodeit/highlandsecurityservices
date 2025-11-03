"use client";
import Image from "next/image";
import React from "react";
import ContactForm from "./contact-form";
import MapEmbed from "./map-embed";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#FDF9F5] pt-24 px-16">
            <div className="p-12">
                <div className="uppercase">
                    <p className="text-center font-semibold text-primary-gold text-xl">
                        Contact Us
                    </p>
                </div>
                <h1 className="text-center font-outfit text-4xl my-1">
                    We are here to help you
                </h1>
                <p className="text-center text-supporting-text text-lg font-medium w-1/2 mx-auto">
                    Need help? Or if you have a question, please contact us and
                    our team will get back to you shortly.
                </p>
            </div>

            <div className="grid grid-cols-2 p-12">
                {/* Contact Options */}
                <div>
                    <div>
                        <h1 className="text-3xl font-bold mb-1">
                            Contact Information
                        </h1>
                        <p className="text-supporting-text text-lg font-semibold">
                            Get in touch with us.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-x-4">
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/envelop.webp"}
                                alt="envelope"
                            />
                            <div>
                                <h1 className="text-xl font-semibold text-header-text">
                                    Write to us
                                </h1>
                                <p className="text-supporting-text">
                                    info@highlandsecurityservices.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/tel.webp"}
                                alt="telephone"
                            />
                            <div>
                                <h1 className="text-xl font-semibold text-header-text">
                                    Call us
                                </h1>
                                <p className="text-supporting-text">
                                    +234 813 754 8459, +234 901 453 8891
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/envelop.webp"}
                                alt="envelope"
                            />
                            <div>
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
