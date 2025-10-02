"use client";
import TextEditor from "@/components/ui/text-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { JSONContent } from "@tiptap/react";
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
import { useCreatePost } from "@/lib/features/admin/blog/use-create-post";
import { Textarea } from "@/components/ui/textarea";
import { useUploadThing } from "@/utils/uploadthing";
import { LuLoaderCircle } from "react-icons/lu";
import { ImageIcon, Trash2Icon, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { useGetPostsCategories } from "@/lib/features/admin/blog/use-get-posts-categories";
import LoaderComponent from "@/components/global/loader-component";
import { Button } from "@/components/ui/button";
import { Id } from "../../../../../convex/_generated/dataModel";
import DashboardTitle from "@/components/screens/admin/dashboard-title";
import { useCreatePostCategoryModal } from "@/lib/stores/modals";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
const CreatePostPage = () => {
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [bodyJson, setBodyJson] = useState<JSONContent>();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [, setFileLocation] = useState<string>();
    const [, setOpenModal] = useCreatePostCategoryModal();
    const [preview, setPreview] = useState<string | null>(null);

    const router = useRouter();

    const { mutate: createPost, isPending } = useCreatePost();

    const { data: postCategories, isLoading } = useGetPostsCategories();

    const formSchema = z.object({
        title: z.string({
            error: "Title of the Post is required",
        }),
        body: z.string({
            error: "Body of post is required",
        }),
        categoryId: z.string({
            error: "Please select a post category",
        }),
        shortBody: z.string({
            error: "A short body is required for excerpts",
        }),
        slug: z.string({
            error: "A post slug is required",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            title: "",
            body: "",
        },
        resolver: zodResolver(formSchema),
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    // Change "imageUploader" to your actual endpoint name
    const { startUpload } = useUploadThing("postImageUploader", {
        onUploadBegin: () => {
            setUploading(true);
        },
        onClientUploadComplete: res => {
            setFileLocation(res[0].ufsUrl);
            setUploading(false);
            toast.success("Post Cover Image Uploaded");
        },
        onUploadError: error => {
            toast.error(`ERROR! ${error.message}`);
        },
        onUploadProgress(p) {
            console.log("Upload progress:", p);
        },
    });

    const bodyHtml = form.watch("body");

    const handleBlogContent = (html: string, json: JSONContent) => {
        console.log("Html:", html);
        console.log("json:", json);
        form.setValue("body", html, {
            shouldValidate: true,
        });
        setBodyJson(json);
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Values:", values);

        if (!bodyJson) {
            return toast.error(
                "Malformated post body. Please repair post body before uploading."
            );
        }

        if (!selectedFile) {
            return toast.error(
                "Please add a cover image before saving the post."
            );
        }

        startUpload([selectedFile]).then(value => {
            console.log("now create post:", value);
            if (!value) {
                return toast.error("Failed to upload cover image.");
            }
            createPost(
                {
                    bodyHtml: values.body,
                    bodyJson,
                    categoryId: [values.categoryId as Id<"postCategories">],
                    coverImage: value[0].ufsUrl,
                    shortBody: values.shortBody,
                    slug: values.slug.toLowerCase(),
                    title: values.title,
                },
                {
                    onSuccess(data) {
                        toast.success("Post created successfully");
                        router.push(`/control-admin/posts/${data}`);
                    },
                    onError(error) {
                        toast.error(error.message || "Failed to create post.");
                    },
                }
            );
        });
    };

    if (isLoading) {
        return <LoaderComponent />;
    }

    return (
        <div className="p-4 flex flex-col overflow-hidden h-full">
            <DashboardTitle title="Create a Blog Post" />
            <div className="p-3 bg-white flex-1 rounded-sm overflow-y-scroll">
                <Form {...form}>
                    <form
                        className="space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                                ref={fileInputRef}
                            />
                            <FormLabel>Cover Image</FormLabel>
                            <div
                                className="border border-border-color min-h-[150px] rounded-xl flex items-center justify-center mt-1 p-5 gap-x-4"
                                style={{
                                    borderStyle: "dashed",
                                }}
                            >
                                {preview ? (
                                    <div className=" relative h-[300px]  flex-1 rounded-md overflow-hidden">
                                        <Image
                                            src={preview}
                                            alt="Cover Image Preview"
                                            fill
                                            className="object-contain rounded-md"
                                        />
                                    </div>
                                ) : null}
                                <div className="flex-1">
                                    <div>
                                        {selectedFile ? (
                                            <div className="bg-off-white p-2 flex items-center gap-x-3 w-full mb-3 rounded-md px-4">
                                                <div>
                                                    {uploading ? (
                                                        <LuLoaderCircle className="animate-spin" />
                                                    ) : (
                                                        <ImageIcon />
                                                    )}
                                                </div>
                                                <h3 className="flex-1 text-header-text">
                                                    {selectedFile?.name ||
                                                        "File Name.ext"}
                                                </h3>
                                                <Trash2Icon className="text-error size-4" />
                                            </div>
                                        ) : null}
                                        <div
                                            className="px-5 py-2 rounded-full border-2 border-header-text flex items-center justify-center gap-x-1 transition-all hover:border-primary-gold hover:text-primary-gold cursor-pointer group"
                                            onClick={() =>
                                                fileInputRef.current?.click()
                                            }
                                        >
                                            <ImageIcon className="size-6" />
                                            <p className="font-semibold text-header-text group-hover:text-primary-gold">
                                                {!selectedFile
                                                    ? "Upload Post Cover Image"
                                                    : "Replace Post Cover Image"}
                                            </p>
                                        </div>
                                        <p className="text-supporting-text text-xs mt-1 text-center">
                                            JPEG (4MB)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>Post Title</FormLabel>
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
                            name="slug"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>Post Slug</FormLabel>
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
                            name="shortBody"
                            render={({ field }) => {
                                return (
                                    <FormItem className=" my-5">
                                        <FormLabel>Short Body</FormLabel>
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
                            name="categoryId"
                            render={() => {
                                if (!postCategories) {
                                    return (
                                        <div className="flex items-center justify-center gap-x-2 p-4">
                                            <TriangleAlert />
                                            <p className="text-error text-sm">
                                                Failed to get post categories.
                                                Please reload to try again.
                                            </p>
                                        </div>
                                    );
                                }

                                if (!postCategories.length) {
                                    return (
                                        <div className="flex flex-col items-center gap-y-2 my-5">
                                            <p className="text-supporting-text text-sm">
                                                No post categories at the
                                                moment.
                                            </p>
                                            <Button
                                                onClick={() =>
                                                    setOpenModal(true)
                                                }
                                            >
                                                Add Post Category
                                            </Button>
                                        </div>
                                    );
                                }

                                return (
                                    <div className="my-5">
                                        <CustomSelect
                                            options={postCategories.map(
                                                cat => ({
                                                    label: cat.title,
                                                    value: cat._id,
                                                })
                                            )}
                                            value={form.watch("categoryId")}
                                            onChange={v => {
                                                if (!v) return;
                                                form.setValue(
                                                    "categoryId",
                                                    v?.value as Id<"postCategories">
                                                );
                                            }}
                                            label="Select a Post Category"
                                        />
                                        <Link
                                            href={
                                                "/control-admin/post-categories"
                                            }
                                            className="text-primary-gold text-sm block text-right font-semibold"
                                        >
                                            Manage Post Categories
                                        </Link>
                                    </div>
                                );
                            }}
                        />

                        <div>
                            <FormLabel className="mb-1">Post Content</FormLabel>
                            <TextEditor
                                content={bodyHtml}
                                onChange={handleBlogContent}
                            />
                        </div>

                        <div>
                            <Button disabled={isPending}>Save Post</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreatePostPage;
