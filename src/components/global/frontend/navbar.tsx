import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-full border-b border-b-border-color top-0 left-0">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto py-4">
                <Link href="/">
                    <Image
                        src={"/assets/images/bg-logo.svg"}
                        width={75}
                        height={75}
                        className="w-[100px] h-[75px] object-contain"
                        alt="contain"
                    />
                </Link>

                <div className="bg-light-bg py-4 px-8 rounded-md flex items-center gap-x-10 text-supporting-text font-semibold">
                    <Link href={"/about"}>
                        <p>About</p>
                    </Link>
                    <Link href={"/services"}>
                        <p>Services</p>
                    </Link>
                    <Link href={"/blog"}>
                        <p>Blog</p>
                    </Link>
                    <Link href={"/contact"}>
                        <p>Contact</p>
                    </Link>
                </div>

                <div>
                    <Link href={"/book-security"}>
                        <Button className="bg-transparent border border-primary-gold text-header-text">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
