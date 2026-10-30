/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build as plain static files, so no Next.js server runs in production
  output: "export",
  // Articles use plain <img>, so turn off the image optimization endpoint
  images: { unoptimized: true },
};

module.exports = nextConfig;
