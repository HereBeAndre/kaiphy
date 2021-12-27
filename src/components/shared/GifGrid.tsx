import { useState, useEffect } from 'react';

import { Row, Col } from 'antd';

import { TGifObject } from '../../schemas/gifData_d';

interface IGifGridData {
  data: TGifObject[];
  isLoaded?: boolean;
  error?: Error;
}

const GifGrid: React.FC<IGifGridData> = ({ data, isLoaded, error }) => {
  const [gridData, setGridData] = useState<TGifObject[]>([]);

  const getGifUrl = (gifObject: TGifObject) => gifObject?.images?.fixed_height?.url;

  const renderGifData = (gifData: TGifObject[]) => {
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // }
    return gifData?.map((gifObject: TGifObject) => {
      return (
        <Col className="gutter-row" span={4} key={gifObject?.id}>
          <img src={getGifUrl(gifObject)} alt={gifObject?.title || 'gif'} key={gifObject?.id} />
        </Col>
      );
    });
  };

  useEffect(() => {
    setGridData(data);
  }, [data]);

  return data?.length ? (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 28 }}>{renderGifData(gridData)}</Row>
  ) : null;
};

export default GifGrid;
