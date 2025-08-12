"use client";
import { BellIcon, ChevronDown, SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { avatarFallback } from "@/utils/helpers";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiSignOut } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { useAuthActions } from "@convex-dev/auth/react";
import { useCurrentUser } from "@/lib/features/auth/use-current-user";
import LoaderComponent from "@/components/global/loader-component";
import CompleteAccount from "./complete-account";

const DashboardTopbar = () => {
    const { data: profile, isLoading } = useCurrentUser();
    const { signOut } = useAuthActions();

    if (isLoading) return <LoaderComponent />;

    if (!profile) return <CompleteAccount />;

    return (
        <div>
            <div className="py-2.5 bg-white px-6 border-b border-b-muted flex items-center justify-between">
                <div className="w-1/2 flex items-center shadown-md gap-x-1 rounded-md border border-input px-2 bg-muted py-1">
                    <SearchIcon className="text-icon size-5" />
                    <Input
                        placeholder="Search"
                        className="border-none outline-none focus-visible:ring-transparent shadow-none"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="border border-muted bg-muted w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer">
                            <BellIcon className="size-5 text-icon" />
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="border-l border-l-muted pl-4 flex items-center space-x-2 cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={profile.avatar} />
                                    <AvatarFallback>
                                        {avatarFallback(profile.firstName)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold text-left">
                                        {profile.firstName}{" "}
                                        {profile.lastName?.charAt(0)}.
                                    </p>
                                    <span className="text-muted-foreground text-xs">
                                        {profile.email}
                                    </span>
                                </div>
                                <ChevronDown className="text-muted-foreground" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="flex items-center space-x-2">
                                <FaUser />
                                <span className="text-sm font-semibold">
                                    My Profile
                                </span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="flex items-center space-x-2"
                                onClick={() => signOut()}
                            >
                                <PiSignOut />
                                <span className="text-sm font-semibold">
                                    Log Out{" "}
                                </span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopbar;
