import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/ui/custom-select";
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
import { GenderTypeEnum, SourceInfo } from "@/utils/enums";
import {
    GENDER_OPTIONS,
    SOURCE_OF_INFO_OPTIONS,
    YEARS_OF_EXPERIENCE_OPTIONS,
} from "@/utils/options";
import { GenderEnumSchema, SourceInfoEnumSchema } from "@/utils/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoAttach } from "react-icons/io5";
import z from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { LuLoaderCircle } from "react-icons/lu";
import { RiAttachment2 } from "react-icons/ri";
import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { useCreateApplication } from "@/lib/features/users/use-create-application";
import { Id } from "../../../../../../convex/_generated/dataModel";
import SuccessModal from "@/components/modals/success-modal";
import { useSuccessModal } from "@/lib/stores/modals";

interface Props {
    roleId: Id<"jobs">;
}

const ApplicationForm = ({ roleId }: Props) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [fileLocation, setFileLocation] = useState<string>();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [, setOpen] = useSuccessModal();

    const { mutate, isPending } = useCreateApplication();

    // Change "imageUploader" to your actual endpoint name
    const { startUpload } = useUploadThing("docsUploader", {
        onUploadBegin: () => {
            setUploading(true);
        },
        onClientUploadComplete: res => {
            console.log("Files: ", res);
            setFileLocation(res[0].ufsUrl);
            setUploading(false);
            toast.success("File Uploaded");
        },
        onUploadError: error => {
            toast.error(`ERROR! ${error.message}`);
        },
        onUploadProgress(p) {
            console.log("Upload progress:", p);
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            startUpload([file]); // Upload only when confirmed
        }
    };

    const formSchema = z.object({
        firstName: z
            .string({
                error: "First Name is required",
            })
            .min(3, "Enter a valid first name"),
        lastName: z
            .string({
                error: "Last Name is required",
            })
            .min(3, "Enter a valid last name"),
        phone: z
            .string({
                error: "Phone Number is required",
            })
            .min(3, "Use a valid phone number"),
        email: z.email({
            error: "Please use a valid email",
        }),
        location: z
            .string({
                error: "Location is required",
            })
            .min(2, "Enter a valid location"),
        experienceLevel: z.string({
            error: "Experience Level is required",
        }),
        gender: GenderEnumSchema,
        sourceOfInfo: SourceInfoEnumSchema,
        q1Answer: z.string({
            error: "An answer is required",
        }),
        q2Answer: z.string({
            error: "An answer is required",
        }),
        q3Answer: z.string({
            error: "An answer is required",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            experienceLevel: "",
            q1Answer: "",
            q2Answer: "",
            q3Answer: "",
            location: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Values:", values);

        if (!fileLocation) {
            return toast.error(
                "Please upload a file before submitting your application"
            );
        }

        mutate(
            {
                answers: {
                    q1: values.q1Answer,
                    q2: values.q2Answer,
                    q3: values.q3Answer,
                },
                email: values.email,
                experienceLevel: values.experienceLevel,
                firstName: values.firstName,
                gender: values.gender,
                lastName: values.lastName,
                location: values.location,
                phone: values.phone,
                resumeUrl: fileLocation,
                roleId,
                sourceOfInfo: values.sourceOfInfo,
            },
            {
                onSuccess: () => {
                    toast.success("Application Submitted Successfully");
                    form.reset();
                    setSelectedFile(null);
                    setFileLocation(undefined);
                    setOpen(true);
                },
                onError(error) {
                    console.log("Submission Error:", error);
                    toast.error(error.message);
                },
            }
        );
    };

    console.log("File Location:", fileLocation);

    return (
        <div className="max-w-[50%] border border-border-color rounded-md p-5 my-10">
            <SuccessModal message="Your application for the position has been successfully received. Our team will review it and get back to you soon." />
            <div>
                <h2 className="text-header-text mb-5 font-semibold">
                    Apply for this Job
                </h2>
            </div>
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => {
                            return (
                                <FormItem className=" my-5">
                                    <FormLabel>First Name</FormLabel>
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
                        name="lastName"
                        render={({ field }) => {
                            return (
                                <FormItem className=" my-5">
                                    <FormLabel>Last Name</FormLabel>
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
                        name="location"
                        render={({ field }) => {
                            return (
                                <FormItem className=" my-5">
                                    <FormLabel>Current Location</FormLabel>
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
                        name="gender"
                        render={() => {
                            return (
                                <CustomSelect
                                    options={GENDER_OPTIONS}
                                    value={form.watch("gender")}
                                    onChange={v => {
                                        if (!v) return;
                                        form.setValue(
                                            "gender",
                                            v?.value as GenderTypeEnum
                                        );
                                    }}
                                    label="Gender"
                                />
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="experienceLevel"
                        render={() => {
                            return (
                                <CustomSelect
                                    options={YEARS_OF_EXPERIENCE_OPTIONS}
                                    value={form.watch("experienceLevel")}
                                    onChange={v => {
                                        if (!v) return;
                                        form.setValue(
                                            "experienceLevel",
                                            v?.value
                                        );
                                    }}
                                    label="Years of Security Experience"
                                />
                            );
                        }}
                    />

                    <div>
                        <h3 className="text-header-text">Resume</h3>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            ref={fileInputRef}
                        />

                        <div
                            className="border border-border-color p-5 rounded-xl flex items-center justify-center flex-col"
                            style={{
                                borderStyle: "dashed",
                            }}
                        >
                            {selectedFile ? (
                                <div className="bg-off-white p-2 flex items-center gap-x-3 w-full mb-3 rounded-md px-4">
                                    <div>
                                        {uploading ? (
                                            <LuLoaderCircle className="animate-spin" />
                                        ) : (
                                            <RiAttachment2 />
                                        )}
                                    </div>
                                    <h3 className="flex-1 text-header-text">
                                        {selectedFile?.name || "File Name.ext"}
                                    </h3>
                                    <Trash2Icon className="text-error size-4" />
                                </div>
                            ) : null}
                            <div
                                className="px-5 py-2 rounded-full border-2 border-header-text flex items-center justify-center gap-x-1 transition-all hover:border-primary-gold hover:text-primary-gold cursor-pointer group"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <IoAttach className="size-6" />
                                <p className="font-semibold text-header-text group-hover:text-primary-gold">
                                    {!selectedFile
                                        ? "Upload File"
                                        : "Replace File"}
                                </p>
                            </div>
                            <p className="text-supporting-text text-xs mt-1">
                                PDF (4MB)
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-header-text mb-1 font-semibold">
                                Why Highland Security Services?
                            </h3>
                            <p className="text-supporting-text text-sm">
                                This is a highly competitive role. Please take
                                some time to answer the following questions to
                                help us determine if you’re a strong fit. We’re
                                looking for no more than a few sentences for
                                each question.
                            </p>
                        </div>

                        <FormField
                            control={form.control}
                            name="q1Answer"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>
                                            Why do you believe Highland Security
                                            Services Limited is well-positioned
                                            to deliver top security solutions in
                                            today’s environment?
                                        </FormLabel>
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
                        <FormField
                            control={form.control}
                            name="q2Answer"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>
                                            What challenges do you think you may
                                            encounter working in the security
                                            industry, and how would you overcome
                                            them?
                                        </FormLabel>
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
                        <FormField
                            control={form.control}
                            name="q3Answer"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>
                                            What makes you a reliable and
                                            trustworthy candidate for this role?
                                        </FormLabel>
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
                    </div>
                    <FormField
                        control={form.control}
                        name="sourceOfInfo"
                        render={() => {
                            return (
                                <CustomSelect
                                    options={SOURCE_OF_INFO_OPTIONS}
                                    value={form.watch("sourceOfInfo")}
                                    onChange={v => {
                                        if (!v) return;
                                        form.setValue(
                                            "sourceOfInfo",
                                            v?.value as SourceInfo
                                        );
                                    }}
                                    label="How did you hear about us?"
                                />
                            );
                        }}
                    />

                    <Button
                        disabled={isPending}
                        className="w-full rounded-full"
                    >
                        Submit Application
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ApplicationForm;
