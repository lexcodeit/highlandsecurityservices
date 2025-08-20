import { useParams } from "next/navigation";
import { PositionEnums } from "@/utils/enums";

export const useJobSlug = () => {
    const params = useParams();

    return params.jobSlug as PositionEnums;
};
