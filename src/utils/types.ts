export type ApiResponseType<ResponseType> = {
    status: boolean;
    data?: ResponseType;
    error?: string;
};
