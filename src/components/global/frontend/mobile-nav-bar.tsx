import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkItem from "./link-item";
import { usePathname } from "next/navigation";

const MobileNavBar = () => {
    const pathname = usePathname();

    return (
        <nav
            // ref={navRef}
            className="fixed left-0 w-full z-80"
        >
            <div className="flex items-center justify-between max-w-[1300px] mx-auto py-4 px-4 nav-cover">
                <Link href="/">
                    <Image
                        src="/assets/images/bg-logo.svg"
                        width={100}
                        height={75}
                        className="w-[100px] h-[75px] object-contain brand-logo"
                        alt="Brand logo"
                    />
                </Link>

                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="hidden">
                <div className="bg-light-bg py-4 px-8 rounded-md flex items-center gap-x-10 text-supporting-text font-semibold">
                    <LinkItem
                        isActive={pathname.includes("/about")}
                        text="About"
                        url="/about"
                    />
                    <LinkItem
                        isActive={pathname.includes("/services")}
                        text="Services"
                        url="/services"
                    />
                    <LinkItem
                        isActive={pathname.includes("/blog")}
                        text="Blog"
                        url="/blog"
                    />
                    <LinkItem
                        isActive={pathname.includes("/contact")}
                        text="Contact"
                        url="/contact"
                    />

                    <Link href="/book-security">
                        <Button
                            className={cn(
                                "bg-transparent border border-primary-gold nav-btn"
                            )}
                        >
                            <span>Book Now</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavBar;
