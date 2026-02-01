import { useBookingStore } from "@/lib/stores/booking-store";
import React from "react";
import BodyguardSpecializedForm from "./service-forms/bodyguard-specialized-form";
import EventForm from "./service-forms/event-form";
import EscortBullionForm from "./service-forms/escort-bullion-form";
import MarineForm from "./service-forms/marine-form";
import ResidentialCorporateForm from "./service-forms/residential-corporate-form";
import CctvSurveillanceCyberForm from "./service-forms/cctv-surveillance-cyber-form";

const ServiceForm = () => {
    const { formData } = useBookingStore();

    const service = formData.serviceType;

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 font-outfit uppercase">
                    {service?.replace(/_/g, " ")} Details
                </h2>
                <p className="text-slate-500 mt-2">
                    Give us more information about what you want exactly
                </p>
            </div>

            <div>
                {service === "BODYGUARD" || service === "SPECIALIZED" ? (
                    <BodyguardSpecializedForm />
                ) : service === "EVENT" ? (
                    <EventForm />
                ) : service === "ESCORT" || service === "BULLION" ? (
                    <EscortBullionForm />
                ) : service === "MARINE" ? (
                    <MarineForm />
                ) : service === "RESIDENTIAL" || service === "CORPORATE" ? (
                    <ResidentialCorporateForm />
                ) : service === "CCTV" ||
                  service === "CYBER" ||
                  service === "SURVEILLANCE" ? (
                    <CctvSurveillanceCyberForm />
                ) : null}
            </div>
        </div>
    );
};

export default ServiceForm;
