// api.ts
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchReports = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/report`, {
      headers: {
        'Authorization': `${localStorage.getItem('jwt')}`,
      }
    });
    console.log('Fetched reports:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};
