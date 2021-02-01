const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {};
module.exports = withPlugins([optimizedImages], nextConfig);

// const withOptimizedImages = require('next-optimized-images');

// module.exports = withOptimizedImages({
//   /* config for next-optimized-images */

//   // your config for other plugins or the general next.js here...
//   /**
//    * OPTION B:
//    * Chained with your own url-loader or file-loader
//    **/
//   test: /\.(png|jpe?g)$/,
//   loaders: [
//     {
//       loader: 'lqip-loader',
//       options: {
//         base64: true,
//         palette: false
//       }
//     },
//     {
//       loader: 'url-loader',
//       options: {
//         limit: 8000
//       }
//     }
//   ]

// });