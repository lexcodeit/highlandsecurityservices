"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useBookingStore } from "@/lib/stores/booking-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const LogisticsForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const formSchema = z.object({
        location: z
            .string()
            .min(5, "Please provide a detailed pickup or site address"),
        destination: z.string().optional(),
        startDate: z.string().min(1, "Start date is required"),
        endDate: z.string().optional(),
        startTime: z.string().optional(),
        notes: z
            .string()
            .max(500, "Notes must be under 500 characters")
            .optional(),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: formData.location || "",
            destination: formData.destination || "",
            startDate: formData.startDate || "",
            endDate: formData.endDate || "",
            startTime: formData.startTime || "",
            notes: formData.notes || "",
        },
    });

    const onSubmit = (values: FormValues) => {
        updateFields(values);
        setStep(4); // Move to Final Review
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 font-outfit uppercase">
                    Deployment Logistics
                </h2>
                <p className="text-slate-500 mt-2">
                    Where and when do you need our personnel?
                </p>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {/* Locations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Deployment Address / Pickup Point
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Full address or site location"
                                            className="h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="destination"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Destination (If Transit)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Final drop-off point"
                                            className="h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Dates & Time Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="date"
                                            className="h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>End Date (Optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="date"
                                            className="h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="startTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Time</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="time"
                                            className="h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Additional Notes */}
                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Specific Instructions / Notes
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="Any special requirements we should know about?"
                                        className="resize-none h-32"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-10 border-t">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(2)}
                            className="w-1/3 h-12"
                        >
                            Back
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 h-12 bg-primary-gold hover:bg-black text-white font-bold transition-all duration-300"
                        >
                            Review Request
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default LogisticsForm;
