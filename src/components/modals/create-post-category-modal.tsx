import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { useCreatePostCategoryModal } from "@/lib/stores/modals";
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
import { useCreatePostCategory } from "@/lib/features/admin/blog/use-create-post-category";

const CreatePostCategory = () => {
    const [open, setOpen] = useCreatePostCategoryModal();

    const { mutate, isPending } = useCreatePostCategory();

    const formSchema = z.object({
        title: z.string().min(10, "Post Category Name"),
        slug: z
            .string()
            .min(10, "Give the category a slug to make it more unique"),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
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
                slug: values.slug,
                title: values.title,
            },
            {
                onSuccess() {
                    toast.success("Post Category Created Successfully");
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
                        <DialogTitle>Add a Post Category</DialogTitle>
                        <DialogDescription>
                            Fill in the details to create a Post Category
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-5">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                {/* Form fields go here */}
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className=" my-2">
                                                <FormLabel>
                                                    Post Category Title
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter Category Title"
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
                                    name="slug"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className=" my-2">
                                                <FormLabel>
                                                    Post Category Slug
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter Category Title"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />

                                <div className="flex items-center justify-end mt-4">
                                    <Button>Create Category</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePostCategory;
