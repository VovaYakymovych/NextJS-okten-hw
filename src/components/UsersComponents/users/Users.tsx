import {getApiData} from "@/services/api.service";
import {IUser} from "@/models/IUser";
import User from "@/components/UsersComponents/user/User";


const Users = async () => {

    const users = await getApiData<IUser[]>('users')
    return (
        <div>
            {users.map((user) => <User key={user.id} item={user}/>)}
        </div>
    );
};

export default Users;