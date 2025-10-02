import React from "react";

const PostCategoriesHeader = () => {
    return (
        <div className="grid grid-cols-5 gap-x-4 border-b border-b-border">
            <div className="table-header">Category Name</div>
            <div className="table-header">Slug</div>
            <div className="table-header">Created</div>
            <div className="table-header"></div>
        </div>
    );
};

export default PostCategoriesHeader;
