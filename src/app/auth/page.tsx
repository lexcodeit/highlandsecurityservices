"use client";
import SigninCard from "@/components/screens/auth/signin-card";
import Image from "next/image";
import React from "react";

const AuthPage = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <div className="md:h-auto md:w-[420px] py-10">
                <div className="mb-6 flex justify-center">
                    <Image
                        src={"/assets/images/bg-logo.svg"}
                        alt="logo"
                        width={100}
                        height={100}
                        className="rounded-full h-[100px]"
                    />
                </div>
                <SigninCard />
            </div>
        </div>
    );
};

export default AuthPage;
