import { ReactNode } from 'react';

import { Button, Form } from 'antd';
import { FormLayout } from 'antd/lib/form/Form';

interface ICustomFormProps {
  formName: string;
  children: ReactNode;
  onFinish: (values: string) => void;
  disabled?: boolean;
  layout?: FormLayout;
}

const CustomForm: React.FC<ICustomFormProps> = ({
  formName,
  children,
  onFinish,
  disabled,
  layout = 'inline',
}) => {
  const [form] = Form.useForm();

  return (
    <Form name={formName} form={form} onFinish={onFinish} autoComplete="off" layout={layout}>
      {children}
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={disabled}>
          SEARCH
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
