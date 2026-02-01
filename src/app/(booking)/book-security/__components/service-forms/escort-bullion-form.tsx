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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useBookingStore } from "@/lib/stores/booking-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const TransitEscortForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const formSchema = z.object({
        vehiclePreference: z.enum(
            ["ARMORED_SUV", "EXECUTIVE_SEDAN", "TACTICAL_HILUX", "BULLION_VAN"],
            "Please select a preferred vehicle",
        ),
        numberOfEscortVehicles: z
            .string()
            .min(1, "Please specify number of escort vehicles"),
        assetValueCategory: z.enum(
            ["LOW_VALUE", "MID_VALUE", "HIGH_VALUE", "ULTRA_HIGH_VALUE"],
            "Please select a risk/value category",
        ),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            vehiclePreference:
                (formData.vehiclePreference as FormValues["vehiclePreference"]) ||
                undefined,
            numberOfEscortVehicles:
                formData.numberOfEscortVehicles?.toString() || "1",
            assetValueCategory:
                (formData.assetValueCategory as FormValues["assetValueCategory"]) ||
                undefined,
        },
    });

    const onSubmit = (values: FormValues) => {
        updateFields({
            vehiclePreference: values.vehiclePreference,
            numberOfEscortVehicles: parseInt(values.numberOfEscortVehicles),
            assetValueCategory: values.assetValueCategory,
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
                        {/* Vehicle Preference */}
                        <FormField
                            control={form.control}
                            name="vehiclePreference"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Vehicle Preference</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select vehicle" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="ARMORED_SUV">
                                                Armored SUV (B6/B7)
                                            </SelectItem>
                                            <SelectItem value="EXECUTIVE_SEDAN">
                                                Executive Sedan
                                            </SelectItem>
                                            <SelectItem value="TACTICAL_HILUX">
                                                Tactical Hilux (Escort)
                                            </SelectItem>
                                            <SelectItem value="BULLION_VAN">
                                                Armored Bullion Van
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Asset Value Category */}
                        <FormField
                            control={form.control}
                            name="assetValueCategory"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Risk/Asset Value Tier</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select risk level" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="LOW_VALUE">
                                                Tier 1 (Routine Movement)
                                            </SelectItem>
                                            <SelectItem value="MID_VALUE">
                                                Tier 2 (Sensitive/Mid-Value)
                                            </SelectItem>
                                            <SelectItem value="HIGH_VALUE">
                                                Tier 3 (High-Value Asset)
                                            </SelectItem>
                                            <SelectItem value="ULTRA_HIGH_VALUE">
                                                Tier 4 (Ultra High-Value)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Number of Escort Vehicles */}
                    <FormField
                        control={form.control}
                        name="numberOfEscortVehicles"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Required Escort Vehicles</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder="e.g. 2"
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

export default TransitEscortForm;
