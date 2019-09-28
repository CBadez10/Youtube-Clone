import axios from 'axios';

const API_KEY = 'AIzaSyDQ2fJhvSzK7YP9mJjIUkW4QADtsjJ7dYc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});
