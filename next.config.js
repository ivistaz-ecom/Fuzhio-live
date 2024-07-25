/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig


// const webpack = require("webpack");

// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//   config.plugins.push(
//    new webpack.ProvidePlugin({
//    $: "jquery",
//    jQuery: "jquery",
//    "window.jQuery": "jquery",
// }));
// }
// return config;


