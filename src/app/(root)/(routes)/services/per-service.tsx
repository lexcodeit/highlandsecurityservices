import { ServiceProps } from "@/utils/interfaces";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbChevronsUpRight } from "react-icons/tb";

const PerService = ({ service }: { service: ServiceProps; index: number }) => {
    const { description, image, title, bgColor, textColor, slug } = service;

    return (
        <div
            style={{
                background: bgColor,
                color: textColor,
            }}
            className="p-4 lg:p-10 border border-border rounded-md w-full"
        >
            <div className="flex justify-between w-full">
                <div className="service-card-image relative w-full lg:w-[200px] h-[200px] rounded-md overflow-hidden">
                    <Image
                        src={`/assets/images/services/${image}`}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                <h2 className="hidden lg:block text-4xl opacity-70">
                    {title.split(" ").map(t => t[0])}
                </h2>
            </div>
            <div className="service-card-content flex justify-between items-center my-4">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <TbChevronsUpRight className="size-12" />
            </div>
            <p className="text-supporting-text text-sm mb-5">{description}</p>

            <div className="flex justify-end">
                <Link
                    href={`/services/${slug}`}
                    className={`flex border border-[${textColor}] rounded-full p-3 px-6 items-center`}
                    style={{
                        borderColor: textColor,
                    }}
                >
                    <span className="font-medium text-sm">Learn More</span>
                    <ChevronRight />
                </Link>
            </div>
        </div>
    );
};

export default PerService;
