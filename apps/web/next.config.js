/** @type {import('next').NextConfig} */
const nextConfig = {
  // @repo/db ships TypeScript source, so Next.js has to compile it.
  transpilePackages: ["@repo/db"],
};

export default nextConfig;
