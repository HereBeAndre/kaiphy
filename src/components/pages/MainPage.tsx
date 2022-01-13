import { useState, useEffect } from 'react';

import { Form, Input, Row } from 'antd';

import giphyApi from 'api/giphyApi';

import { TGifDataServerResponse, TGifObject } from 'schemas/gifData_d';

import BaseLayout from 'components/layout/BaseLayout/BaseLayout';

import CustomForm from 'components/shared/CustomForm';
import GifGrid from 'components/shared/GifGrid/GifGrid';

import { MAX_GIF_OBJECTS } from 'utils/constants';

const MainPage = () => {
  const [giphyQuery, setGiphyQuery] = useState<string>('');
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true);
  const [gifData, setGifData] = useState<TGifObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // TODO: Add debounce function
  useEffect(() => {
    !!giphyQuery &&
      setTimeout(() => {
        setIsLoading(!!giphyQuery);
        giphyApi
          .get<string, TGifDataServerResponse>('/gifs/search', {
            params: {
              q: giphyQuery,
              api_key: process.env.REACT_APP_GIPHY_API_KEY || '',
              limit: MAX_GIF_OBJECTS,
            },
          })
          .then(
            (result) => {
              setIsLoading(false);
              setGifData(result?.data?.data);
            },
            /* Handle errors here instead of a catch() block so that we don't swallow
          exceptions from actual bugs in component */
            (err) => {
              setIsLoading(false);
              // Normally we'd use the Error constructor with name, message and optionally stack
              // GIPHY API returns an object containing only message though, so we extract just that
              setErrorMessage(err?.message);
            },
          );
      }, 3000);
  }, [giphyQuery]);

  const onGiphyInputChange = (e) => {
    setDisabledSubmit(!e.target.value.length);
    setGiphyQuery(e.target.value);
  };

  const onGiphyFormFinish = (value: string) => {
    setGiphyQuery(value);
  };

  return (
    <BaseLayout
      header={
        <Row justify="center" align="middle" style={{ marginTop: '16px' }}>
          <CustomForm formName="giphy-form" onFinish={onGiphyFormFinish} disabled={disabledSubmit}>
            <Form.Item name="keyword">
              <Input placeholder="Search GIPHY" onChange={onGiphyInputChange} allowClear />
            </Form.Item>
          </CustomForm>
        </Row>
      }
    >
      {isLoading ? 'Loading...' : <GifGrid data={gifData} error={errorMessage} />}
    </BaseLayout>
  );
};

export default MainPage;
