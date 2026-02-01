"use client";
import React, { useState } from "react";
import { useBookingStore } from "@/lib/stores/booking-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ShieldCheck, ClipboardCheck } from "lucide-react";
import { toast } from "sonner";

const ReviewDetails = () => {
    const { formData, setStep, reset } = useBookingStore();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize your Convex mutation
    // const createBooking = useMutation(api.bookings.create);

    const handleFinalSubmit = async () => {
        setIsSubmitting(true);
        try {
            // Run the mutation with all strictly typed data from Zustand
            // const bookingCode = await createBooking(formData);

            toast.success("Booking Request Securely Transmitted!");

            // Move to a success state or redirect
            // For now, let's log the generated code
            // console.log("Your Security Code:", bookingCode);

            // Optional: reset();
            // setStep(5); (A success page)
        } catch (error) {
            toast.error("Transmission failed. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const ReviewSection = ({
        title,
        data,
    }: {
        title: string;
        data: Record<string, any>;
    }) => (
        <div className="mb-6">
            <h4 className="text-xs font-bold text-primary-gold uppercase tracking-widest mb-3">
                {title}
            </h4>
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                {Object.entries(data).map(
                    ([key, value]) =>
                        value && (
                            <div key={key}>
                                <p className="text-[10px] uppercase text-slate-400 font-semibold">
                                    {key.replace(/([A-Z])/g, " $1")}
                                </p>
                                <p className="text-sm font-medium text-slate-800 capitalize">
                                    {typeof value === "boolean"
                                        ? value
                                            ? "Yes"
                                            : "No"
                                        : value}
                                </p>
                            </div>
                        ),
                )}
            </div>
        </div>
    );

    return (
        <div className="animate-in fade-in zoom-in-95 duration-500 max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-gold/10 mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary-gold" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 font-outfit">
                    FINAL REVIEW
                </h2>
                <p className="text-slate-500">
                    Verify your deployment details before submission
                </p>
            </div>

            <Card className="border-2 border-slate-100 shadow-xl overflow-hidden">
                <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-2">
                        <ClipboardCheck className="w-5 h-5 text-primary-gold" />
                        <span className="font-bold text-sm tracking-tight">
                            MISSION SPECIFICATIONS
                        </span>
                    </div>
                    <Badge
                        variant="outline"
                        className="text-primary-gold border-primary-gold uppercase"
                    >
                        {formData.serviceType}
                    </Badge>
                </div>

                <CardContent className="pt-6">
                    <ReviewSection
                        title="Client Information"
                        data={{
                            name: formData.fullName,
                            email: formData.email,
                            phone: formData.phone,
                            company: formData.companyName,
                        }}
                    />

                    <ReviewSection
                        title="Service Specifics"
                        data={{
                            property: formData.propertyType,
                            acreage: formData.siteAcreage,
                            shift: formData.shiftRequirement,
                            principals: formData.numberOfPrincipals,
                            threat: formData.threatLevel,
                            protection: formData.protectionLevel,
                            vehicle: formData.vehiclePreference,
                            crew: formData.onBoardCrewCount,
                            infrastructure: formData.infrastructureType,
                        }}
                    />

                    <ReviewSection
                        title="Logistics & Timeline"
                        data={{
                            start: formData.startDate,
                            end: formData.endDate,
                            time: formData.startTime,
                            pickup: formData.location,
                            dropoff: formData.destination,
                        }}
                    />
                </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
                <Button
                    variant="ghost"
                    onClick={() => setStep(3)}
                    disabled={isSubmitting}
                    className="w-1/3 h-12"
                >
                    Edit Details
                </Button>
                <Button
                    onClick={handleFinalSubmit}
                    disabled={isSubmitting}
                    className="flex-1 h-12 bg-slate-900 hover:bg-black text-white font-bold transition-all shadow-lg"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Transmitting...
                        </>
                    ) : (
                        "Confirm & Generate Security Code"
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ReviewDetails;
