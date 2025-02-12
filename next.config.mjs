/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true, // Ensures correct routing in cPanel
    images: {
      unoptimized: true, // Prevents Next.js from using Image Optimization (which doesn't work in cPanel)
    },
};

export default nextConfig;