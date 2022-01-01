import { useState, useEffect } from 'react';

import { Empty } from 'antd';

import { TGifObject } from 'schemas/gifData_d';

import { showNotificationPopup } from 'utils/function';

import './GifGrid.css';

interface IGifGridData {
  data: TGifObject[];
  error: string;
}

const GifGrid: React.FC<IGifGridData> = ({ data, error }) => {
  const [gridData, setGridData] = useState<TGifObject[]>([]);

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

  const renderGifData = (
    gifData: TGifObject[],
    start: number,
    end: number | undefined = undefined,
  ) => {
    const slicedData = gifData ? gifData.slice(start, end) : [];
    return slicedData?.map((gifObject: TGifObject) => {
      return <img src={getGifUrl(gifObject)} alt={gifObject?.title || 'gif'} key={gifObject?.id} />;
    });
  };

  useEffect(() => {
    setGridData(data);
  }, [data]);

  useEffect(() => {
    error && showNotificationPopup('error', 'Oops, something went wrong', 'Please try again...');
  }, [error]);

  // TODO: Find more efficient solution to render GIFs in responsive manner
  return data?.length ? (
    <div className="row">
      <div className="column">{renderGifData(gridData, 0, 2)}</div>
      <div className="column">{renderGifData(gridData, 2, 4)}</div>
      <div className="column">{renderGifData(gridData, 4, 6)}</div>
      <div className="column">{renderGifData(gridData, 6, 8)}</div>
      <div className="column">{renderGifData(gridData, 8, 10)}</div>
    </div>
  ) : (
    handleError(error)
  );
};

export default GifGrid;
