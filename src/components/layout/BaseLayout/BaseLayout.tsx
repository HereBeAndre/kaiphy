import { ReactNode } from 'react';

import { Layout } from 'antd';

import CustomFooter from '../Footer/Footer';

import './BaseLayout.css';

const { Header, Content, Footer } = Layout;

interface IBaseLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ header, children }) => (
  <Layout className="base-layout base-layout-main">
    <Header style={{ width: '100%', backgroundColor: '#5c217f' }}>{header}</Header>
    <Content className="base-layout-content">{children}</Content>
    <Footer style={{ width: '100%', backgroundColor: '#5c217f' }}>
      <CustomFooter />
    </Footer>
  </Layout>
);

export default BaseLayout;
