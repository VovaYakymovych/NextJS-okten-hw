import { SearchParams } from "next/dist/server/request/search-params";
import { FC } from "react";
import { IPost } from "@/models/IPost";
import { retrieveSearchParams } from "@/services/api.service";

type PostPageProps = {
    searchParams: Promise<SearchParams>;
};

const PostPage: FC<PostPageProps> = async ({ searchParams }) => {
    const post = await retrieveSearchParams<IPost>(searchParams, "post");

    if (!post) {
        return <div style={{ marginTop: 100 }}>No post data found</div>;
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
            <h2>Post #{post.id}</h2>
            <p>
                <strong>User ID:</strong> {post.userId}
            </p>
            <h3>Title</h3>
            <p>{post.title}</p>
            <h3>Body</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostPage;
