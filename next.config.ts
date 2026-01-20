import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix:  (process.env.NODE_ENV=="development" ? "." : "https://protectionspells.neocities.org"),
  turbopack:  {
    resolveExtensions: [
      '.yml',
      '.yaml',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
    rules: {
      '*.yml': {
        loaders: ['yaml-loader'],
        as: '*.js'
      },
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      }
    }
  }
};

export default nextConfig;
