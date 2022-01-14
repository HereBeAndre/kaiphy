import { ReactNode } from 'react';

import { Button, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FormLayout } from 'antd/lib/form/Form';

interface ICustomFormProps {
  formName: string;
  children: ReactNode;
  onFinish?: (values: string) => void;
  disabled?: boolean;
  layout?: FormLayout;
  showSubmitButton?: boolean;
}

const CustomForm: React.FC<ICustomFormProps> = ({
  formName,
  children,
  onFinish,
  disabled,
  layout = 'inline',
  showSubmitButton = false,
}) => {
  const [form] = Form.useForm();

  return (
    <Form name={formName} form={form} onFinish={onFinish} autoComplete="off" layout={layout}>
      {children}
      <Form.Item>
        {showSubmitButton && (
          <Button htmlType="submit" icon={<SearchOutlined />} disabled={disabled}>
            SEARCH
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
