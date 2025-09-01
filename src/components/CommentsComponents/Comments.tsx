import {getApiData} from "@/services/api.service";;
import {IComment} from "@/models/IComment";
import Comment from "@/components/CommentsComponents/Comment/Comment";


const Comments = async () => {

    const comments = await getApiData<IComment[]>('comments')
    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} item={comment}/>)}
        </div>
    );
};

export default Comments;