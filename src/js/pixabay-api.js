import axios from 'axios';

export async function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: `56029004-579adc8bb65fd3fada05aacf1`,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  const response = await axios.get(url);

  return response.data;
}
