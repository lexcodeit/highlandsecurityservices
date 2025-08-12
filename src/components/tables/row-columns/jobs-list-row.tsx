import React from "react";

const JobsListRow = () => {
    return (
        <div className="grid grid-cols-5 gap-x-4 border-b border-b-border">
            <div className="table-col-body">Title</div>
            <div className="table-col-body">Status</div>
            <div className="table-col-body">Uploaded</div>
            <div className="table-col-body"></div>
        </div>
    );
};

export default JobsListRow;
