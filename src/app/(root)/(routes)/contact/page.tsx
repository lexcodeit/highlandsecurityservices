import Image from "next/image";
import React from "react";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#FDF9F5] pt-24">
            <div>
                <div className="uppercase">
                    <p>Contact Us</p>
                </div>
                <h1>We are here to help you</h1>
                <p>
                    Need help? Or if you have a question, please contact us and
                    our team will get back to you shortly.
                </p>
            </div>

            <div className="grid grid-cols-2">
                {/* Contact Options */}
                <div>
                    <div>
                        <h1>Contact Information</h1>
                        <p>Get in touch with us.</p>
                    </div>

                    <div>
                        <div>
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/envelop.webp"}
                                alt="envelope"
                            />
                            <div>
                                <h1>Write to us</h1>
                                <p>info@highlandsecurityservices.com</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/tel.webp"}
                                alt="telephone"
                            />
                            <div>
                                <h1>Call us</h1>
                                <p>+234 80 348 1294 213</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                width={100}
                                height={100}
                                src={"/assets/images/contact/envelop.webp"}
                                alt="envelope"
                            />
                            <div>
                                <h1>Visit us</h1>
                                <p>
                                    Malaren Lake Street, Lake Banks, 1053, Tunis
                                </p>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ContactPage;
