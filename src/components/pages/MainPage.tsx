import { useState, useEffect } from 'react';

import { Form, Input } from 'antd';

import CustomForm from '../shared/CustomForm';

import giphy from '../../api/giphy';

import { MAX_GIF_OBJECTS } from '../../utils/constants';

const MainPage = () => {
  const [giphyQuery, setGiphyQuery] = useState<string>('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<unknown>([]);

  useEffect(() => {
    !!giphyQuery &&
      giphy
        .get('/gifs/search', {
          params: {
            q: giphyQuery,
            api_key: process.env.REACT_APP_GIPHY_API_KEY,
            limit: MAX_GIF_OBJECTS,
          },
        })
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          /* Handle errors here instead of a catch() block so that we don't swallow
        exceptions from actual bugs in components. */
          (err) => {
            setIsLoaded(true);
            setError(err);
          },
        );
  }, [giphyQuery]);

  const onGiphyFormFinish = (value: string) => {
    setGiphyQuery(value);
  };

  return (
    <CustomForm formName="giphy-form" onFinish={onGiphyFormFinish}>
      <Form.Item
        name="keyword"
        label="Search for a GIF"
        // rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Search GIPHY" />
      </Form.Item>
    </CustomForm>
  );
};

export default MainPage;
