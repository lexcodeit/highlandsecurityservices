import { useCallback, useMemo, useState } from "react";
import { useMutation } from "convex/react";
import { ApiResponseType } from "@/utils/types";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";

type RequestType = {
    title: string;
    slug: string;
    label: string;
    description: string;
    location: string;
    requirement: string;
};

type ResultType = Id<"jobs">;
type ResponseType = ApiResponseType<ResultType> | null;

type Options = {
    onSuccess?: (data: string) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;

    throwError?: boolean;
};

export const useCreateJob = () => {
    const [data, setData] = useState<ResponseType>(null);
    const [error, setError] = useState<Error | null>(null);

    const [status, setStatus] = useState<
        "success" | "error" | "settled" | "pending" | null
    >(null);

    const isPending = useMemo(() => status === "pending", [status]);
    const isError = useMemo(() => status === "error", [status]);
    const isSettled = useMemo(() => status === "settled", [status]);
    const isSuccess = useMemo(() => status === "success", [status]);

    const mutation = useMutation(api.admin.jobs.createJob);

    const mutate = useCallback(
        async (values: RequestType, options?: Options) => {
            try {
                setData(null);
                setError(null);
                setStatus("pending");

                const response = await mutation(values);
                if (!response.status) {
                    throw {
                        message: response.error,
                    };
                }
                if (!response.data) {
                    throw {
                        message: "A fatal error occurred",
                    };
                }
                options?.onSuccess?.(response.data);
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

    return { data, error, isPending, isSuccess, mutate, isError, isSettled };
};
