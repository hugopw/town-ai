// Default: site serves at the root. Each tenant's Vercel project
// just sets NEXT_PUBLIC_PLACE_SLUG and nothing else.
//
// If a tenant needs to be proxied behind a sub-path on a parent
// domain (e.g. ainightschool.org/harpenden-ai/), set TOWN_AI_BASE_PATH
// on that Vercel project. Otherwise leave it unset.
const basePath = process.env.TOWN_AI_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
