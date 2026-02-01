import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useBookingStore } from "@/lib/stores/booking-store";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const TechnicalSecurityForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const formSchema = z.object({
        hardwareRequired: z.boolean(),
        numberOfPoints: z
            .string()
            .min(1, "Please specify the number of cameras or nodes"),
        infrastructureType: z.enum(
            ["CLOUD", "ON_PREMISE", "HYBRID"],
            "Please select an infrastructure type",
        ),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            hardwareRequired: formData.hardwareRequired || false,
            numberOfPoints: formData.numberOfPoints?.toString() || "",
            infrastructureType:
                (formData.infrastructureType as FormValues["infrastructureType"]) ||
                undefined,
        },
    });

    const onSubmit = (values: FormValues) => {
        updateFields({
            hardwareRequired: values.hardwareRequired,
            numberOfPoints: parseInt(values.numberOfPoints),
            infrastructureType: values.infrastructureType,
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
                    {/* Infrastructure Type */}
                    <FormField
                        control={form.control}
                        name="infrastructureType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Infrastructure Environment
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="CLOUD">
                                            Cloud Based (Remote)
                                        </SelectItem>
                                        <SelectItem value="ON_PREMISE">
                                            On-Premise (Local Server)
                                        </SelectItem>
                                        <SelectItem value="HYBRID">
                                            Hybrid Solution
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Number of Points */}
                    <FormField
                        control={form.control}
                        name="numberOfPoints"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Number of Points (Cameras / Nodes)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder="e.g. 16"
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Estimated number of installation points or
                                    network endpoints.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Hardware Required Switch */}
                    <FormField
                        control={form.control}
                        name="hardwareRequired"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
                                <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                        Hardware Procurement
                                    </FormLabel>
                                    <FormDescription>
                                        Do you require us to provide the
                                        equipment?
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
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

export default TechnicalSecurityForm;
