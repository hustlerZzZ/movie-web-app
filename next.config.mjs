/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.justwatch.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
