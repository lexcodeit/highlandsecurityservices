export type ApiResponseType<ResponseType> = {
    status: boolean;
    data?: ResponseType;
    error?: string;
};

export type NavItem = {
    text: string;
    url: string;
    /**
     * Used to determine active state.
     * Usually a pathname segment like "/about"
     */
    matchPath: string;
};
