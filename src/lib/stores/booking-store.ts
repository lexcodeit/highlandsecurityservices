import { BookingFormData } from "@/utils/types";
import { create } from "zustand";

interface BookingStore {
    step: number;
    formData: BookingFormData; // You can type this strictly based on your Convex schema
    setStep: (step: number) => void;
    updateFields: (fields: BookingFormData) => void;
    reset: () => void;
}

export const useBookingStore = create<BookingStore>(set => ({
    step: 1,
    formData: {},
    setStep: step => set({ step }),
    updateFields: fields =>
        set(state => ({
            formData: { ...state.formData, ...fields },
        })),
    reset: () => set({ step: 1, formData: {} }),
}));
