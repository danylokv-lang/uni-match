/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outputFileTracing: true, // Optimizes serverless output
  compress: true, // Minifies assets
  swcMinify: true, // Uses SWC for faster minification
  webpack: (config) => {
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
        vendors: false,
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
        },
      },
    };
    return config;
  },
};

export default nextConfig;
