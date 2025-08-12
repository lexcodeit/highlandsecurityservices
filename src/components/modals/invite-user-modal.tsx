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
// import { toast } from "sonner";
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
import { useInviteUserModal } from "@/lib/stores/modals";
import { useInviteUser } from "@/lib/features/workspaces/use-invite-user";
import { WorkspaceRoleEnumSchema } from "@/utils/validators";
import CustomSelect from "../ui/custom-select";
import { WORKSPACE_ROLE_OPTIONS } from "@/utils/options";
import { toast } from "sonner";

const InviteUserModal = () => {
    const [open, setOpen] = useInviteUserModal();

    const formSchema = z.object({
        email: z.email({
            error: "Email is required",
        }),
        role: WorkspaceRoleEnumSchema,
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const { mutate, isPending } = useInviteUser();

    const handleClose = () => {
        setOpen(false);
        form.reset();
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Values:", values);
        mutate(
            {
                email: values.email,
                role: values.role,
            },
            {
                onSuccess() {
                    toast.success("Account Invited Successfully");
                    handleClose();
                },
                onError(error) {
                    console.log("ERROR NEXTJS:", error);
                    toast.error(error.message || "Failed to Invite User");
                },
            }
        );
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Invite a user</DialogTitle>
                    <DialogDescription>
                        User will receive an email with their login details and
                        ability to login. Please make sure you send invite to
                        the correct email
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        className="space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
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
                                                placeholder="Enter User's Email"
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
                            name="role"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" mb-6">
                                        <FormLabel>Select Role</FormLabel>

                                        <CustomSelect
                                            options={WORKSPACE_ROLE_OPTIONS}
                                            onChange={value => {
                                                if (value) {
                                                    field.onChange(value.value);
                                                }
                                            }}
                                            value={field.value}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={isPending}>
                                Invite User
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default InviteUserModal;
