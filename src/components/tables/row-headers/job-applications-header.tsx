import React from "react";

const JobApplicationsHeader = () => {
    return (
        <div className="grid grid-cols-5 gap-x-4 border-b border-b-border">
            <div className="table-header">Name</div>
            <div className="table-header">Position</div>
            <div className="table-header">Email</div>
            <div className="table-header">Date</div>
            <div className="table-header"></div>
        </div>
    );
};

export default JobApplicationsHeader;
