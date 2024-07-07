"use client";
import handleSubmit from "@/app/community/write/submit";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const writePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('jwt') === null) {
        router.push('/login');
      }
    }
  }, []);
  return (
      <>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">제목</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
                 className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">카테고리</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)}
                 className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">내용</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={5}
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
        </div>
        <div>
          <button onClick={handleSubmit(router, title, content, category)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">글쓰기
          </button>
        </div>
      </>
  );
}


export default writePost;