import { useEffect } from 'react';

import { Empty } from 'antd';

import { TGifObject } from 'schemas/gifData_d';

import { showNotificationPopup } from 'utils/function';

import styles from './GifGrid.module.scss';

interface IGifGridData {
  data: TGifObject[];
  error: string;
}

const GifGrid: React.FC<IGifGridData> = ({ data, error }) => {
  const getGifUrl = (gifObject: TGifObject) => gifObject?.images?.fixed_height?.url;

  const handleError = (err: string) => {
    if (err)
      return (
        <div>
          <Empty />
        </div>
      );

    return null;
  };

  const renderGifData = (gifData: TGifObject[]) => {
    return gifData?.map((gifObject: TGifObject) => {
      return (
        <div className={styles.Column} key={gifObject?.id}>
          <img
            src={getGifUrl(gifObject)}
            alt={gifObject?.title || 'gif'}
            className={styles.ImageGif}
          />
        </div>
      );
    });
  };

  useEffect(() => {
    error && showNotificationPopup('error', 'Oops, something went wrong', 'Please try again...');
  }, [error]);

  return data?.length ? (
    <div className={styles.Row}>{renderGifData(data)}</div>
  ) : (
    handleError(error)
  );
};

export default GifGrid;
