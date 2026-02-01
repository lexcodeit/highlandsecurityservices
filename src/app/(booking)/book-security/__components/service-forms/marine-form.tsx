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
import { useBookingStore } from "@/lib/stores/booking-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const MarineSecurityForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const formSchema = z.object({
        vesselName: z
            .string()
            .min(1, "Vessel Name is required for maritime clearance"),
        imoNumber: z.string().min(7, "A valid 7-digit IMO number is required"),
        onBoardCrewCount: z
            .string()
            .min(
                1,
                "Please specify the number of crew members currently on board",
            ),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            vesselName: formData.vesselName || "",
            imoNumber: formData.imoNumber || "",
            onBoardCrewCount: formData.onBoardCrewCount?.toString() || "",
        },
    });

    const onSubmit = (values: FormValues) => {
        updateFields({
            vesselName: values.vesselName,
            imoNumber: values.imoNumber,
            onBoardCrewCount: parseInt(values.onBoardCrewCount),
        });
        setStep(3);
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Vessel Name */}
                        <FormField
                            control={form.control}
                            name="vesselName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Vessel Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="e.g. MT Highland Eagle"
                                            className="h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* IMO Number */}
                        <FormField
                            control={form.control}
                            name="imoNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>IMO Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="7-digit Maritime ID"
                                            className="h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Crew Count */}
                    <FormField
                        control={form.control}
                        name="onBoardCrewCount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>On-board Crew Count</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder="Number of crew members"
                                        className="h-12"
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
                            onClick={() => setStep(1)}
                            className="w-1/3 h-12"
                        >
                            Back
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 h-12 bg-primary-gold hover:bg-black text-white font-bold transition-all duration-300"
                        >
                            Continue to Logistics
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default MarineSecurityForm;
