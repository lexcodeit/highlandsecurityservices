import React from "react";

const JobsListHeader = () => {
    return (
        <div className="grid grid-cols-5 gap-x-4 border-b border-b-border">
            <div className="table-header">Title</div>
            <div className="table-header">Status</div>
            <div className="table-header">Uploaded</div>
            <div className="table-header"></div>
        </div>
    );
};

export default JobsListHeader;
