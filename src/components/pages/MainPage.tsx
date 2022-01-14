import { useState, useRef } from 'react';

import { Form, Input, Row } from 'antd';

import { fetchGifs } from 'api/giphyApi';

import { TGifObject } from 'schemas/gifData_d';

import BaseLayout from 'components/layout/BaseLayout/BaseLayout';

import CustomForm from 'components/shared/CustomForm';
import GifGrid from 'components/shared/GifGrid/GifGrid';

import { TIMEOUT_DELAY } from 'utils/constants';

const MainPage = () => {
  const [gifData, setGifData] = useState<TGifObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const inputRef = useRef<Input>(null);
  const timeoutRef = useRef<number | null>(null);

  const inputCurrentValue = (): string => inputRef.current?.state.value;

  const onGiphyInputChange = () => {
    // Clear previous timeout if user is typing
    window.clearTimeout(Number(timeoutRef.current));

    if (inputCurrentValue()) {
      timeoutRef.current = window.setTimeout(() => {
        setIsLoading(!!inputCurrentValue());
        fetchGifs(inputCurrentValue()).then(
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
      }, TIMEOUT_DELAY);
    }
  };

  return (
    <BaseLayout
      header={
        <Row justify="center" align="middle" style={{ marginTop: '16px' }}>
          <CustomForm formName="giphy-form">
            <Form.Item name="keyword">
              <Input
                placeholder="Search GIPHY"
                onChange={onGiphyInputChange}
                allowClear
                ref={inputRef}
              />
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
