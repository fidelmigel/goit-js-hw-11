const API_KEY = '46590037-17c17d616a892c92268aed1a1';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  });
};
