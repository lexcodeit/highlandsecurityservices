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

const EventSecurityForm = () => {
    const { updateFields, setStep, formData } = useBookingStore();

    const formSchema = z.object({
        eventType: z.enum(
            ["CONFERENCE", "WEDDING", "AGM", "CONCERT", "PRIVATE_PARTY"],
            "Please select the type of event",
        ),
        eventVenueType: z.enum(
            ["INDOOR", "OUTDOOR", "STADIUM"],
            "Please select a venue type",
        ),
        expectedGuestCount: z
            .string()
            .min(1, "Please provide an estimated guest count"),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventType:
                (formData.eventType as FormValues["eventType"]) || undefined,
            eventVenueType:
                (formData.eventVenueType as FormValues["eventVenueType"]) ||
                undefined,
            expectedGuestCount: formData.expectedGuestCount?.toString() || "",
        },
    });

    const onSubmit = (values: FormValues) => {
        updateFields({
            eventType: values.eventType,
            eventVenueType: values.eventVenueType,
            expectedGuestCount: parseInt(values.expectedGuestCount),
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
                        {/* Event Type Select */}
                        <FormField
                            control={form.control}
                            name="eventType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Category</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select event type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="CONFERENCE">
                                                Corporate Conference
                                            </SelectItem>
                                            <SelectItem value="WEDDING">
                                                Wedding Ceremony
                                            </SelectItem>
                                            <SelectItem value="AGM">
                                                Annual General Meeting (AGM)
                                            </SelectItem>
                                            <SelectItem value="CONCERT">
                                                Musical Concert / Show
                                            </SelectItem>
                                            <SelectItem value="PRIVATE_PARTY">
                                                Private Party / Social
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Venue Type Select */}
                        <FormField
                            control={form.control}
                            name="eventVenueType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Venue Environment</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12 w-full">
                                                <SelectValue placeholder="Select venue type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="INDOOR">
                                                Indoor / Hall
                                            </SelectItem>
                                            <SelectItem value="OUTDOOR">
                                                Outdoor / Open Field
                                            </SelectItem>
                                            <SelectItem value="STADIUM">
                                                Stadium / Large Arena
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Guest Count Input */}
                    <FormField
                        control={form.control}
                        name="expectedGuestCount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Expected Number of Guests</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder="e.g. 500"
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

export default EventSecurityForm;
