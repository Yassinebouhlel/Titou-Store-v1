/* eslint-disable import/no-unresolved */
const withNextIntl = require('next-intl/plugin')();

const isProd = process.env.NODE_ENV === 'production';
module.exports = withNextIntl({images: {
    domains: ['www.titou.ma'], // Add your image domain here

  },
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  output: 'standalone',
});
