import { formatTimeFn } from "@/utils/helpers";
import React from "react";

interface Props {
    name: string;
    position: string;
    email: string;
    date: number;
}

const JobApplicationsRow = ({ date, email, name, position }: Props) => {
    return (
        <div className="grid grid-cols-6 gap-x-4 border-b border-b-border">
            <div className="table-col-body">{name}</div>
            <div className="table-col-body">{position}</div>
            <div className="table-col-body">{email}</div>
            <div className="table-col-body">{formatTimeFn(date)}</div>
            <div className="table-col-body"></div>
        </div>
    );
};

export default JobApplicationsRow;
