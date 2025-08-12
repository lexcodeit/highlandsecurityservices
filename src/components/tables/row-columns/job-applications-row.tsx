import React from "react";

const JobApplicationsRow = () => {
    return (
        <div className="grid grid-cols-6 gap-x-4 border-b border-b-border">
            <div className="table-col-body">Name</div>
            <div className="table-col-body">Position</div>
            <div className="table-col-body">Email</div>
            <div className="table-col-body">Date</div>
            <div className="table-col-body"></div>
        </div>
    );
};

export default JobApplicationsRow;
