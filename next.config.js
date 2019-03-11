const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass')

module.exports = withPlugins([
    [sass],
    { target: 'serverless' },
  ]);

