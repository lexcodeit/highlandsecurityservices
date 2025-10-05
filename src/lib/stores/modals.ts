import { atom, useAtom } from "jotai";

const completeAccountState = atom(false);
const inviteUserState = atom(false);
const deleteRequirementState = atom(false);
const createRequirementState = atom(false);
const successModalState = atom(false);
const createPostCategoryState = atom(false);
const confirmModalState = atom(false);

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

export const useSuccessModal = () => {
    return useAtom(successModalState);
};

export const useCreatePostCategoryModal = () => {
    return useAtom(createPostCategoryState);
};

export const useConfirmModal = () => {
    return useAtom(confirmModalState);
};
