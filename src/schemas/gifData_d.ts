import { TImage } from './imageData_d';

type TUrl = {
  url: string;
};

type TAnalytics = {
  onclick: TUrl;
  onload: TUrl;
  onsent: TUrl;
};

type TMeta = {
  msg: string;
  response_id: string;
  status: number;
};

type TPagination = {
  count: number;
  offset: number;
  total_count: number;
};

type TGiphyUser = {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
};

export type TGifObject = {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user: TGiphyUser;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images: TImage;
  title: string;
  analytics: TAnalytics;
  analytics_response_payload: string;
  bitly_gif_url: string;
  is_sticker: number;
};

export type TGifData = {
  data: TGifObject[];
};

export type TGifDataServerResponse = {
  data: TGifData;
  meta: TMeta;
  pagination: TPagination;
};
