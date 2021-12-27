import { ReactNode } from 'react';

import { Button, Form } from 'antd';
import { FormLayout } from 'antd/lib/form/Form';

interface ICustomFormProps {
  formName: string;
  children: ReactNode;
  onFinish: (values: string) => void;
  layout?: FormLayout;
}

const CustomForm: React.FC<ICustomFormProps> = ({
  formName,
  children,
  onFinish,
  layout = 'inline',
}) => {
  const [form] = Form.useForm();

  return (
    <Form name={formName} form={form} onFinish={onFinish} autoComplete="off" layout={layout}>
      {children}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
