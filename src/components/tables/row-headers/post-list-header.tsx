import React from "react";

const PostListHeader = () => {
    return (
        <div className="grid grid-cols-5 gap-x-4 border-b border-b-border">
            <div className="table-header">Title</div>
            <div className="table-header">Status</div>
            <div className="table-header">Published</div>
            <div className="table-header"></div>
        </div>
    );
};

export default PostListHeader;
