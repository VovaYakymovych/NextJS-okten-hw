import { IComment } from "@/models/IComment";
import { FC } from "react";
import Link from "next/link";
import styles from "./Comment.module.css";

type CommentProps = {
    item: IComment;
};

const Comment: FC<CommentProps> = ({ item }) => {
    return (
        <Link
            href={{
                pathname: `/comments/${item.id}`,
                query: { comment: JSON.stringify(item) },
            }}
            className={styles.card}
        >

                <span className={styles.id}>Comment #{item.id}</span>
                <h4 className={styles.body}>{item.body}</h4>
        </Link>
    );
};

export default Comment;
