const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/resources/nlp",
        permanent: true,
      },
    ];
  },
};
module.exports = withPlugins([optimizedImages], nextConfig);
