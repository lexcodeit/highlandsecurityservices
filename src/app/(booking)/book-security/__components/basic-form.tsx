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
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { useBookingStore } from "@/lib/stores/booking-store";
import { ServiceTypeEnum } from "@/utils/enums";

const formSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.email("Please enter a valid email address"),
    phone: z.string().min(10, "Please input a valid phone number"),
    companyName: z.string().optional(),
    serviceType: z.string().min(1, "Please select a service"),
});

const BasicForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: formData.fullName || "",
            companyName: formData.companyName || "",
            email: formData.email || "",
            phone: formData.phone || "",
            serviceType: formData.serviceType || "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Save to Zustand
        updateFields({
            fullName: values.fullName,
            companyName: values.companyName,
            email: values.email,
            phone: values.phone,
            serviceType: values.serviceType as ServiceTypeEnum,
        });
        // Move to the next step
        setStep(2);
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 font-outfit">
                    Let's get to know you
                </h2>
                <p className="text-slate-500 mt-2">
                    Provide your basic details to start your security request.
                </p>
            </div>

            <Form {...form}>
                <form
                    className="space-y-5"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Company Name (Optional)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="HSSL Ltd"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="+234..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Security Service</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="What service do you require?" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="BODYGUARD">
                                            Bodyguard & VIP Protection
                                        </SelectItem>
                                        <SelectItem value="CORPORATE">
                                            Corporate Security Solutions
                                        </SelectItem>
                                        <SelectItem value="ESCORT">
                                            VIP Escort & Transit
                                        </SelectItem>
                                        <SelectItem value="CYBER">
                                            Cyber Security & Data Defense
                                        </SelectItem>
                                        <SelectItem value="EVENT">
                                            Event Security Management
                                        </SelectItem>
                                        <SelectItem value="RESIDENTIAL">
                                            Residential & Estate Security
                                        </SelectItem>
                                        <SelectItem value="SPECIALIZED">
                                            Specialized Guard Services
                                        </SelectItem>
                                        <SelectItem value="SURVEILLANCE">
                                            Advanced Surveillance
                                        </SelectItem>
                                        <SelectItem value="CCTV">
                                            CCTV & Remote Monitoring
                                        </SelectItem>
                                        <SelectItem value="BULLION">
                                            Bullion Van Operations
                                        </SelectItem>
                                        <SelectItem value="MARINE">
                                            Marine Security Operations
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="pt-6">
                        <Button
                            type="submit"
                            className="w-full h-12 bg-primary-gold hover:bg-black text-white font-bold transition-all duration-300"
                        >
                            Save and Continue
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default BasicForm;
