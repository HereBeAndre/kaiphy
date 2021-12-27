type TFixedImage = {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
};

type TFixedStillImage = {
  height: string;
  url: string;
  width: string;
};

type TFixedDownsampledImage = {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webp_size: string;
};

type TDownSizedImage = {
  height: string;
  url: string;
  width: string;
  size: string;
};

type TDownsizedSmallAndPreview = {
  width: string;
  height: string;
  mp4: string;
  mp4_size: string;
};

type TOriginalStillAndPreviewGif = {
  width: string;
  height: string;
  url: string;
};

export type TImage = {
  fixed_height: TFixedImage;
  fixed_height_still: TFixedStillImage;
  fixed_height_downsampled: TFixedDownsampledImage;
  fixed_width: TFixedImage;
  fixed_width_still: TFixedStillImage;
  fixed_width_downsampled: TFixedDownsampledImage;
  fixed_height_small: TFixedImage;
  fixed_height_small_still: TFixedStillImage;
  fixed_width_small: TFixedImage;
  fixed_width_small_still: TFixedStillImage;
  downsized: TDownSizedImage;
  downsized_still: TFixedStillImage;
  downsized_large: TDownSizedImage;
  downsized_medium: TDownSizedImage;
  downsized_small: TDownsizedSmallAndPreview;
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
  original_still: TOriginalStillAndPreviewGif;
  looping: {
    mp4: string;
  };
  preview: TDownsizedSmallAndPreview;
  preview_gif: TOriginalStillAndPreviewGif;
};
