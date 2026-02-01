import { useBookingStore } from "@/lib/stores/booking-store";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

const steps = [
    {
        number: 1,
        title: "Basic Details",
        description: "Identity and contact information.",
        status: "Contact Info",
    },
    {
        number: 2,
        title: "Service Details",
        description: "Technical requirements for your selection.",
        status: "Specialization",
    },
    {
        number: 3,
        title: "Logistics & Notes",
        description: "Deployment dates, location, and instructions.",
        status: "Deployment",
    },
    {
        number: 4,
        title: "Final Review",
        description: "Verify all data before generating your code.",
        status: "Verification",
    },
];

const FormTimeline = () => {
    const { step: currentStep } = useBookingStore();

    return (
        <div className="flex flex-col gap-10">
            {steps.map((step, index) => {
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                    <div key={step.number} className="relative flex gap-6">
                        {/* Connecting Line */}
                        {index !== steps.length - 1 && (
                            <div
                                className={cn(
                                    "absolute left-5 top-10 w-[2px] h-16 bg-slate-200 transition-colors duration-500",
                                    isCompleted && "bg-primary-gold",
                                )}
                            />
                        )}

                        {/* Step Circle */}
                        <div
                            className={cn(
                                "flex items-center justify-center w-10 h-10 rounded-full border-2 z-10 transition-all duration-500",
                                isActive
                                    ? "border-primary-gold bg-primary-gold text-white scale-110 shadow-lg"
                                    : isCompleted
                                      ? "border-primary-gold bg-primary-gold text-white"
                                      : "border-slate-200 bg-white text-slate-400",
                            )}
                        >
                            {isCompleted ? (
                                <Check className="w-5 h-5" />
                            ) : (
                                <span className="text-sm font-bold">
                                    {step.number}
                                </span>
                            )}
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col pt-1">
                            <span
                                className={cn(
                                    "text-xs font-bold uppercase tracking-widest transition-colors",
                                    isActive
                                        ? "text-primary-gold"
                                        : "text-slate-400",
                                )}
                            >
                                {step.status}
                            </span>
                            <h4
                                className={cn(
                                    "text-lg font-bold font-outfit transition-colors",
                                    isActive
                                        ? "text-slate-900"
                                        : "text-slate-400",
                                )}
                            >
                                {step.title}
                            </h4>
                            <p
                                className={cn(
                                    "text-sm max-w-[200px] transition-opacity duration-500",
                                    isActive
                                        ? "opacity-100 text-slate-500"
                                        : "opacity-40 text-slate-400",
                                )}
                            >
                                {step.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FormTimeline;
