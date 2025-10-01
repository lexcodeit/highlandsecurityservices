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
    isMulti?: boolean;
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
            {label && (
                <Label className="text-supporting-text">
                    {label || "Select an option"}
                </Label>
            )}
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
                        // primary: "#000000",
                        primary: "#f7c74b",
                        primary25: "#FFAE00",
                        primary75: "yellow",
                        danger: "blue",
                        dangerLight: "blue",
                        // neutral0: "red", // Background of the container
                        neutral10: "blue",
                        neutral20: "#e5e7eb", // Border Color
                        neutral30: "#f7c74b", // Hover Border
                        // neutral40: "blue",
                        // neutral5: "blue",
                        neutral50: "#6b7280",
                        neutral60: "#f7c74b", // Arrow Down Colour
                        neutral70: "red",
                        neutral80: "#1e293b", // Selected text colour
                        neutral90: "red",
                        primary50: "#FFAE00", // On Select Value
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
