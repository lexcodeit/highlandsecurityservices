import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useCompleteAccountModal } from "@/lib/stores/modals";
import CustomSelect from "@/components/ui/custom-select";
import { GENDER_OPTIONS } from "@/utils/options";
import { GenderEnumSchema } from "@/utils/validators";
import { useCreateProfile } from "@/lib/features/profile/use-create-profile";

const CompleteAccountModal = () => {
    const [open, setOpen] = useCompleteAccountModal();

    const formSchema = z.object({
        first_name: z.string().min(3),
        last_name: z.string().min(3),
        phoneNumber: z.string().min(3),
        gender: GenderEnumSchema,
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            phoneNumber: "",
        },
    });

    const { mutate, isPending } = useCreateProfile();

    const handleClose = () => {
        setOpen(false);
        form.reset();
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Values:", values);

        mutate(
            {
                firstName: values.first_name,
                lastName: values.last_name,
                gender: values.gender,
                phoneNumber: values.phoneNumber,
            },
            {
                onSuccess() {
                    toast.success("Account Updated");
                    handleClose();
                },
                onError(error) {
                    console.log("ERROR:", error);
                    toast.error(error.message || "Failed to Update Account");
                },
            }
        );
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Complete Account Setup</DialogTitle>
                    <DialogDescription>
                        You have to complete your account creation before you
                        can carry out actions on the dashboard.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        className="space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter First Name"
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
                            name="last_name"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter Last Name"
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
                            name="phoneNumber"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter Phone Number"
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
                            name="gender"
                            render={({}) => {
                                return (
                                    <CustomSelect
                                        options={GENDER_OPTIONS}
                                        value={form.watch("gender")}
                                        onChange={v => {
                                            if (!v) return;
                                            form.setValue(
                                                "gender",
                                                v?.value as z.infer<
                                                    typeof GenderEnumSchema
                                                >
                                            );
                                        }}
                                        label="Select a Gender"
                                    />
                                );
                            }}
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={isPending}>
                                Complete Account
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CompleteAccountModal;
