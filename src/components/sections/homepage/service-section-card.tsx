import { ServiceProps } from "@/utils/interfaces";
import Image from "next/image";

const ServiceSectionCard = ({
    service,
    index,
}: {
    service: ServiceProps;
    index: number;
}) => {
    const { description, image, title, bgColor, textColor } = service;

    const currentImg = image[Math.floor(Math.random() * image.length)];
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
                </div>
                <div className="service-card-image relative">
                    <Image
                        src={`/assets/images/services/${currentImg}`}
                        alt={title}
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;
