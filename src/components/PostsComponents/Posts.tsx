import {getApiData} from "@/services/api.service";

import {IPost} from "@/models/IPost";
import Post from "@/components/PostsComponents/Post/Post";


const Posts = async () => {

    const posts = await getApiData<IPost[]>('posts')
    return (
        <div>
            {posts.map((post) => <Post key={post.id} item={post}/>)}
        </div>
    );
};

export default Posts;