"use client";
import BasicForm from "./__components/basic-form";
import FormTimeline from "./__components/form-timeline";
import Image from "next/image";
import { useBookingStore } from "@/lib/stores/booking-store";
import ServiceForm from "./__components/service-form";
import LogisticsForm from "./__components/logistics-form";
import ReviewDetails from "./__components/review-details";

const BookSecurity = () => {
    const { step } = useBookingStore();

    return (
        <div className="h-screen overflow-hidden flex flex-col bg-[#F9FAFB]">
            {/* Header stays consistent */}
            <header className="p-6 flex items-center gap-4 border-b bg-white">
                <Image
                    src="/assets/images/bg-logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                />
                <h3 className="font-outfit font-bold text-slate-800">
                    Highland Security Services Limited
                </h3>
            </header>

            <main className="flex-1 grid lg:grid-cols-[350px_1fr] overflow-hidden">
                {/* Left Side: Timeline & Progress */}
                <aside className="border-r bg-white p-10">
                    <FormTimeline />
                </aside>

                {/* Right Side: Scrollable Form Area */}
                <section className="overflow-y-auto p-12 bg-slate-50/50">
                    <div className="max-w-2xl mx-auto">
                        {step === 1 ? (
                            <BasicForm />
                        ) : step === 2 ? (
                            <ServiceForm />
                        ) : step === 3 ? (
                            <LogisticsForm />
                        ) : step === 4 ? (
                            <ReviewDetails />
                        ) : null}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BookSecurity;
