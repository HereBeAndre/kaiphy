import { Row } from 'antd';

import giphyLogo from 'resources/giphyLogo.png';

const CustomFooter = () => (
  <Row justify="center" align="middle">
    <img style={{ maxWidth: '10rem' }} src={giphyLogo} alt="Powered by GIPHY" />
  </Row>
);

export default CustomFooter;
