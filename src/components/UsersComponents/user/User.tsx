import {IUser} from "@/models/IUser";
import {FC} from "react";
import Link from "next/link";

type UserProps ={
    item:IUser
}

const User:FC<UserProps> = ({item}) => {
    return (
        <Link href={{pathname: `/users/${item.id}`, query: {user: JSON.stringify(item)}}}>
            <div>
                {item.id} - {item.name}
            </div>
        </Link>
    );
};

export default User;