import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { avatarFallback, formatTimeFn } from "@/utils/helpers";
import { Dot } from "lucide-react";
import { WorkspaceRoleEnum } from "@/utils/enums";
import { Button } from "@/components/ui/button";
import { Doc } from "../../../../convex/_generated/dataModel";

interface Props {
    member: Doc<"profiles"> & {
        workspaceRole: WorkspaceRoleEnum;
    };
}

const PerWorkspaceMember = ({ member }: Props) => {
    return (
        <div className="py-2 flex items-center space-x-2">
            <Avatar className="size-10">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>
                    {avatarFallback(member.firstName)}
                </AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <h2 className="text-header-text text-sm font-semibold font-outfit">
                    {member.firstName} {member.lastName}
                </h2>
                <div className="flex flex-row items-center space-x-1">
                    <p className="text-xs text-supporting-text">
                        {member.email}
                    </p>
                    <Dot className="size-6" />
                    <span className="text-xs text-supporting-text">
                        Joined {formatTimeFn(member._creationTime)}
                    </span>
                </div>
            </div>
            <div>
                <Button variant={"outline"}>{member.workspaceRole}</Button>
            </div>
        </div>
    );
};

export default PerWorkspaceMember;
