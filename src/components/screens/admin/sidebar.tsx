"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./sidebar-item";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoNewspaperOutline } from "react-icons/io5";
import { VscBook } from "react-icons/vsc";
import { FaBriefcase, FaUserSecret } from "react-icons/fa";

const SideBar = () => {
    const pathname = usePathname();

    return (
        <div className="w-[18%] bg-white border-r border-r-border">
            <div className="p-4 flex border-b border-b-muted">
                <Link href={`/control-admin`} className="flex items-center">
                    <Image
                        src={"/assets/images/bg-logo.svg"}
                        alt="logo"
                        width={100}
                        height={50}
                        className="cursor-pointer h-[50px] rounded"
                    />
                </Link>
            </div>

            <div className="p-5">
                <div className="mb-5">
                    <h2 className="text-supporting-text font-bold text-sm mb-3">
                        MAIN MENU
                    </h2>
                    <SidebarItem
                        icon={MdOutlineSpaceDashboard}
                        label="Dashboard"
                        url={`/`}
                        isActive={pathname.split("/").length < 3}
                    />
                    <SidebarItem
                        icon={FaBriefcase}
                        label="Jobs"
                        url={`/jobs`}
                        isActive={pathname.includes("/jobs")}
                    />
                    <SidebarItem
                        icon={IoNewspaperOutline}
                        label="Blog Posts"
                        url={`/posts`}
                        isActive={pathname.includes("/posts")}
                    />
                    <SidebarItem
                        icon={FaUserSecret}
                        label="Guards"
                        url={`/guards`}
                        isActive={pathname.includes("/guards")}
                    />
                    <SidebarItem
                        icon={VscBook}
                        label="Bookings"
                        url={`/bookings`}
                        isActive={pathname.includes("/bookings")}
                    />
                </div>

                <div>
                    <h2 className="text-supporting-text font-bold text-sm mb-3">
                        MANAGEMENT
                    </h2>
                    <SidebarItem
                        icon={FaUsersGear}
                        label="Workspace Members"
                        url={`/workspace-members`}
                        isActive={pathname.includes("/workspace-members")}
                    />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
