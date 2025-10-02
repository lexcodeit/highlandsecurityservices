import { useParams } from "next/navigation";

export const usePostSlug = () => {
    const params = useParams();

    return params.postSlug;
};
