"use client";
import DashboardTitle from "@/components/screens/admin/dashboard-title";
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
import { useCreateJob } from "@/lib/features/admin/jobs/use-create-job";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const CreateJobPage = () => {
    const { mutate, isPending } = useCreateJob();

    const router = useRouter();

    const formSchema = z.object({
        title: z.string().min(3, { message: "Job title is required" }),
        description: z
            .string()
            .min(20, { message: "Job description is required" }),
        slug: z.string().min(3, { message: "Job slug is required" }),
        location: z.string().min(3, { message: "Job location is required" }),
        label: z.string().min(3, { message: "Job label is required" }),
        requirements: z
            .string()
            .min(1, { message: "Please input a valid requirement" }),
    });

    type FormSchemaType = z.infer<typeof formSchema>;

    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            slug: "",
            location: "",
            requirements: "",
            label: "",
        },
    });

    const onSubmit = (values: FormSchemaType) => {
        console.log("Form values:", values);

        mutate(
            {
                description: values.description,
                label: values.label,
                location: values.location,
                slug: values.slug,
                title: values.title,
                requirement: values.requirements,
            },
            {
                onSuccess: jobId => {
                    toast.success("Job created successfully");
                    router.push(`/control-admin/jobs/${jobId}`);
                },
                onError(error) {
                    console.log("Error Creating job:", error);
                    toast.error(error.message);
                },
            }
        );
    };

    return (
        <div className="p-4 flex flex-col overflow-hidden h-full">
            <DashboardTitle title="Post a Job" />
            <div className="p-3 bg-white flex-1 rounded-sm overflow-y-scroll">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex gap-x-4 my-5">
                            <FormField
                                control={form.control}
                                name={`title`}
                                render={({ field }) => (
                                    <FormItem className=" flex-1">
                                        <FormLabel>Enter Job Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter job role title"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`slug`}
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>
                                            A special identifier for the job
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Do not use spaces for this entry"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-4 my-5">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => {
                                    return (
                                        <FormItem className=" flex-1">
                                            <FormLabel>
                                                Job Description
                                            </FormLabel>
                                            <div className="flex items-center space-x-2">
                                                <FormControl>
                                                    <Textarea
                                                        {...field}
                                                        placeholder="Enter Job Description"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name={`label`}
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Enter Job Label</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter a job label"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-x-4 my-5">
                            <FormField
                                control={form.control}
                                name={`location`}
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Job Location</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter a job location"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name={`requirements`}
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>
                                            Enter a Job Requirement
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter only one job Requirement"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="ml-4">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateJobPage;
