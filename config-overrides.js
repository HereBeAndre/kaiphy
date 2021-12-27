const path = require('path');
const { addWebpackAlias, override, fixBabelImports, addLessLoader } = require('customize-cra');

function overrides(config, env) {
  config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(__dirname, 'src/icons.js');

  return config;
}

module.exports = {
  webpack: override(
    overrides,
    addWebpackAlias({
      '~': path.join(__dirname, 'src'),
      '@i18n': path.join(__dirname, 'src/i18n'),
    }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      paths: ['./src/styles', './node_modules'],
      javascriptEnabled: true,
    }),
  ),
};
