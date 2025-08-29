import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {IUser} from "@/models/IUser";
import {retrieveSearchParams} from "@/services/api.service";

type UserPageProps = {
    searchParams: Promise<SearchParams>
}

const UserPage:FC<UserPageProps> = async ({searchParams}) => {

    const item = await retrieveSearchParams<IUser>(searchParams, 'user')

    return (
        <div style={{marginTop: 100}}>
            {item&& <div>{item.id}</div>}
        </div>
    );
};

export default UserPage;