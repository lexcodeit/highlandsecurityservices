import { ServiceProps } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";

const ServiceSectionCard = ({
    service,
    index,
}: {
    service: ServiceProps;
    index: number;
}) => {
    const { description, image, title, bgColor, textColor } = service;
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
                        src={`/assets/images/services/${image}`}
                        alt={title}
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;
