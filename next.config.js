/** @type {import('next').NextConfig} */

const envVariables = {
  MAPBOX: process.env.MAPBOX,
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: envVariables,
};

module.exports = nextConfig;
