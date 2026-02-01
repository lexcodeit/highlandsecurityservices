import { Button } from "@/components/ui/button";
import { ServiceProps } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServiceSectionCard = ({
    service,
    index,
}: {
    service: ServiceProps;
    index: number;
}) => {
    const { description, image, title, bgColor, textColor, slug } = service;

    // 1. Initialize state as null or the first image
    const [currentImg, setCurrentImg] = useState<string | null>(null);

    // 2. Run the random logic only once on the client
    useEffect(() => {
        const randomImg = image[Math.floor(Math.random() * image.length)];
        setCurrentImg(randomImg);
    }, [image]);

    // 3. Don't render the image until the client has picked one
    // (Or provide a stable fallback image)
    if (!currentImg) return <div className="service-card" />;

    return (
        <div className="service-card" id={`service-card-${index + 1}`}>
            <div
                className="service-card-inner"
                style={{
                    background: bgColor,
                    color: textColor,
                }}
            >
                <div className="service-card-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link href={`/services/${slug}`} className="mt-3 block">
                        <Button>Learn More</Button>
                    </Link>
                </div>
                <div className="service-card-image relative">
                    <Image
                        src={`/assets/images/services/${currentImg}`}
                        alt={title}
                        width={400}
                        height={600}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;
