"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { IoShareOutline } from "react-icons/io5";
import { toast } from "sonner"; // or your toast system
import { useCallback } from "react";

interface ShareMenuProps {
    title: string;
    slug?: string;
    url?: string;
}

export default function ShareMenu({ title, slug, url }: ShareMenuProps) {
    const postUrl =
        url || `${process.env.NEXT_PUBLIC_BLOG_PAGE_LINK}/${slug || ""}`;

    // Helper for centered popup
    const openPopup = useCallback((shareUrl: string) => {
        const width = 600;
        const height = 500;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        window.open(
            shareUrl,
            "_blank",
            `width=${width},height=${height},top=${top},left=${left},noopener,noreferrer`
        );
    }, []);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(postUrl);
        toast.success("Post link copied to clipboard");
    }, [postUrl]);

    const handleLinkedInShare = useCallback(() => {
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            postUrl
        )}`;
        openPopup(shareUrl);
    }, [postUrl, openPopup]);

    const handleFacebookShare = useCallback(() => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            postUrl
        )}`;
        openPopup(shareUrl);
    }, [postUrl, openPopup]);

    const handleInstagramShare = useCallback(() => {
        if (navigator.share) {
            navigator
                .share({
                    title,
                    url: postUrl,
                })
                .catch(() => {});
        } else {
            handleCopy();
            toast.info("Link copied! You can share it on Instagram.");
        }
    }, [title, postUrl, handleCopy]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <IoShareOutline className="size-7 cursor-pointer text-primary-gold hover:opacity-80 transition-all" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleCopy}>
                    Copy Post Link
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLinkedInShare}>
                    Share on LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleFacebookShare}>
                    Share on Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleInstagramShare}>
                    Share on Instagram
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
