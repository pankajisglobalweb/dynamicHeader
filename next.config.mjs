/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    images: {
      unoptimized: true,
      minimumCacheTTL: 60,
      disableStaticImages: true,
      dangerouslyAllowSVG: true,
      domains: ['appnox.ai'],
    },
};

export default nextConfig;
