const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true
});

module.exports = nextConfig;
