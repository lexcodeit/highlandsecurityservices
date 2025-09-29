import {
    FacebookPage,
    InstagramPage,
    LinkedInPage,
    TiktokPage,
} from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsTiktok } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="p-10  border-t border-t-border-color">
            <div className="flex justify-between max-w-[1200px] mx-auto gap-x-10 py-4">
                <div className="flex-2">
                    <div className="flex mb-2 items-center">
                        <Image
                            src={"/assets/images/bg-logo.svg"}
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px] object-contain"
                            alt="contain"
                        />

                        <h1 className="font-bold text-primary-gold text-[48px]">
                            HSSL
                        </h1>
                    </div>
                    <div>
                        <p className="text-sm text-supporting-text">
                            Highland Security Services Limited (Eagle Eye) is a
                            Lagos-based private security company providing
                            trusted protection for individuals, businesses, and
                            events. We combine trained personnel, modern
                            surveillance systems, and industry expertise to
                            safeguard lives, assets, and reputation.
                        </p>
                        <Link
                            href={"mailto:info@highlandsecurityservices.com"}
                            className="text-primary-gold font-semibold block my-4 underline text-xl"
                        >
                            info@highlandsecurityservices.com
                        </Link>

                        <div>
                            <div className="flex items-center gap-x-6 text-supporting-text font-semibold">
                                <Link target="_blank" href={LinkedInPage}>
                                    <FaLinkedin className="size-8 text-header-text" />
                                </Link>
                                <Link target="_blank" href={InstagramPage}>
                                    <FiInstagram className="size-8 text-header-text" />
                                </Link>
                                <Link target="_blank" href={FacebookPage}>
                                    <FiFacebook className="size-8 text-header-text" />
                                </Link>

                                <Link target="_blank" href={TiktokPage}>
                                    <BsTiktok className="size-8 text-header-text" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-3 px-4 flex-1">
                    <h3 className="text-supporting-text font-medium text-sm">
                        Company
                    </h3>
                    <Link href="/" className="text-header-text font-medium">
                        About Us
                    </Link>
                    <Link href="/" className="text-header-text font-medium">
                        Services
                    </Link>
                    <Link className="text-header-text font-medium" href="/">
                        Careers
                    </Link>
                </div>
                <div className="flex flex-col gap-y-3 px-4 flex-1">
                    <h3 className="text-supporting-text font-medium text-sm">
                        Legal
                    </h3>
                    <Link href="/" className="text-header-text font-medium">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-header-text font-medium">
                        Terms and Conditions
                    </Link>
                </div>
                <div className="flex flex-col gap-y-3 px-4 flex-1">
                    <h3 className="text-supporting-text font-medium text-sm">
                        Platform
                    </h3>
                    <Link href="/" className="text-header-text font-medium">
                        FAQs
                    </Link>
                    <Link href="/" className="text-header-text font-medium">
                        Blog
                    </Link>
                    <Link href="/" className="text-header-text font-medium">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="border-t border-t-border-color p-6 flex items-center justify-center">
                <p className="text-supporting-text text-sm font-outfit text-center">
                    © 2025 Highland Security Services. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
