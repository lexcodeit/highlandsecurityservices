import Image from "next/image";
import React from "react";

const HomeAboutSection = () => {
    return (
        <div className="mx-auto max-w-[1200px] py-24 min-h-[100vh] relative">
            <h3 className="text-3xl text-header-text font-outfit font-semibold mb-10">
                At Highland Security Services, we deliver trusted protection for
                individuals, businesses, and events across Nigeria.
            </h3>
            <h3 className="text-3xl text-header-text font-outfit font-semibold">
                Our team is built on discipline, integrity, and swift response
                to your needs. From personal bodyguards to industrial security,
                we’ve got you covered.
            </h3>

            <div className="absolute bottom-0 left-0 eagle-eye w-full flex items-center">
                <h1 className=" font-brush-script eagle-eye">Eagle Eye</h1>
                {/* <div className="flex-1 relative"> */}
                <Image
                    src={"/assets/images/eagle-head.png"}
                    width={100}
                    height={100}
                    alt="landing-eagle"
                    className="object-cover w-[200px]"
                />
                {/* </div> */}
            </div>
        </div>
    );
};

export default HomeAboutSection;
