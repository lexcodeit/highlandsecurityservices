import { useMutation } from "convex/react";

import { useCallback, useMemo, useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";

type RequestType = {
    postId: Id<"posts">;
};

type Options = {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;

    throwError?: boolean;
};

export const useDeletePost = () => {
    const [error, setError] = useState<Error | null>(null);

    const [status, setStatus] = useState<
        "success" | "error" | "settled" | "pending" | null
    >(null);

    const isPending = useMemo(() => status === "pending", [status]);
    const isError = useMemo(() => status === "error", [status]);
    const isSettled = useMemo(() => status === "settled", [status]);
    const isSuccess = useMemo(() => status === "success", [status]);

    const mutation = useMutation(api.admin.blog.deletePost);

    const mutate = useCallback(
        async (values: RequestType, options?: Options) => {
            try {
                setError(null);
                setStatus("pending");

                const response = await mutation(values);

                if (!response.status) {
                    throw {
                        message: response.error,
                    };
                }

                options?.onSuccess?.();
                return response;
            } catch (error) {
                setStatus("error");
                options?.onError?.(error as Error);
                if (options?.throwError) {
                    throw error;
                }
            } finally {
                setStatus("settled");
                options?.onSettled?.();
            }
        },
        [mutation]
    );

    return { error, isPending, isSuccess, mutate, isError, isSettled };
};
