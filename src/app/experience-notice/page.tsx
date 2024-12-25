/** 체험단 공고 */
import Link from "next/link";
import PostList from "@/components/community/post/PostList";
import NoticeList from "@/components/experience/NoticeList";
import getNoticeListRequest from "@/utils/api/notice/getNoticeListRequest";

export const metadata = {
	title: 'HearUR | 체험단 공고',
}

const ExperiencePage = async () => {
	const notices = await getNoticeListRequest();
	return (
			<>
				<div>
					<div className="cover-content text-center pt-10">
						<h1 className="text-4xl font-bold pb-6">체험단 공고</h1>
					</div>
					<section className="community-post-list mt-10">
						<div className="post-list-header flex justify-between items-center mx-10 my-4">
							<div className="text-lg font-bold">최신 글</div>
							<Link
									className="post-write-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
									href="/experience-notice/write"
							>
								글쓰기
							</Link>
						</div>
						<div className="post-list px-10 py-4 bg-white rounded-lg shadow">
							<NoticeList notices={notices}/>
						</div>
					</section>
				</div>
			</>
	);
}

export default ExperiencePage
