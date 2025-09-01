import { IUser } from "@/models/IUser";
import { FC } from "react";
import Link from "next/link";
import styles from './User.module.css';

type UserProps = {
    item: IUser;
};

const User: FC<UserProps> = ({ item }) => {
    return (
        <Link
            href={{
                pathname: `/users/${item.id}`,
                query: { user: JSON.stringify(item) },
            }}
            className={styles.card}
        >
            <div className={styles.header}>
                <span className={styles.id}>#{item.id}</span>
                <span className={styles.name}>{item.name}</span>
            </div>
            <div className={styles.email}>{item.email}</div>
        </Link>
    );
};

export default User;
