import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    basePath: isProd ? '/models' : '', 
    assetPrefix: isProd ? '/models/' : '',
    images: { unoptimized: true} // GitHub Pages does not support Next.js image optimization
}; 
