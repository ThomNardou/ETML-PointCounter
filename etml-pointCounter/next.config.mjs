/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      baseUrl: process.env.BASE_URL, // pulls from .env file
    }
};
  
export default nextConfig;