const path = require('path');
const { override, fixBabelImports } = require('customize-cra');

// Add just the necessary icons to decrease bundle size
function overrides(config, env) {
  config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(__dirname, 'src/icons.js');

  return config;
}

const devServerConfig = () => (config) => {
  return {
    ...config,
    port: 3000,
  };
};

module.exports = {
  webpack: override(
    overrides,
    // TODO: Add aliased paths config
    // addWebpackAlias({
    //   '~': path.join(__dirname, 'src'),
    //   '@i18n': path.join(__dirname, 'src/i18n'),
    // }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
  ),
  devServer: overrideDevServer(devServerConfig()),
};
