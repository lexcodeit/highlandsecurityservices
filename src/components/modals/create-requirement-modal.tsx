import React from "react";
import { z } from "zod";
import { Id } from "../../../convex/_generated/dataModel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { useCreateRequirementModal } from "@/lib/stores/modals";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useCreateRequirement } from "@/lib/features/admin/requirements/use-create-requirement";

interface Props {
    jobId: Id<"jobs">;
    jobTitle: string;
}

const CreateRequirementModal = ({ jobId, jobTitle }: Props) => {
    const [open, setOpen] = useCreateRequirementModal();

    const { mutate, isPending } = useCreateRequirement();

    const formSchema = z.object({
        requirement: z.string().min(10, "Enter a valid job requirement"),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            requirement: "",
        },
    });

    const handleClose = () => {
        setOpen(false);
        form.reset();
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Form Data:", values);
        // Handle form submission logic here

        mutate(
            {
                jobId,
                requirement: values.requirement,
            },
            {
                onSuccess() {
                    toast.success("Requirement Created Successfully");
                    handleClose();
                },
                onError(error) {
                    console.log("[ERROR_CREATING_REQUIREMENT:", error);
                    toast.error(
                        error.message || "Failed to Create Requirement"
                    );
                },
            }
        );
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white h-[90%] overflow-y-scroll">
                <div>
                    <DialogHeader>
                        <DialogTitle>Add a Requirement to Job Post</DialogTitle>
                        <DialogDescription>
                            Fill in the details to create a requirement for{" "}
                            <b>{jobTitle}</b>.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-5">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                {/* Form fields go here */}
                                <FormField
                                    control={form.control}
                                    name="requirement"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className=" my-2">
                                                <FormLabel>
                                                    Enter Requirement
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter Requirement"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />

                                <div className="flex items-center justify-end mt-4">
                                    <Button>Create Requirement</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreateRequirementModal;
