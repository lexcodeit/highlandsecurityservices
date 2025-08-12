import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Props {
    text?: string;
}

const EmptySection = ({ text }: Props) => {
    return (
        <div className="h-full flex flex-col items-center justify-center py-6">
            <div className="flex flex-col items-center gap-y-4">
                <DotLottieReact
                    src="/assets/lotties/empty.json"
                    loop
                    autoplay
                    className="h-[100px] w-[100px]"
                />
                <p className="text-supporting-text font-bold">{text}</p>
            </div>
        </div>
    );
};

export default EmptySection;
