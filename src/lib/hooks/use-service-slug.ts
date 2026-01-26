import { ServicesSlugEnum } from "@/utils/enums";
import { useParams } from "next/navigation";

export const useServiceSlug = () => {
    const params = useParams();

    return params.serviceSlug as ServicesSlugEnum;
};
