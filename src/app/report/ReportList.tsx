import React from 'react';
import axios from 'axios';
import { Report } from '@/types/report';  // 타입 정의 가져오기
import './styles.css';  // CSS 파일 경로 확인


interface ReportListProps {
  reports: Report[];
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;  // 기본 URL

const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  // 상태 업데이트 요청을 처리하는 함수
  const handleStatusChange = async (id: number, newStatus: string) => {
    console.log(id, newStatus);
    console.log(`${baseUrl}/api/v1/report/${id}/status/${newStatus}`);
    try {
      await axios.put(`${baseUrl}/api/v1/report/${id}/status/${newStatus}`, {}, {
        headers: {
          'Authorization': `${localStorage.getItem('jwt')}`,  // 인증 토큰
        }
      });
      alert(`신고 상태가 '${newStatus}'(으)로 변경되었습니다.`);
      window.location.reload();  // 상태 업데이트 후 페이지를 새로 고침
    } catch (error) {
      console.error('Status update failed:', error);
      alert('상태 업데이트에 실패했습니다.');
    }
  };

  return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {reports.map(report => (
            <li key={report.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
              <p>신고 ID: {report.id}</p>
              <p>신고자: {report.username}</p>
              <p>신고일: {report.reportDate}</p>
              <p>설명: {report.description}</p>
              <p>상태: {report.status}</p>
              <p>유형: {report.type}</p>
              <p>문서 유형: {report.docsType}</p>
              <button
                  style={{ marginRight: '5px', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white' }}
                  onClick={() => handleStatusChange(report.id, 'dismissed')}
              >
                Dismiss
              </button>
              <button
                  style={{ padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white' }}
                  onClick={() => handleStatusChange(report.id, 'resolved')}
              >
                Resolve
              </button>
            </li>
        ))}
      </ul>
  );
};

export default ReportList;