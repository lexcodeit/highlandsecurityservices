import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

interface Props {
    postSlug: string;
}

export const useGetPostContentBySlug = ({ postSlug }: Props) => {
    const data = useQuery(api.noAuth.blog.getPostContent, {
        postSlug,
    });

    const isLoading = data === undefined;

    return { data, isLoading };
};
