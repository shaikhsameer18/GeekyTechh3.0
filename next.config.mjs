import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      { source: "/favicon.ico", destination: "/favicon/favicon.ico", permanent: true },
      { source: "/apple-touch-icon.png", destination: "/favicon/apple-touch-icon.png", permanent: true },
    ];
  },
};

export default nextConfig;
