import React from "react";
import NoticeListItem from "@/components/experience/NoticeListItem";

export interface Notice {
  id: string;
  category: string | null;
  title: string;
  content: string | null;
  author: string;
  createDate: string;
  startDate: string;
  endDate: string;
  reviews: string[] | null;
  views: number;
  likes: number;
  updated: boolean;
}

interface NoticeListProps {
  notices: Notice[]
}
const NoticeList: React.FC<NoticeListProps> = ({ notices }) => {
  return (
      notices.length > 0 ? (
          notices.map((notice: Notice) => (
              <NoticeListItem key={notice.id} notice={notice}></NoticeListItem>
          ))
      ) : (
          <>
            <div>게시글을 불러오는데 오류가 생겼습니다.</div>
          </>
      )
  );
}

export default NoticeList;