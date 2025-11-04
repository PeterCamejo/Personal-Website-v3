/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Need to run import and use Node fs
  /** next.config.js - with Webpack v5.x */
  /*webpack: (config, { isServer }) => {
    
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },*/

};


module.exports = nextConfig
