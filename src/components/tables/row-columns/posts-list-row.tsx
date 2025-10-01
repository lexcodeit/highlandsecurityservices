import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    uploaded: string;
    status: string;
    postSlug: string;
}

const PostListRow = ({ status, title, uploaded, postSlug }: Props) => {
    return (
        <div className="grid-cols-5 gap-x-4 border-b border-b-border table-body-row">
            <div className="table-col-body font-semibold text-header-text">
                {title}
            </div>
            <div className="table-col-body font-medium">{status}</div>
            <div className="table-col-body text-supporting-text">
                {uploaded}
            </div>
            <div className="table-col-body">
                <Link
                    href={`/control-admin/posts/${postSlug}`}
                    className="border border-border-color py-3 px-6 cursor-pointer hover:bg-light-bg rounded-md"
                >
                    View
                </Link>
            </div>
        </div>
    );
};

export default PostListRow;
