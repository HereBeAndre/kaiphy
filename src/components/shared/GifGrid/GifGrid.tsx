import { useState, useEffect } from 'react';

import { TGifObject } from '../../../schemas/gifData_d';

import './GifGrid.css';

interface IGifGridData {
  data: TGifObject[];
  isLoaded?: boolean;
  error?: Error;
}

const GifGrid: React.FC<IGifGridData> = ({ data, isLoaded, error }) => {
  const [gridData, setGridData] = useState<TGifObject[]>([]);

  const getGifUrl = (gifObject: TGifObject) => gifObject?.images?.fixed_height?.url;

  const renderGifData = (
    gifData: TGifObject[],
    start: number,
    end: number | undefined = undefined,
  ) => {
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // }
    const slicedData = gifData?.slice(start, end);
    return slicedData?.map((gifObject: TGifObject) => {
      return <img src={getGifUrl(gifObject)} alt={gifObject?.title || 'gif'} key={gifObject?.id} />;
    });
  };

  useEffect(() => {
    setGridData(data);
  }, [data]);

  // TODO: Find more efficient solution to render GIFs in responsive manner
  return data?.length ? (
    <div className="row">
      <div className="column">{renderGifData(gridData, 0, 2)}</div>
      <div className="column">{renderGifData(gridData, 2, 4)}</div>
      <div className="column">{renderGifData(gridData, 4, 6)}</div>
      <div className="column">{renderGifData(gridData, 6, 8)}</div>
      <div className="column">{renderGifData(gridData, 8, 10)}</div>
    </div>
  ) : null;
};

export default GifGrid;
