import axios from "axios";

const getNoticeListRequest = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return axios.get(`${baseUrl}/api/v1/experience/notice`)
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("공지사항을 불러오는데 문제가 생겼습니다.");
        }
      })
      .catch(error => {
        console.error('getNoticeListRequestError: ', error);
        return [];
      });
}

export default getNoticeListRequest;