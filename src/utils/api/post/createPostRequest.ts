import axios from "axios";

const createPostRequest = async (title: string, content: string, category: string, file: File|null) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // FormData 객체 생성
  const formData = new FormData();

  // JSON 데이터를 Blob으로 변환하고 FormData에 추가
  const jsonBlob = new Blob([JSON.stringify({
    title: title,
    content: content,
    category: category,
  })], { type: 'application/json' });
  formData.append("dto", jsonBlob);

  // 파일 데이터 추가
  if (file) {
    formData.append("image", file);
  }

  // 요청 보내기
  const response = await axios.post(`${baseUrl}/api/v1/community/post`, formData, {
    headers: {
      // Content-Type은 자동으로 설정되므로 명시적으로 지정하지 않습니다.
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  });

  // 응답 확인
  if (response.data !== undefined && response.data.split('/').pop() === "html>") {
    console.log(response.data.split('/').pop());
  }

  // 최종 결과 반환
  return {
    status: response.status,
    location: response.headers.location,
  };
}

export default createPostRequest;
