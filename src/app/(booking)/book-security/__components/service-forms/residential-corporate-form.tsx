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
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const ResidentialCorporateForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const formSchema = z.object({
        propertyType: z.enum(
            ["HOME", "ESTATE", "FACTORY", "WAREHOUSE"],
            "Please select from the option of property type",
        ),
        siteAcreage: z.string().min(1, "Please input the area size or acreage"),
        shiftRequirement: z.enum(
            ["24/7", "Day Only", "Night Only"],
            "Please select a shift requirement",
        ),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            propertyType:
                (formData.propertyType as FormValues["propertyType"]) ||
                undefined,
            siteAcreage: formData.siteAcreage || "",
            shiftRequirement:
                (formData.shiftRequirement as FormValues["shiftRequirement"]) ||
                undefined,
        },
    });

    const onSubmit = (values: FormValues) => {
        // Strictly update the Zustand store with these specific fields
        updateFields({
            propertyType: values.propertyType,
            siteAcreage: values.siteAcreage,
            shiftRequirement: values.shiftRequirement,
        });
        setStep(3); // Move to Logistics
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Property Type Select */}
                        <FormField
                            control={form.control}
                            name="propertyType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Property Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select property type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="HOME">
                                                Private Residence
                                            </SelectItem>
                                            <SelectItem value="ESTATE">
                                                Gated Estate / Community
                                            </SelectItem>
                                            <SelectItem value="FACTORY">
                                                Industrial Factory
                                            </SelectItem>
                                            <SelectItem value="WAREHOUSE">
                                                Warehouse / Storage Facility
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Shift Requirement Select */}
                        <FormField
                            control={form.control}
                            name="shiftRequirement"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Shift Requirement</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select shift pattern" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="24/7">
                                                Full Time (24/7)
                                            </SelectItem>
                                            <SelectItem value="Day Only">
                                                Day Shift Only
                                            </SelectItem>
                                            <SelectItem value="Night Only">
                                                Night Shift Only
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Site Acreage Input */}
                    <FormField
                        control={form.control}
                        name="siteAcreage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Approximate Site Size / Acreage
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="e.g. 2 Acres, 500sqm, 3 Blocks"
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

export default ResidentialCorporateForm;
