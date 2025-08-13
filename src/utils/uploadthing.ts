import {
    generateUploadButton,
    generateUploadDropzone,
    generateReactHelpers,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// This gives you the `useUploadThing` hook
export const { useUploadThing } = generateReactHelpers<OurFileRouter>();
