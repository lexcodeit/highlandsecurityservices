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

const BodyguardSpecializedForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const formSchema = z.object({
        protectionLevel: z.enum(
            ["ARMED", "UNARMED", "EXECUTIVE"],
            "Please select a protection level",
        ),
        numberOfPrincipals: z
            .string()
            .min(1, "At least one person must be protected"),
        threatLevel: z.enum(
            ["LOW", "MEDIUM", "HIGH"],
            "Please select a threat level",
        ),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            protectionLevel:
                (formData.protectionLevel as FormValues["protectionLevel"]) ||
                undefined,
            numberOfPrincipals: formData.numberOfPrincipals?.toString() || "1",
            threatLevel:
                (formData.threatLevel as FormValues["threatLevel"]) ||
                undefined,
        },
    });

    const onSubmit = (values: FormValues) => {
        updateFields({
            protectionLevel: values.protectionLevel,
            numberOfPrincipals: parseInt(values.numberOfPrincipals),
            threatLevel: values.threatLevel,
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
                        {/* Protection Level Select */}
                        <FormField
                            control={form.control}
                            name="protectionLevel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Protection Level</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="ARMED">
                                                Armed Tactical Protection
                                            </SelectItem>
                                            <SelectItem value="UNARMED">
                                                Unarmed Professional Guard
                                            </SelectItem>
                                            <SelectItem value="EXECUTIVE">
                                                Executive / Discreet Protection
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Threat Level Select */}
                        <FormField
                            control={form.control}
                            name="threatLevel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Current Threat Level</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select threat level" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="LOW">
                                                Low Risk (Routine)
                                            </SelectItem>
                                            <SelectItem value="MEDIUM">
                                                Medium Risk (Specific Concerns)
                                            </SelectItem>
                                            <SelectItem value="HIGH">
                                                High Risk (Immediate Threats)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Number of Principals Input */}
                    <FormField
                        control={form.control}
                        name="numberOfPrincipals"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Number of Persons to Protect (Principals)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder="e.g. 1"
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

export default BodyguardSpecializedForm;
