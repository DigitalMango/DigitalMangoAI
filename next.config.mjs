const isProd = process.env.NODE_ENV === 'production';

export default {
  basePath: isProd ? '/DigitalMangoAI' : '',
  assetPrefix: isProd ? '/DigitalMangoAI' : '',
  output: 'export', // for static export
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};