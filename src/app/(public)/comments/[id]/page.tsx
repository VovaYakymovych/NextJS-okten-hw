import { SearchParams } from "next/dist/server/request/search-params";
import { FC } from "react";
import { IComment } from "@/models/IComment";
import { retrieveSearchParams } from "@/services/api.service";

type CommentPageProps = {
    searchParams: Promise<SearchParams>;
};

const CommentPage: FC<CommentPageProps> = async ({ searchParams }) => {
    const comment = await retrieveSearchParams<IComment>(searchParams, "comment");

    if (!comment) {
        return <div style={{ marginTop: 100 }}>No comment data found</div>;
    }

    return (
        <div
            style={{
                marginTop: 144,
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                maxWidth: "600px",
                marginInline: "auto",
                background: "#fafafa",
            }}
        >
            <h2>Comment #{comment.id}</h2>
            <p>
                <strong>Post ID:</strong> {comment.postId}
            </p>
            <h3>Name</h3>
            <p>{comment.name}</p>
            <p>
                <strong>Email:</strong> {comment.email}
            </p>
            <h3>Body</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentPage;
