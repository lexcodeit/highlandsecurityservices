import { atom, useAtom } from "jotai";

const completeAccountState = atom(false);
const inviteUserState = atom(false);
const deleteRequirementState = atom(false);
const createRequirementState = atom(false);

export const useCompleteAccountModal = () => {
    return useAtom(completeAccountState);
};

export const useInviteUserModal = () => {
    return useAtom(inviteUserState);
};

export const useDeleteRequirementModal = () => {
    return useAtom(deleteRequirementState);
};

export const useCreateRequirementModal = () => {
    return useAtom(createRequirementState);
};
