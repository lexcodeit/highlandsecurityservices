import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="p-10">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto">
                <div>
                    <div className="flex mb-25 items-center">
                        <Image
                            src={"/assets/images/bg-logo.svg"}
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px] object-contain"
                            alt="contain"
                        />

                        <h1 className="font-semibold">
                            Highland Security Services
                        </h1>
                    </div>

                    <Link href={"mailto:info@highlandsecurityservices.com"}>
                        info@highlandsecurityservices.com
                    </Link>
                </div>

                <div className="flex items-center gap-x-6 text-supporting-text font-semibold">
                    <Link href={"https://linkedin.com/"}>LinkedIn</Link>
                    <p className="text-primary-gold font-semibold">X</p>
                    <Link target="_blank" href={"https://instagram.com/"}>
                        Instagram
                    </Link>
                    <p className="text-primary-gold font-semibold">X</p>
                    <Link target="_blank" href={"https://facebook.com/"}>
                        Facebook
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
