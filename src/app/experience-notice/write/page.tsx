"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const WritePage: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [formData, setFormData] = useState({
    category: 'string',
    title: '111',
    content: 'string',
    author: 'string',
    startDate: '2024-12-24T01:33:20.892Z',
    endDate: '2024-12-24T01:33:20.892Z',
    campaignDetails: 'string',
    instruction: 'string',
    maxParticipants: 1,
  });
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const uploadFormData = new FormData();
    // JSON 데이터를 Blob으로 변환하고, 'application/json' Content-Type을 명시합니다.
    const jsonBlob = new Blob([JSON.stringify(formData)], { type: 'application/json' });
    uploadFormData.append('dto', jsonBlob);

    // 이미지 파일 추가
    if (file) {
      uploadFormData.append('image', file);
    }

    try {
      const response = await axios.post(`${baseUrl}/api/v1/experience/notice`, uploadFormData, {
        headers: {
          'Authorization': `${localStorage.getItem('jwt')}`,
          // Content-Type을 명시하지 않습니다. FormData가 알아서 처리하게 합니다.
        },
      });
      console.log('Success:', response);
    } catch (error) {
      console.error('Error uploading the data:', error);
    }
  };

  return (
      <div className="max-w-2xl mx-auto pt-8">
        <h1 className="text-2xl font-bold mb-4">글쓰기</h1>
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="mb-6">
                <input
                    type="text"
                    name={key}
                    value={String(value)}
                    onChange={handleInputChange}
                    className="block w-full p-2 border"
                    placeholder={`Enter ${key}`}
                />
                <p className="text-sm text-gray-600 mt-1">{key}</p>
              </div>
          ))}
          <div>
            <input
                type="file"
                onChange={handleFileChange}
                className="block w-full p-2 border"
            />
            <p className="text-sm text-gray-600 mt-1">이미지 파일을 업로드하세요.</p>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">글 올리기</button>
        </form>
      </div>
  );
}

export default WritePage;

