import { useState, useEffect } from 'react';

import { Form, Input } from 'antd';

import giphyApi from '../../api/giphyApi';

import CustomForm from '../shared/CustomForm';
import GifGrid from '../shared/GifGrid';

import { MAX_GIF_OBJECTS } from '../../utils/constants';
import { TGifDataServerResponse, TGifObject } from '../../schemas/gifData_d';

const MainPage = () => {
  const [giphyQuery, setGiphyQuery] = useState<string>('');
  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true);
  const [gifData, setGifData] = useState<TGifObject[]>([]);

  // TODO: Find efficient way to handle meta status
  useEffect(() => {
    !!giphyQuery &&
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
            // setIsLoaded(true);
            setGifData(result?.data?.data);
          },
          /* Handle errors here instead of a catch() block so that we don't swallow
          exceptions from actual bugs in component */
          (err) => {
            // setIsLoaded(true);
            // setError(new Error(err));
            console.log(err);
          },
        );
  }, [giphyQuery]);

  const onGiphyInputChange = (e) => {
    setDisabledSubmit(!e.target.value.length);
  };

  const onGiphyFormFinish = (value: string) => {
    setGiphyQuery(value);
  };

  return (
    <>
      <CustomForm formName="giphy-form" onFinish={onGiphyFormFinish} disabled={disabledSubmit}>
        <Form.Item
          name="keyword"
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Search GIPHY" onChange={onGiphyInputChange} allowClear />
        </Form.Item>
      </CustomForm>
      <GifGrid data={gifData} />
    </>
  );
};

export default MainPage;
