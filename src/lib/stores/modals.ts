import { atom, useAtom } from "jotai";

const completeAccountState = atom(false);
const inviteUserState = atom(false);

export const useCompleteAccountModal = () => {
    return useAtom(completeAccountState);
};

export const useInviteUserModal = () => {
    return useAtom(inviteUserState);
};
