import {IPost} from "@/models/IPost";
import {FC} from "react";
import Link from "next/link";
import styles from "./Post.module.css";

type PostProps = {
    item: IPost;
};

const Post: FC<PostProps> = ({item}) => {
    return (
        <Link
            href={{
                pathname: `/posts/${item.id}`,
                query: {post: JSON.stringify(item)},
            }}
            className={styles.card}
        >
            <span className={styles.id}>Post #{item.id}</span>
            <h3 className={styles.title}>{item.title}</h3>
        </Link>
    );
};

export default Post;
