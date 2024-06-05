import axios from 'axios';

const reviewsUrl = '/reviews.json';

export const getReviews = () => {
  return axios.get(reviewsUrl);
};

export const addReview = (review) => {
  // This is a mock implementation. In a real app, you would POST to a server.
  return axios.post(reviewsUrl, review);
};
