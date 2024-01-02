import axios from 'axios';
import { notificationServerError } from './notification';

const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '29743747-4d974b8d370b5a5c48adadad9';

axios.defaults.baseURL = PIXABAY_BASE_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios global error handling:', error);
    notificationServerError();
    return Promise.reject(error);
  }
);

export async function imagesApi({ search, page }) {
  try {
    const response = await axios.get('', {
      params: {
        key: PIXABAY_API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: '12',
        page: page,
      },
    });

    return response;
  } catch (error) {
    console.error('Error in imagesApi:', error);
    return null;
  }
}