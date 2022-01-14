import axios from 'axios';

import { TGifDataServerResponse } from 'schemas/gifData_d';

import { MAX_GIF_OBJECTS } from 'utils/constants';

const giphyAxiosInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1',
});

export const fetchGifs = (query: string) =>
  giphyAxiosInstance.get<string, TGifDataServerResponse>('/gifs/search', {
    params: {
      q: query,
      api_key: process.env.REACT_APP_GIPHY_API_KEY || '',
      limit: MAX_GIF_OBJECTS,
    },
  });
