import Link from "next/link";
import { Post } from "@/components/community/post/PostItem";
import React from "react";

interface PostListItemProps {
  post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  //console.log(post);
  return (
      <Link key={post.no} href={`/community/post/${post.no}`}>
        <div className="block hover:bg-gray-100">
          <div className="p-5 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold">{post.title || '제목 없음'}</div>
                <div className="text-gray-500">카테고리: {post.category}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">{new Date(post.createDate).toLocaleString()}</div>
                <div className="text-sm text-gray-700">작성자: {post.author}</div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-gray-600">
                조회수: {post.views} · 좋아요: {post.likes} · 댓글: {post.commentsCount}
              </div>
              {post.updated && <div className="text-xs font-bold text-red-500">수정됨</div>}
            </div>
          </div>
        </div>
      </Link>
  );
};

export default PostListItem;
