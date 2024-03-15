/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
        domains: ['www.dartdesign.in'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dartdesign.in",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
