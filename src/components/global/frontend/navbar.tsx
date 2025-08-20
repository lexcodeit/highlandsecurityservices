import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className=" h-[15vh] border-b border-b-border-color">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto py-2">
                <Link href="/">
                    <Image
                        src={"/assets/images/bg-logo.svg"}
                        width={100}
                        height={100}
                        className="w-[100px] h-[80px] object-contain"
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
                    <Button className="bg-primary-gold text-header-text">
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
