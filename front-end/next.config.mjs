/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or http
        hostname: "via.placeholder.com", // if your website has no www, drop it
      },
    ],
  },
};

export default nextConfig;
