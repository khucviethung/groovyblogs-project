/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    images: {
      remotePatterns: [
        {
          hostname: 'ghost.estudiopatagon.com',
        },
        {
          hostname: 'assets.shopfront.envato-static.com',
        },
        {
          hostname: 'estudiopatagon.com'
        }
      ]
    },
  };
  
  export default nextConfig;