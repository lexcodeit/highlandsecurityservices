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
import { useSendMessage } from "@/lib/features/users/use-send-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const ContactForm = () => {
    const formSchema = z.object({
        name: z
            .string({
                error: "Name is required",
            })
            .min(3, "Enter a valid name"),
        phone: z
            .string({
                error: "Phone Number is required",
            })
            .min(3, "Use a valid phone number"),
        email: z.email({
            error: "Please use a valid email",
        }),
        message: z
            .string({
                error: "Message is required",
            })
            .min(5, "Min. of 40 Chars")
            .max(300, "Max. of 300 Chars"),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    const { isPending, mutate } = useSendMessage();

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Values:", values);

        mutate(
            {
                email: values.email,
                message: values.message,
                name: values.name,
                phone: values.phone,
            },
            {
                onSuccess() {
                    toast.success("Message submitted successfully!");
                    form.reset();
                },
                onError(error) {
                    toast.error(
                        error.message ||
                            "An error occurred while submitting your message."
                    );
                    console.log("CONTACT_ERROR:", error);
                },
            }
        );
    };
    return (
        <div className="bg-white rounded-xl lg:px-4 px-8 lg:p-6 py-12 border border-primary-gold ">
            <div>
                <h2 className="text-header-text mb-5 font-bold font-outfit text-center text-xl lg:text-3xl">
                    Send Us a Message
                </h2>
                <p className="text-supporting-text text-center">
                    Fill out the form below, our team will get back to you soon
                </p>
            </div>
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                            return (
                                <FormItem className=" my-5">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Type here..."
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                            return (
                                <FormItem className=" my-5">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Type here..."
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => {
                            return (
                                <FormItem className=" my-5">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Type here..."
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => {
                            return (
                                <FormItem className=" my-5">
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder="Type here..."
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />

                    <Button
                        disabled={isPending}
                        className="w-full rounded-full"
                    >
                        Send your message
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ContactForm;
