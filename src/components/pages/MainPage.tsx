import { Form, Input } from 'antd';
import CustomForm from '../shared/CustomForm';

const MainPage = () => {
  const onGiphyFormFinish = (values: string) => {
    console.log(values);
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
