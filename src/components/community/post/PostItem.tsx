import getPostRequest from "@/utils/api/post/getPostRequest";
import {IParams} from "@/app/community/post/[no]/page";
import ExamplePost from "@/components/community/post/ExamplePost";
import InputComment from "@/components/community/comment/InputComment";
import RemoveCommentButton from "@/components/community/comment/RemoveCommentButton";

export interface Post {
  no: number;
  author: string;
  category: string;
  title: string;
  content: string;
  createDate: string;
  updateDate: string;
  updated: boolean;
  comments: comment[];
  views: number;
  likes: number;
  commentsCount: number;
}
export interface comment {
  id: string;
  author: string;
  content: string;
  createDate: string;
  updated: boolean;
}


const PostItem = async ({params: {no}}: IParams) => {

  const fetchPost = await getPostRequest(no);
  if (Number(no) === -1) return (
      <ExamplePost/>
  );
  if (!fetchPost) return <div>게시글이 불러오는 중입니다...</div>
  if (fetchPost === -1) return <div>게시글을 불러오는데 문제가 생겼습니다.</div>
  const post: Post = fetchPost as Post
  return (
      <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
          <p className="text-sm text-gray-600 mb-2">
            작성자: <span className="font-medium">{post.author}</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            작성일: <span className="font-medium">{post.createDate}</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            수정일: <span className="font-medium">{post.updateDate}</span>
            {post.updated && <span className="text-xs text-red-500"> (수정됨)</span>}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            카테고리: <span className="font-medium">{post.category}</span>
          </p>
          <p className={"text-sm text-gray-600 mb-2"}>
            조회수: <span className={"font-medium"}>{post.views}</span>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            추천수: <span className="font-medium">{post.likes}</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">댓글</h3>
            <InputComment postNo={post.no}/>
            {post.comments.map((comment: comment, index: number) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    작성자: <span className="font-medium">{comment.author}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    작성일: <span className="font-medium">{comment.createDate}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {comment.updated && <span className="text-xs text-red-500"> (수정됨)</span>}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                  <RemoveCommentButton commentId={comment.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PostItem;