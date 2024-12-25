import Link from "next/link";
import getPostListRequest from "@/utils/api/post/getPostListRequest";
import PostList from "@/components/community/post/PostList";

export const metadata = {
  title: "HearUR | 커뮤니티",
};

const CommunityPage = async () => {
  const posts = await getPostListRequest();
  return (
      <>
        <div className="bg-gray-100 min-h-screen">
          <div className="container mx-auto">
            <div className="cover-content text-center pt-10">
              <h1 className="text-4xl font-bold pb-6">커뮤니티 관리</h1>
            </div>
            <section className="community-post-list mt-10">
              <div className="post-list-header flex justify-between items-center mx-10 my-4">
                <div className="text-lg font-bold">최신 글</div>
                <Link
                    className="post-write-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    href="/community/write"
                >
                  글쓰기
                </Link>
              </div>
              <div className="post-list px-10 py-4 bg-white rounded-lg shadow">
                <PostList posts={posts}/>
              </div>
            </section>
          </div>
        </div>
      </>
  );
}

export default CommunityPage;