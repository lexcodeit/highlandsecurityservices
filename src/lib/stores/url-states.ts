import { useQueryState } from "nuqs";

export const useActiveRequirementId = () => {
    return useQueryState("activeRequirementId");
};
