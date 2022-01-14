import { ReactNode } from 'react';

import { Layout } from 'antd';

import CustomFooter from 'components/layout/Footer/Footer';

import styles from './BaseLayout.module.scss';

const { Header, Content, Footer } = Layout;

interface IBaseLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ header, children }) => (
  <Layout className={`${styles.BaseLayout} ${styles.BaseLayoutMain}`}>
    <Header className={styles.HeaderAndFooterStyle}>{header}</Header>
    <Content className={styles.BaseLayoutContent}>{children}</Content>
    <Footer className={styles.HeaderAndFooterStyle}>
      <CustomFooter />
    </Footer>
  </Layout>
);

export default BaseLayout;
