import React from "react";

interface Props {
    title: string;
    subtitle: string;
}

const SectionTitle = ({ subtitle, title }: Props) => {
    return (
        <div className="py-20 ">
            <div className="mx-auto max-w-[1200px]">
                <h2 className="text-header-text font-outfit text-[48px] font-bold max-w-[80%]">
                    {title}
                </h2>
                <p className="text-supporting-text max-w-[60%] text-xl ">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default SectionTitle;
