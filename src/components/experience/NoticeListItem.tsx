import {Notice} from "@/components/experience/NoticeList";
import React from "react";

interface NoticeListItemProps {
  notice: Notice;
}

const NoticeListItem: React.FC<NoticeListItemProps> = ({ notice }) => {
  return (
    <div>
      <div className="p-5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-semibold">{notice.title || '제목 없음'}</div>
            <div className="text-gray-500">카테고리: {notice.category}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">{new Date(notice.createDate).toLocaleString()}</div>
            <div className="text-sm text-gray-700">작성자: {notice.author}</div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-600">
            조회수: {notice.views} · 좋아요: {notice.likes}
          </div>
          {notice.updated && <div className="text-xs font-bold text-red-500">수정됨</div>}
        </div>
      </div>
    </div>
  );
};

export default NoticeListItem;