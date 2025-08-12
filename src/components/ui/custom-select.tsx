import { SelectOptionType } from "@/utils/interfaces";
import React from "react";
import Select, { SingleValue } from "react-select";
import { Label } from "./label";
import { FieldError } from "react-hook-form";

interface CustomSelectProps {
    label?: string;
    onChange: (value: SingleValue<SelectOptionType>) => void;
    value: unknown;
    options: SelectOptionType[];
    disabled?: boolean;
    className?: string;
    error?: FieldError;
}

const CustomSelect = ({
    label,
    onChange,
    options,
    value,
    disabled,
    className,
    error,
}: CustomSelectProps) => {
    return (
        <div className={`my-4 ${className}`}>
            {label && <Label>{label || "Select an option"}</Label>}
            <Select
                onChange={onChange}
                value={options.filter(v => v.value === value)}
                options={options}
                classNames={{
                    control: () => `py-1 mt-2 text-white`,
                    // option: (())
                }}
                menuPlacement="top"
                isDisabled={disabled}
                theme={theme => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: "#000000",
                        primary25: "#FFAE00",
                        primary75: "yellow",
                    },
                })}
            />
            {error ? (
                <p className="text-destructive text-[0.8rem] font-medium mt-1">
                    {error.message}
                </p>
            ) : null}
        </div>
    );
};

export default CustomSelect;
