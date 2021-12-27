type TUrl = {
  url: string;
};

type TAnalytics = {
  onclick: TUrl;
  onload: TUrl;
  onsent: TUrl;
};

type TImage = {
  fixed_height: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  fixed_height_still: {
    height: string;
    url: string;
    width: string;
  };
  fixed_height_downsampled: {
    url: string;
    width: string;
    height: string;
    size: string;
    webp: string;
    webp_size: string;
  };
  fixed_width: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  fixed_width_still: {
    height: string;
    url: string;
    width: string;
  };
  fixed_width_downsampled: {
    url: string;
    width: string;
    height: string;
    size: string;
    webp: string;
    webp_size: string;
  };
  fixed_height_small: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  fixed_height_small_still: {
    height: string;
    url: string;
    width: string;
  };
  fixed_width_small: {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  fixed_width_small_still: {
    height: string;
    url: string;
    width: string;
  };
  downsized: {
    height: string;
    url: string;
    width: string;
    size: string;
  };
  downsized_still: {
    height: string;
    url: string;
    width: string;
  };
  downsized_large: {
    height: string;
    url: string;
    width: string;
    size: string;
  };
  downsized_medium: {
    height: string;
    url: string;
    width: string;
    size: string;
  };
  downsized_small: {
    mp4: string;
    width: string;
    height: string;
    mp4_size: string;
  };
  original: {
    width: string;
    height: string;
    size: string;
    frames: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
  };
  original_still: {
    width: string;
    height: string;
    url: string;
  };
  looping: {
    mp4: string;
  };
  preview: {
    width: string;
    height: string;
    mp4: string;
    mp4_size: string;
  };
  preview_gif: {
    width: string;
    height: string;
    url: string;
  };
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
