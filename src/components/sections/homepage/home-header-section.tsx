import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";

const HomeHeaderSection = () => {
    return (
        <div className="h-[100vh] relative hero-cover">
            <div className="max-w-[1200px] mx-auto h-full flex justify-center">
                <div className="pt-[100px] flex flex-col items-center gap-y-5">
                    <h3 className="mx-auto px-8 py-3 rounded-[8px] bg-white hero-button font-semibold">
                        #1 Security Provider App
                    </h3>
                    <h1 className="font-outfit font-bold text-[60px] text-center mb-1">
                        Book{" "}
                        <span className="gradient-header">Professional</span>{" "}
                        Security Services in Minutes
                    </h1>
                    <p className="text-center font-semibold text-2xl text-supporting-text">
                        Highland Security provides fully trained and vetted
                        guards for individuals, homes, businesses, and events.
                        With our seamless booking system, professional
                        protection is now faster and more accessible than ever.
                    </p>
                    <div className="mx-auto w-full flex justify-center mt-4">
                        <Button className="font-semibold text-base py-4 px-8 z-10">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            <Image
                src={"/assets/images/landing.svg"}
                width={100}
                height={100}
                alt="landing-eagle"
                className="absolute h-full w-1/2 top-0 right-0 object-cover"
            />
        </div>
    );
};

export default HomeHeaderSection;
