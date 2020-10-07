const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {};
module.exports = withPlugins([optimizedImages], nextConfig);
